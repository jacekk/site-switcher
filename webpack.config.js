const webpack = require('webpack');

const isDevMode = process.argv.indexOf('--hot') > -1;

let plugins = [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendors.js"),
];

if (! isDevMode) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        include: /main/,
    }));
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        include: /vendors/,
        compress: {
            warnings: false,
        },
    }));
    plugins.push(new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production"),
            BROWSER: JSON.stringify(true),
        },
    }));
}

module.exports = {
  context: __dirname,
  plugins: plugins,
  entry: {
    jsx: "./src/index.jsx",
    css: "./src/main.css",
    html: "./src/index.html",
    htaccess: "./src/.htaccess",
    vendor: [ // those cause warnings in UglifyJs:
      "redux",
      "react-router",
      "react-redux",
      "react-router-redux",
      "react-tap-event-plugin",
      "material-ui",
    ],
  },
  output: {
    path: __dirname + "/static",
    filename: "main.js",
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
