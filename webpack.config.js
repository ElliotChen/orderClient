var webpack = require('webpack');


var config = {
	context: __dirname + '/src',
	entry: {
		app: './App.js',
		pos: './Pos.js'
	},
	output: {
		path: __dirname+'/dist',
		filename: '[name].bundle.js'
	},
	devServer: {
		open: true,
		contentBase: __dirname + '/src'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets:[
								['es2015', {modules:false, loose:false}]
							],
							plugins: ["transform-class-properties"]
						}
					}
				]
			}
		]
	}
}


module.exports = config;