var path = require('path');
var webpack = require('webpack');

const config = {
    // Just do inline source maps instead of the default
    devtool: 'inline-source-map',

    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /(test|node_modules)\//,
            loader: 'babel'
          },
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        ],

        // Delays coverage til after tests are run,
        // fixing transpiled source coverage error
        postLoaders: [{
            test: /\.js$/,
            exclude: /(tests|node_modules)\//,
            loader: 'istanbul-instrumenter'
        }]
    },

    externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }
}

module.exports = config;
