const webpack = require('webpack');

const isDevMode = process.argv.indexOf('--hot') > -1;

let plugins = [];

if (! isDevMode) {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  context: __dirname,
  plugins: plugins,
  entry: {
    jsx: "./src/index.jsx",
    css: "./src/main.css",
    html: "./src/index.html",
    htaccess: "./src/.htaccess",
  },
  output: {
    path: __dirname + "/static",
    filename: "bundle.js",
  },
  module: {
    preLoaders: [
        //Eslint loader
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "eslint-loader"},
    ],
    loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/, loader: "file?name=[name].[ext]" },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot","babel-loader"]},
      { test: /\.htaccess$/, loader: "file?name=[name].[ext]" },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  eslint: {
    configFile: './.eslintrc',
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
};
