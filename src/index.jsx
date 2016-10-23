import AppContainer from './components/App';
import store from './store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for React Developer Tools
window.React = React;

// Needed for onTouchTap --> https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
