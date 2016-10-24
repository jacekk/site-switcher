import {
    TOGGLE_LEFT_DRAWER,
} from '../constants/ActionTypes'; 

const initialState = {
    leftDrawer: {
        opened: false,
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
            
    };

    return state;
};

export default layout;
