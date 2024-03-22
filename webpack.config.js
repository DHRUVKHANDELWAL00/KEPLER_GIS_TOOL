
const resolve = require('path').resolve;
const join = require('path').join;
const webpack = require('webpack');

const CONFIG = {
  entry: {
    app: resolve('./src/main.js')
  },
  output: {
    path: resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/"
  },

  devtool: 'source-map',

  resolve: {
    modules: [resolve(__dirname, '.'), resolve(__dirname, 'node_modules'), 'node_modules']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: join(__dirname, 'src'),
        exclude: [/node_modules/]
      },
    ]
  },

  node: {
    fs: 'empty'
  },
  devServer: {
    historyApiFallback: true
  },

  plugins: [
    new webpack.EnvironmentPlugin(['MapboxAccessToken', 'DropboxClientId'])
  ]
};

module.exports = env => {
  return env ? require('../webpack.config.local')(CONFIG, __dirname)(env) : CONFIG;
};
