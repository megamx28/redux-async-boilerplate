var webpack = require('webpack');

module.exports = function(config) {
    config.set({
        browsers: [process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'Chrome'],
        // Just run once by default
        singleRun: true,
        // Use the mocha test framework
        frameworks: ['mocha', 'chai'],
        files: [
            './../tests/tests.webpack.js'
        ],
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-chai',
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
        reporters: ['mocha', 'coverage'],
        webpack: {
            // Just do inline source maps instead of the default
            devtool: 'inline-source-map',
            module: {
                loaders: [{
                    test: /\.js$/,
                    exclude: /(test|node_modules)\//,
                    loader: 'babel'
                }],
                // Delays coverage til after tests are run, fixing transpiled source coverage error
                postLoaders: [{
                    test: /\.js$/,
                    exclude: /(test|node_modules)\//,
                    loader: 'istanbul-instrumenter'
                }]
            }
        },
        webpackServer: {
            // Don't spam the console when running in karma!
            noInfo: true
        },
        coverageReporter: {
            // Path to created html doc
            dir: './../coverage/',
            reporters: [
                { type : 'text-summary' },
                // Produces a html document after code is run
                { type: 'html', subdir: 'html' }
            ]
        }
    });
};