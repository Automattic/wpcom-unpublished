module.exports = {
	entry: __dirname + '/index.js',

	node: {
		fs: 'empty'
	},

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
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,
					optional: [ 'runtime' ]
				}
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.json']
	},

	devtool: 'sourcemap'
};
