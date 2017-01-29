import reducer, { initialState } from './player';
import * as actions from '../actions/player';
import actionTypes from '../constants/action-types';

describe('reducers/players', () => {
    const linkId = 'link-123';
    const collectionId = 'coll-321';
    let state;
    let reduced;

    beforeEach(() => {
        state = Object.assign({}, initialState);
    });

    it('does not modify state for non supported action', () => {
        expect(reducer(state, { type: 'not defined' })).toEqual(state);
    });

    it('saves link id and collection id on next link play', () => {
        reduced = reducer(state, actions.playNextLink(linkId, collectionId));

        expect(reduced.currentLinkId).toEqual(linkId);
        expect(reduced.lastPlayedCollectionId).toEqual(collectionId);

        expect(state.currentLinkId).toEqual(initialState.currentLinkId);
        expect(state.lastPlayedCollectionId).toEqual(initialState.lastPlayedCollectionId);
    });

    it('resets current link id on route change', () => {
        state = reducer(state, actions.playNextLink(linkId, collectionId));

        expect(state.currentLinkId).toEqual(linkId);

        reduced = reducer(state, { type: actionTypes.ROUTER_LOCATION_CHANGE });

        expect(reduced.currentLinkId).toEqual(initialState.currentLinkId);
        expect(state.currentLinkId).toEqual(linkId);
    });
});
