const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const debug = require('debug')('app:webpack:base');

debug('Reading Base Config.');

const config = {
  context: __dirname,

  devtool: 'cheap-module-eval-source-map',

  /**
   * Entry tells webpack where to start looking.
   */
  entry: {
    app: path.join(__dirname, '/../src'),
    vendor: [
      'react',
      'react-dom',
      'react-router'
    ]
  },

  /**
   * Output tells webpack where to dump the files it has processed.
   * [name].[hash].js will output something like app.3531f6aad069a0e8dc0e.js
   */
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist/')
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      { test: /\.woff(\?.*)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?.*)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
      { test: /\.ttf(\?.*)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?.*)?$/, loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]' },
      { test: /\.svg(\?.*)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' }
    ]
  }
};

config.plugins = [

  /**
   * Used to split out our specific vendor script
   */
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: '[name].[hash].js',
  }),

  /**
   * HtmlWebpackPlugin will make sure out JavaScript files are being called
   * from within our index.html
   */
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '../index.html'),
    filename: 'index.html',
    inject: 'body',
    cache: true,
    minify: {
      caseSensitive: true,
      html5: true,
      collapseWhitespace: true,
      removeComments: true
    }
  }),

  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV === 'development',
    __PROD__: process.env.NODE_ENV === 'production'
  }),

  new webpack.LoaderOptionsPlugin({
    debug: false
  })

];

module.exports = config;
