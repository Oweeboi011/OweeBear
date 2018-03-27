var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var stubWebApi = require('../web_api_stub');
var serveStatic = require('serve-static');

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',
  
  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  
  devServer: {
    historyApiFallback: true,
    stats: 'minimal', 
    setup: function (app) {
        stubWebApi(app);
        app.use('/', serveStatic(helpers.root('../wwwroot')))   ; 
        app.use('/assets', serveStatic(helpers.root('src/assets')))   ;     
    }
  }
});
