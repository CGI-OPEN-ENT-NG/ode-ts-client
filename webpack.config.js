const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    'ode-ts-client': './src/ts/index.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'bundle'),
    clean: true
  },
  devtool: "source-map",
  resolve: {
    // Resolvable extensions.
    extensions: [".ts", ".tsx", ".js"]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
        extractComments: false,
    })],
  },
  module: {
    rules: [
      // ts-loader will handle files with `.ts` or `.tsx` extensions
      { test: /\.tsx?$/, loader: "ts-loader" },
    ]
  },
};