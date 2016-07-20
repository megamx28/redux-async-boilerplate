var path = require('path');
var webpack = require('webpack');
var argv = require('yargs').argv;

const debug = require('debug')('app:webpack:base');
debug('Reading Base Config.');

const config = {
  env: process.env.NODE_ENV,

  devtool: 'cheap-module-eval-source-map',

  context: __dirname,

  entry: [
    __dirname + '/../src/index.js'
  ],

  output: {
    path: __dirname + '/../dist',
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/static/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [],

    preLoaders: [{
      test: /\.js?$/,
      loaders: ['eslint'],
      exclude: /node_modules/,
      include: __dirname
    }]
  }
};

config.globals = {
  'process.env': {
    'NODE_ENV': JSON.stringify(config.env)
  },
  '__DEV__': config.env === 'development',
  '__PROD__': config.env === 'production'
};

config.plugins = [
  new webpack.DefinePlugin(config.globals)
];

module.exports = config;
