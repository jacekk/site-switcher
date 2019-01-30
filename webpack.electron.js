const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const createBaseConfig = require('./webpack.config.js');

module.exports = (_, argv) => {
    const baseConfig = createBaseConfig(_, argv);

    delete baseConfig.devServer;

    baseConfig.output.path = path.resolve(__dirname, './electron-app/dist');

    baseConfig.plugins = [
        new CopyWebpackPlugin([
            { from: './src/electron-app.html' },
            { from: './src/main.css' },
        ]),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(argv.mode),
                BROWSER: JSON.stringify(true),
            },
        }),
    ];

    return baseConfig;
};
