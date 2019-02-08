import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

if (typeof localStorage === 'undefined' || localStorage === null) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    global.localStorage = new LocalStorage(`${__dirname}/localStorageTemp`);
}

if (typeof sessionStorage === 'undefined' || sessionStorage === null) {
    global.sessionStorage = require('sessionstorage');
}

global.document.title = 'SiteSwitcher tests';
global.window = document.defaultView;
global.navigator = global.window.navigator;
