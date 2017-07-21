const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	  entry: './src/index.js',
	  output: {
	    filename: '[name].bundle.js',
      	path: path.resolve(__dirname, 'dist')
	  },
	  devtool: 'inline-source-map',
	  plugins: [
    	new webpack.HotModuleReplacementPlugin(), // Enable HMR
    	new HtmlWebpackPlugin({
        	title: 'Development'
      	})
  	  ],
	  devServer: {
    	hot: true, // Tell the dev-server we're using HMR
    	contentBase: path.resolve(__dirname, 'dist'),
    	publicPath: '/'
  	  }
};