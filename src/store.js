import allReducers from './reducers/index';
import { browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { routerReducer } from 'react-router-redux';
import { combineReducers, compose, createStore } from 'redux';
import persistState from 'redux-localstorage';

const isElectronApp = window.location.protocol.includes('file:');
const defaultState = {};
const enhancers = compose(
    persistState(null, {
        key: 'site-switcher-v0.2.0',
    }),
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

export const history = syncHistoryWithStore(
    isElectronApp ? hashHistory : browserHistory,
    store
);

if (module['hot']) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
