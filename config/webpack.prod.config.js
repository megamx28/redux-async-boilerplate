const path = require('path');
const config = require('./webpack.base.config');
const webpack = require('webpack');

const debug = require('debug')('app:webpack:production');

debug('Reading Production Config.');

debug('Setting Input Paths.');

config.output = {
  path: path.join(__dirname, '/../dist'),
  filename: 'bundle.js',
  publicPath: 'http://localhost:3000/static/'
};

debug('Uglifying Source Code.');

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    minimize: true,
    compress: {
      warnings: false,
    },
  })
);

debug('Enabling Source maps.');

config.devtool = 'source-maps';

module.exports = config;
