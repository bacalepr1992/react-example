const webpack = require('webpack')
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    publicPath: '/js/',
    filename: 'bundle.js'
  },

  resolve: {
      extensions: ['.js', '.jsx']
    },

  devServer: {
    contentBase: './build'
  },

  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },

  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: 'src/index.html',
  //     inject: true
  //   })
  // ]
}