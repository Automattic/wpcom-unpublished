
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
				loader: 'babel-loader'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},

	resolve: {
		extensions: [ '', '.js', '.json' ]
	},

	devtool: 'sourcemap'
};
