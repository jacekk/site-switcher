import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

if (typeof localStorage === 'undefined' || localStorage === null) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    global.localStorage = new LocalStorage(`${__dirname}/localStorageTemp`);
}
