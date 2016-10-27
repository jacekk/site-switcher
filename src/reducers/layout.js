import * as types from '../constants/action-types';

const initialState = {
    leftDrawer: {
        opened: false,
    },
    newCollectionDialog: {
        opened: false,
    },
    editCollectionDialog: {
        opened: false,
    },
};

const layout = (state = initialState, action) => {
    switch (action.type) {

        case types.TOGGLE_LEFT_DRAWER:
            return Object.assign({}, state, {
                leftDrawer: {
                    opened: action.makeVisible,
                },
            });

        case types.TOGGLE_NEW_COLLECTION_DIALOG:
            return Object.assign({}, state, {
                newCollectionDialog: {
                    opened: action.makeVisible,
                },
            });

        case types.TOGGLE_EDIT_COLLECTION_DIALOG:
            return Object.assign({}, state, {
                editCollectionDialog: {
                    opened: action.makeVisible,
                },
            });
    };

    return state;
};

export default layout;
