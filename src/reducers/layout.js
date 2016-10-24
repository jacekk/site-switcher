import {
    TOGGLE_LEFT_DRAWER,
    TOGGLE_NEW_COLLECTION_DIALOG,
} from '../constants/action-types'; 

const initialState = {
    leftDrawer: {
        opened: false,
    },
    newCollectionDialog: {
        opened: true,
    },
};

const layout = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_LEFT_DRAWER:
            return Object.assign({}, state, { 
                leftDrawer: {
                    opened: action.makeVisible,
                },
            });
        case TOGGLE_NEW_COLLECTION_DIALOG:
            return Object.assign({}, state, { 
                newCollectionDialog: {
                    opened: action.makeVisible,
                },
            });
            
    };

    return state;
};

export default layout;
