const baseConfig = require('./webpack.base.config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJson = require('./package.json');

const distPath = path.join(__dirname, packageJson.config.dist_dir_path);

module.exports = Object.assign({}, baseConfig.webpackOptions, {
  devtool: 'eval',

  output: {
    path: distPath,

    // webpack-dev-server hosts directly from http://localhost:8080.
    // So, instead of relying on user-specified context root, hardcode as /
    publicPath: '/',

    // When using `chunkhash` on filenames, webpack-dev-server throws an error:-
    // "Cannot use [chunkhash] for chunk in 'js/[name].[chunkhash].js' (use [hash] instead)"
    // So, instead of using `hash`, removed hash from filenames to speed up performance
    // https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.kbk0zei4k
    filename: 'js/[name].js',

    // Include comments with information about the modules to complement devtool="eval"
    // https://github.com/webpack/docs/wiki/build-performance#sourcemaps
    pathinfo: true
  },

  devServer: {
    contentBase: distPath,

    // Enable history API fallback so HTML5 History API based
    // routing works. This is a good default that will come
    // in handy in more complicated setups.
    historyApiFallback: true,

    hot: true,
    inline: true,
    progress: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only'
  },

  plugins: baseConfig.webpackOptions.plugins.concat([
    // Enable Hot Module Replacement (HMR) to exchange, add, or remove modules while
    // an application is running without a page reload.
    new webpack.HotModuleReplacementPlugin(),

    // When there are errors while compiling this plugin skips the emitting phase
    // (and recording phase), so there are no assets emitted that include errors.
    new webpack.NoErrorsPlugin(),

    // Generates `index.html` at the default location, which is dist dir, so that webpack-dev-server
    // can find it
    new HtmlWebpackPlugin(baseConfig.htmlWebpackPluginOptions)
  ])
});
