import { jsdom } from 'jsdom';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const jsDomMarkup = '<!doctype html><html><body><div id="app"></div></body></html>';
const jsDomOpts = {
    url: 'http://localhost/',
};

if (typeof localStorage === 'undefined' || localStorage === null) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    global.localStorage = new LocalStorage(`${__dirname}/localStorageTemp`);
}

if (typeof sessionStorage === 'undefined' || sessionStorage === null) {
    global.sessionStorage = require('sessionstorage');
}

global.document = jsdom(jsDomMarkup, jsDomOpts);
global.document.title = 'SiteSwitcher tests';
global.window = document.defaultView;
global.navigator = global.window.navigator;
