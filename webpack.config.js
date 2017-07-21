const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	  entry: {
      main:'./src/index.js',
      test:"./test/test.js"
    },
	  output: {
	    filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: "/", 
	  },

	  devtool: 'inline-source-map',
	  plugins: [
      	new webpack.HotModuleReplacementPlugin(), // Enable HMR
        new CleanWebpackPlugin(['dist']),
      	new HtmlWebpackPlugin({
          	title: 'Development'
        	}),
        new HtmlWebpackPlugin({
          title: 'My App',
          filename: 'test/test.html',
          chunks:["test"]
         
          
        })
  	  ],
	  devServer: {
    	hot: true, // Tell the dev-server we're using HMR
    	contentBase: path.resolve(__dirname, 'dist'),
    	publicPath: '/'
  	  }
};