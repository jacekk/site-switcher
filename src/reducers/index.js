import { combineReducers } from 'redux';
import layout from './layout';
import collections from './collections';

const rootReducer = combineReducers({
    layout,
    collections,
});

export default rootReducer;
