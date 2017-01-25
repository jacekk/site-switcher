# Site switcher

[![Build Status](https://travis-ci.org/jacekk/site-switcher.svg)](https://travis-ci.org/jacekk/site-switcher)

Simple web app that allowes to configure some URLs and display their content one after another.
Switch time is configurable for each URL. Multiple collections are allowed.
Configuration is stored in browsers local storage, and saved nowhere else.

### Preview

![site-switcher jacekk](https://cloud.githubusercontent.com/assets/1695878/22272040/27325a98-e298-11e6-81cb-17f75a1d9ade.gif)

**Note:** This app uses `iframe` element to load content, so all its limitations are inherited.
For example, sites that have set `X-Frame-Options` header will NOT work.
Electron app, which might solve that and some other issues, is still a *someday* plan :)

### Built with:

* [React](https://facebook.github.io/react/)
* [Redux](http://rackt.org/redux/index.html)
* [Material UI](http://material-ui.com/#/)
* [webpack](https://webpack.github.io/)
* [Babel](https://babeljs.io/)
* [ESLint](http://eslint.org/)

### Requirements:

* node 6/7
* npm 3/4

### License

MIT
