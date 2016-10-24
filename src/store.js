import allReducers from './reducers/index';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { routerReducer } from 'react-router-redux';
import { combineReducers, compose, createStore } from 'redux';

const defaultState = {};
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
    combineReducers({
        ...allReducers,
        routing: routerReducer,
    }),
    defaultState,
    enhancers
);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;