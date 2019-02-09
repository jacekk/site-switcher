import allReducers from './reducers/index';
import { browserHistory, hashHistory, createMemoryHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { combineReducers, compose, createStore } from 'redux';
import persistState from 'redux-localstorage';

const isElectronApp = window.location.protocol && window.location.protocol.indexOf('file:') > -1;
const defaultState = {};
const enhancers = compose(
    persistState(null, {
        key: 'site-switcher-v0.2.0',
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

const store = createStore(
    combineReducers({
        ...allReducers,
        routing: routerReducer,
    }),
    defaultState,
    enhancers
);

const history = process.env.NODE_ENV === 'test' ?
    createMemoryHistory() :
    syncHistoryWithStore(isElectronApp ? hashHistory : browserHistory, store);

if (module['hot']) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export {
    history,
}

export default store;
