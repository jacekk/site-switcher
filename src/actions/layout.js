import * as types from '../constants/action-types';

export function toggleLeftDrawer(showOnTrue) {
    return {
        type: types.TOGGLE_LEFT_DRAWER,
        makeVisible: showOnTrue,
    };
}

export function toggleNewCollectionDialog(showOnTrue) {
    return {
        type: types.TOGGLE_NEW_COLLECTION_DIALOG,
        makeVisible: showOnTrue,
    };
}