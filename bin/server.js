var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./../config/webpack.hot.config');

const debug = require('debug')('app:server');

debug('Creating Webpack Dev Server.');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  quiet: false,
  stats: {
    colors: true
  },
  historyApiFallback: true
}).listen(3000, 'localhost', (err, result) => {
  if (err) {
    debug(`There was an error creating Webpack Dev Server: ${err}`);
  }

  debug('Listening at localhost:3000');
});
