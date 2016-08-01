var path = require('path');
var webpack = require('webpack');
var config = require('../config/webpack.base.config');

config.module.loaders.push(
  {
    test: /\.(js|jsx)$/,
    loaders: ['babel'],
    exclude: /node_modules/
  },
  {
    test: /\.scss$/,
    loaders: ['style', 'css', 'sass'],
    exclude: /node_modules/
  },
  { test: /\.woff(\?.*)?$/,  loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
  { test: /\.woff2(\?.*)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
  { test: /\.ttf(\?.*)?$/,   loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
  { test: /\.eot(\?.*)?$/,   loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]' },
  { test: /\.svg(\?.*)?$/,   loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' }
);

module.exports = config;
