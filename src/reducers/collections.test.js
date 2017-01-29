import reducer, { initialState } from './collections';
import * as actions from '../actions/collections';
import * as playerActions from  '../actions/player';
import actionTypes from '../constants/action-types';

describe('reducers/collections', () => {
    const defaultDocTitle = global.document.title;
    const firstId = 'id-111';
    const firstTitle = 'first collection title (111)';
    const collectionId = 'coll-321';
    const collectionTitle = 'some collection title (321)';
    const lastId = 'id-333';
    const lastTitle = 'last collection title (333)';

    const firstLinkData = {
        title: 'first link title',
        url: 'http://first-example.com',
        isActive: true,
        duration: 5,
    };
    const anotherLinkData = {
        title: 'another link title',
        url: 'http://some-example.com',
        isActive: false,
        duration: 10,
    };

    let state;
    let reduced;

    beforeEach(() => {
        state = Object.assign({}, initialState);
    });

    afterEach(() => {
        global.document.title = defaultDocTitle;
    });

    it('does not modify state for non supported action', () => {
        expect(reducer(state, { type: 'not defined' })).toEqual(state);
    });

    it('adds new collection', () => {
        expect(Object.keys(state).length).toEqual(0);

        reduced = reducer(state, actions.addNewCollection(collectionId, collectionTitle));

        expect(Object.keys(state).length).toEqual(0);
        expect(Object.keys(reduced).length).toEqual(1);
        expect(reduced[collectionId].title).toEqual(collectionTitle);
    });

    it('updates collection title', () => {
        const newTitle = 'new title 123x';

        reduced = reducer(state, actions.addNewCollection(collectionId, collectionTitle));
        reduced = reducer(reduced, actions.saveCollectionTitle(collectionId, newTitle))

        expect(reduced[collectionId].title).toEqual(newTitle);
    });

    it('removes collection', () => {
        reduced = reducer(state, actions.addNewCollection(firstId, firstTitle));
        reduced = reducer(reduced, actions.addNewCollection(collectionId, collectionTitle));
        reduced = reducer(reduced, actions.addNewCollection(lastId, lastTitle));
        reduced = reducer(reduced, actions.removeCollection(collectionId));

        expect(Object.keys(reduced).length).toEqual(2);
        expect(reduced[firstId].title).toEqual(firstTitle);
        expect(reduced[lastId].title).toEqual(lastTitle);
    });

    describe('some collections and links exist', () => {

        beforeEach(() => {
            reduced = reducer(state, actions.addNewCollection(collectionId, collectionTitle));
            reduced = reducer(reduced, actions.addNewCollectionLink(firstLinkData, collectionId));
        });

        it('adds link to collection', () => {
            expect(reduced[collectionId].links.length).toEqual(1);

            reduced = reducer(reduced, actions.addNewCollectionLink(anotherLinkData, collectionId));

            expect(reduced[collectionId].links.length).toEqual(2);
            expect(reduced[collectionId].links[1].title).toEqual(anotherLinkData.title);
        });

        it('updates collection link', () => {
            expect(reduced[collectionId].links[0].title).toEqual(firstLinkData.title);

            reduced = reducer(reduced, actions.saveCollectionLink(anotherLinkData, collectionId, 0));

            expect(reduced[collectionId].links.length).toEqual(1);
            expect(reduced[collectionId].links[0].title).toEqual(anotherLinkData.title);
        });

        it('removes collection link', () => {
            reduced = reducer(reduced, actions.addNewCollectionLink(anotherLinkData, collectionId));

            expect(reduced[collectionId].links.length).toEqual(2);

            reduced = reducer(reduced, actions.removeCollectionLink(collectionId, 0));

            expect(reduced[collectionId].links.length).toEqual(1);
            expect(reduced[collectionId].links[0].title).toEqual(anotherLinkData.title);
        });

        it('moves second collection link up to be first', () => {
            const thirdLink = {
                title: 'some additional link title',
            };

            reduced = reducer(reduced, actions.addNewCollectionLink(anotherLinkData, collectionId));
            reduced = reducer(reduced, actions.addNewCollectionLink(thirdLink, collectionId));

            expect(reduced[collectionId].links.length).toEqual(3);
            expect(reduced[collectionId].links[0].title).toEqual(firstLinkData.title);
            expect(reduced[collectionId].links[1].title).toEqual(anotherLinkData.title);
            expect(reduced[collectionId].links[2].title).toEqual(thirdLink.title);

            reduced = reducer(reduced, actions.moveCollectionLinkUp(collectionId, 1));

            expect(reduced[collectionId].links.length).toEqual(3);
            expect(reduced[collectionId].links[0].title).toEqual(anotherLinkData.title);
            expect(reduced[collectionId].links[1].title).toEqual(firstLinkData.title);
            expect(reduced[collectionId].links[2].title).toEqual(thirdLink.title);
        });

        it('does not move link up if it is first already', () => {
            reduced = reducer(reduced, actions.addNewCollectionLink(anotherLinkData, collectionId));

            expect(reduced[collectionId].links.length).toEqual(2);
            expect(reduced[collectionId].links[0].title).toEqual(firstLinkData.title);
            expect(reduced[collectionId].links[1].title).toEqual(anotherLinkData.title);

            reduced = reducer(reduced, actions.moveCollectionLinkUp(collectionId, 0));

            expect(reduced[collectionId].links[0].title).toEqual(firstLinkData.title);
            expect(reduced[collectionId].links[1].title).toEqual(anotherLinkData.title);
        });

        it('updates document title when collection starts to play', () => {
            const titleFromFirstLink = [
                firstLinkData.title,
                collectionTitle,
            ].join(' | ');

            expect(global.document.title).toEqual(defaultDocTitle);

            reduced = reducer(reduced, playerActions.collectionStartedPlaying(0, collectionId));

            expect(global.document.title).toEqual(titleFromFirstLink);
        });

        it('updates document title when next link starts to play', () => {
            const titleFromNextLink = [
                anotherLinkData.title,
                collectionTitle,
            ].join(' | ');

            reduced = reducer(reduced, actions.addNewCollectionLink(anotherLinkData, collectionId));

            expect(global.document.title).toEqual(defaultDocTitle);

            reduced = reducer(reduced, playerActions.collectionStartedPlaying(0, collectionId));
            reduced = reducer(reduced, playerActions.playNextLink(1, collectionId));

            expect(global.document.title).toEqual(titleFromNextLink);
        });

        it('does not change document title if collection is missing', () => {
            expect(global.document.title).toEqual(defaultDocTitle);

            reduced = reducer(reduced, playerActions.collectionStartedPlaying(0, 'non-valid-collection-id'));

            expect(global.document.title).toEqual(defaultDocTitle);
        });

        it('does not change document title if link or collection titles are empty (barely possible)', () => {
            expect(global.document.title).toEqual(defaultDocTitle);

            reduced = reducer(reduced, actions.saveCollectionTitle(collectionId, ''));
            reduced = reducer(reduced, actions.saveCollectionLink({ title: '' }, collectionId, 0));

            reduced = reducer(reduced, playerActions.collectionStartedPlaying(0, collectionId));

            expect(global.document.title).toEqual(defaultDocTitle);
        });

        it('restores document title route change', () => {
            const titleFromFirstLink = [
                firstLinkData.title,
                collectionTitle,
            ].join(' | ');

            expect(global.document.title).toEqual(defaultDocTitle);

            reduced = reducer(reduced, playerActions.collectionStartedPlaying(0, collectionId));

            expect(global.document.title).toEqual(titleFromFirstLink);

            reduced = reducer(reduced, { type: actionTypes.ROUTER_LOCATION_CHANGE });

            expect(global.document.title).toEqual(defaultDocTitle);
        });
    });
});
