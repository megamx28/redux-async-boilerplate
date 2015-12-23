var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    context: __dirname,

    entry: [
        __dirname + '/src/index.jsx'
    ],

    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/static/'
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

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
}
