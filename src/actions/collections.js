import * as types from '../constants/action-types';

export function addNewCollection(id, title) {
    return {
        type: types.ADD_NEW_COLLECTION,
        id,
        title,
    };
}

export function saveCollectionTitle(collectionId, title) {
    return {
        type: types.SAVE_COLLECTION_TITLE,
        collectionId,
        title,
    }
}

export function removeCollection(collectionId) {
    return {
        type: types.REMOVE_COLLECTION,
        collectionId,
    }
}

export function addNewCollectionLink(data, collectionId) {
    return {
        type: types.ADD_NEW_COLLECTION_LINK,
        payload: data,
        collectionId,
    }
}

export function saveCollectionLink(data, collectionId, linkId) {
    return {
        type: types.SAVE_COLLECTION_LINK,
        payload: data,
        collectionId,
        linkId,
    }
}

export function moveCollectionLinkUp(id, index) {
    return {
        type: types.MOVE_COLLECTION_LINK_UP,
        id,
        index,
    };
}

export function removeCollectionLink(collectionId, linkId) {
    return {
        type: types.REMOVE_COLLECTION_LINK,
        collectionId,
        linkId,
    }
}
