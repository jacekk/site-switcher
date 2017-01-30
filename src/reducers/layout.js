import * as types from '../constants/action-types';

export const initialState = {
    leftDrawer: {
        opened: false,
    },
    newCollectionDialog: {
        opened: false,
    },
    editCollectionDialog: {
        opened: false,
    },
    removeCollectionDialog: {
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

        case types.TOGGLE_REMOVE_COLLECTION_DIALOG:
            return Object.assign({}, state, {
                removeCollectionDialog: {
                    opened: action.makeVisible,
                },
            });

        case types.REMOVE_COLLECTION:
            return Object.assign({}, state, {
                removeCollectionDialog: {
                    opened: false,
                },
            });
    };

    return state;
};

export default layout;
