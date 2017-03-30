// Import path to resolve paths from current directory
import path from 'path';
// Import extractTextPlugin to output css to seperate file
import extractTextPlugin from 'extract-text-webpack-plugin';
// Import browserSyncPlugin to display the app
import browserSyncPlugin from 'browser-sync-webpack-plugin';


export default {
	// Basic Webpack settings
	entry: './assets/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve('./app', 'dist')
	},
	// Module settings
	module: {
		rules: [
			// Use the babel loader to parse react and es2015 files
			// Could use a later version of es, but seems redundant for the current application
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['react','es2015']
					}
				}
			},
			{
				test: /\.scss$/,
				loader: extractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						// translates CSS into CommonJS
						{
							loader: "css-loader" 
						},
						// compiles Sass to CSS
						{
							loader: "sass-loader" 
						}
					]
				})
			}
		]
	},
	// Load plugins
	plugins: [
		// Save CSS Files
		new extractTextPlugin("bundle.css"),
		// Use browsersync to display app
		new browserSyncPlugin({
			host: 'localhost',
			port: 3000,
			server: { 
				baseDir: ['app'] 
			}
		})
	]
}