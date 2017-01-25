import * as types from '../constants/action-types';

export const initialState = {
    lastPlayedCollectionId: null,
    currentLinkId: 0,
};

const player = (state = initialState, action) => {
    switch (action.type) {

        case types.ROUTER_LOCATION_CHANGE:
            return Object.assign({}, state, {
                currentLinkId: initialState.currentLinkId,
            });

        case types.PLAY_NEXT_LINK:
            return Object.assign({}, state, {
                lastPlayedCollectionId: action.collectionId,
                currentLinkId: action.nextLinkId,
            });
    }

    return state;
}

export default player;
