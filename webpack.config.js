const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DotEnv = require('dotenv-webpack');
const path = require('path');
const webpack = require('webpack');

module.exports = (_, argv) => {
    const isDevMode = argv.mode !== 'production';

    return {
        context: __dirname,
        entry: {
            main: './src/main.jsx',
        },
        output: {
            path: path.resolve(__dirname, './static'),
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        devServer: {
            contentBase: './static',
            historyApiFallback: true,
            port: 8081,
        },
        plugins: [
            new CleanWebpackPlugin(['./static']),
            new CopyWebpackPlugin([
                { from: './src/index.html' },
                { from: './src/main.css' },
            ]),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production'),
                'process.env.BROWSER': JSON.stringify(true),
            }),
            !isDevMode && new DotEnv(),
        ].filter(Boolean),
    };
};
