
module.exports = {
	entry: './dist/test/testing-source.js',

	node: {
		fs: 'empty'
	},

	output: {
		path: __dirname,
		filename: 'testing-bundle.js',
		libraryTarget: 'var',
		library: 'WPCOMTesting'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.json$/,
				exclude: /node_modules/,
				loader: 'json-loader'
			}
		]
	},

	resolve: {
		extensions: [ '', '.js', '.json' ]
	},

	devtool: 'sourcemap'
};
