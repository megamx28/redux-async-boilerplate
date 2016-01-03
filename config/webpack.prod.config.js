const path = require('path')
const config = require('./webpack.base.config')
const webpack = require('webpack')

const debug = require('debug')('app:webpack:production')
debug('Reading Production Config.')

config.output = {
    path: __dirname + '/../dist',
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/static/'
}

config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
        },
    })
)

debug('Source maps enabled for production.')
config.devtool = 'source-maps'

config.module.loaders.push(
	{
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        exclude: /node_modules/
    },
    {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
        ]
    },
    { test: /\.woff(\?.*)?$/,  loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
    { test: /\.woff2(\?.*)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
    { test: /\.ttf(\?.*)?$/,   loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
    { test: /\.eot(\?.*)?$/,   loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]' },
    { test: /\.svg(\?.*)?$/,   loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' }
)

module.exports = config