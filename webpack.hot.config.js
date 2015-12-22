const path = require('path');
const config = require('./webpack.base.config');
const webpack = require("webpack");

config.entry.push(
	'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server'
);

config.output = {
    path: __dirname + '/src/dist',
    filename: "bundle.js",
    publicPath: 'http://localhost:3000/static/'
};

config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
];

config.module.loaders.push(
	{
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname,
    },
    {
        test: /\.scss$/,
        include: __dirname,
        loaders: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
        ]
    },
    { test: /\.woff(\?.*)?$/,  loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff" },
    { test: /\.woff2(\?.*)?$/, loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2" },
    { test: /\.ttf(\?.*)?$/,   loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream" },
    { test: /\.eot(\?.*)?$/,   loader: "file-loader?prefix=fonts/&name=[path][name].[ext]" },
    { test: /\.svg(\?.*)?$/,   loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml" }
);

module.exports = config;