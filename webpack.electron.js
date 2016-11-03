const webpack = require('webpack');
const webpackBase = require('./webpack.config.js');

delete webpackBase.devServer;
delete webpackBase.entry.vendor;

webpackBase.output.path = __dirname + "/electron/dist";
webpackBase.entry.html = "./src/electron-app.html";

webpackBase.plugins = [
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production"),
            BROWSER: JSON.stringify(true),
        },
    }),
];

module.exports = webpackBase;
