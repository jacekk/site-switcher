import * as types from '../constants/ActionTypes';

export function toggleLeftDrawer(showOnTrue) {
    return {
        type: types.TOGGLE_LEFT_DRAWER,
        makeVisible: showOnTrue,
    };
}
