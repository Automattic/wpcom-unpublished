module.exports = {
	entry: __dirname + '/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'wpcom-unpublished.js',
		libraryTarget: 'var',
		library: 'WPCOMUnpublished'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	},
	resolve: {
		extensions: ['', '.js']
	},
	devtool: 'sourcemap'
};
