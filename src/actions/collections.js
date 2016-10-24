import * as types from '../constants/action-types';

export function addNewCollection(id, title) {
    return {
        type: types.ADD_NEW_COLLECTION,
        id,
        title,
    };
}
