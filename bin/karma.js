var webpack = require('webpack');
var argv = require('yargs').argv;
var webpackConfig = require('../config/webpack.karma.config');

var reporters = ['mocha'];
if (argv.coverage) reporters.push('coverage');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    // Just run once by default
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      './../tests/tests.webpack.js'
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-coverage',
      'karma-mocha-reporter'
    ],
    preprocessors: {
      // Preprocess with webpack and our sourcemap loader
      './../tests/tests.webpack.js': ['webpack', 'sourcemap']
    },
    // Report results in this format
    reporters: reporters,
    webpack: webpackConfig,
    webpackServer: {
      // Don't spam the console when running in karma!
      noInfo: true
    },
    coverageReporter: {
      dir: './../coverage/',
      reporters: [
        { type : 'text-summary' },
        { type: 'html', subdir: 'html' }
      ]
    }
  });
};