var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var AssetsPlugin = require('assets-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');


const ENV = process.env.NODE_ENV = process.env.ENV = 'azure';

const extractSass2 = new ExtractTextPlugin({
  filename: "main.css"
});

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  
  plugins: [
    
    new webpack.NoEmitOnErrorsPlugin(),
    
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    }),
    // new AssetsPlugin({
    //   filename: 'assets.json',
    //   path: helpers.root('../wwwroot/dist')
    // }),
    new CopyWebpackPlugin([{
      from: './src/assets',
      to: './assets'
    }])
  ]
});

