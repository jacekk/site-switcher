import * as types from '../constants/action-types';

export function playNextLink(nextLinkId, collectionId) {
    return {
        type: types.PLAY_LINK,
        nextLinkId,
        collectionId,
    };
}
