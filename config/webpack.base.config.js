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
    alias: {
      'actions': path.join(__dirname, '/../src/actions'),
      'components': path.join(__dirname, '/../src/components'),
      'constants': path.join(__dirname, '/../src/constants'),
      'containers': path.join(__dirname, '/../src/containers'),
      'layouts': path.join(__dirname, '/../src/layouts'),
      'middleware': path.join(__dirname, '/../src/middleware'),
      'routes': path.join(__dirname, '/../src/routes'),
      'reducers': path.join(__dirname, '/../src/reducers'),
      'store': path.join(__dirname, '/../src/store'),
      'utils': path.join(__dirname, '/../src/utils'),
      'views': path.join(__dirname, '/../src/views')
    },
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
