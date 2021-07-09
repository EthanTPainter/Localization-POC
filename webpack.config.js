const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: "./src/index.tsx",
	mode: "development",
	devtool: "source-map",
	module: {
		rules: [
			// JSX loader
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/env"],
				},
			},
			// TS Loader
			{
				test: /\.ts(x?)$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: "ts-loader",
					},
				],
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader",
			},
			// CSS Loader
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
	},
	output: {
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/dist/",
		filename: "bundle.js",
	},
	devServer: {
		contentBase: path.join(__dirname, "public/"),
		port: 8485,
		compress: true,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
};
