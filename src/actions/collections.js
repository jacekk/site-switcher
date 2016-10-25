import * as types from '../constants/action-types';

export function addNewCollection(id, title) {
    return {
        type: types.ADD_NEW_COLLECTION,
        id,
        title,
    };
}

export function addNewCollectionLink(data, collectionId) {
    return {
        type: types.ADD_NEW_COLLECTION_LINK,
        payload: data,
        collectionId,
    }
}

export function moveCollectionLinkUp(id, index) {
    return {
        type: types.MOVE_COLLECTION_LINK_UP,
        id,
        index,
    };
}
