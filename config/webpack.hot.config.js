const path = require('path');
const config = require('./webpack.base.config');
const webpack = require('webpack');

const debug = require('debug')('app:webpack:hot');

debug('Reading Hot Config.');

debug('Setting Input Paths.');

config.entry.push(
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server'
);

debug('Seting Output Paths.');

config.output = {
  path: path.join(__dirname, '/../dist'),
  filename: 'bundle.js',
  publicPath: 'http://localhost:3000/static/'
};

debug('Initializing Plugins.');

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
);

module.exports = config;
