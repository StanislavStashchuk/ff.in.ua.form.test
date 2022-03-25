const path = require('path');

const config = require('./site.config');
const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');

module.exports = {
  context: path.join(config.root, config.paths.src),
  entry: [
    path.join(config.root, config.paths.src, 'javascripts/main.js'),
    path.join(config.root, config.paths.src, 'stylesheets/main.scss'),
  ],
  output: {
    path: path.join(config.root, config.paths.dist),
    filename: '[name].[hash].js',
  },
  mode: ['production', 'development'].includes(config.env)
    ? config.env
    : 'development',
  devtool: config.env === 'production'
    ? 'hidden-source-map'
    : 'eval-source-map',
  devServer: {
    contentBase: path.join(config.root, config.paths.src),
    watchContentBase: true,
    hot: true,
    open: false,
    port: config.port,
    host: config.dev_host,
  },
  module: {
    rules: loaders,
  },
  plugins,
};