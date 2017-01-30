import reducer, { initialState } from './layout';
import * as actions from '../actions/layout';
import * as collectionsActions from '../actions/collections';

describe('reducers/players', () => {
    let state;
    let reduced;

    beforeEach(() => {
        state = Object.assign({}, initialState);
    });

    it('does not modify state for non supported action', () => {
        expect(reducer(state, { type: 'not defined' })).toEqual(state);
    });

    it('toggles some elements openness flag', () => {
        const elementsMap = {
            leftDrawer: 'toggleLeftDrawer',
            newCollectionDialog: 'toggleNewCollectionDialog',
            editCollectionDialog: 'toggleEditCollectionDialog',
            removeCollectionDialog: 'toggleRemoveCollectionDialog',
        };

        Object.keys(elementsMap).forEach((elemName) => {
            const actionName = elementsMap[elemName];

            expect(state[elemName].opened).toEqual(false);

            reduced = reducer(state, actions[actionName](true));

            expect(reduced[elemName].opened).toEqual(true);

            reduced = reducer(reduced, actions[actionName](false));

            expect(reduced[elemName].opened).toEqual(false);
        });
    });

    it('hides collection removal dialog on collection remove', () => {
        reduced = reducer(state, actions.toggleRemoveCollectionDialog(true));

        expect(reduced.removeCollectionDialog.opened).toEqual(true);

        reduced = reducer(reduced, collectionsActions.removeCollection('whatever'));

        expect(reduced.removeCollectionDialog.opened).toEqual(false);
    });
});
