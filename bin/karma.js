var webpackConfig = require('./../config/webpack.prod.config');
webpackConfig.devtool = 'inline-source-map';

module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        singleRun: true,
        frameworks: ['mocha', 'chai', 'sinon', 'sinon-chai'],
        files: [
            './../tests/tests.webpack.js'
        ],
        plugins: [
            'karma-babel-preprocessor',
            'karma-phantomjs-launcher',
            'karma-chai',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-webpack',
            'karma-mocha-reporter',
            'karma-sinon',
            'karma-sinon-chai',
            'karma-coverage'
        ],
        preprocessors: {
            './../tests/tests.webpack.js': ['webpack', 'sourcemap']
        },
        reporters: ['mocha', 'coverage'],
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        },
        autoWatch: true,
        coverageReporter: {
            dir : './../coverage/',
            reporters: [
                { type : 'text-summary' },
                { type: 'html', subdir: 'html' }
            ]
        }
    });
};