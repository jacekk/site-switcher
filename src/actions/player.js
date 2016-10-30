import * as types from '../constants/action-types';

export function collectionStartedPlaying(linkId, collectionId) {
    return {
        type: types.COLLECTION_STARTED_PLAYING,
        linkId,
        collectionId,
    };
}

export function playNextLink(nextLinkId, collectionId) {
    return {
        type: types.PLAY_NEXT_LINK,
        nextLinkId,
        collectionId,
    };
}
