import * as types from '../constants/action-types';

const initialState = {
    lastPlayedCollectionId: null,
    currentLinkId: 0,
};

const player = (state = initialState, action) => {
    switch (action.type) {
        case types.PLAY_LINK: {
            return Object.assign({}, state, {
                lastPlayedCollectionId: action.collectionId,
                currentLinkId: action.nextLinkId,
            });
        }
    }

    return state;
}

export default player;
