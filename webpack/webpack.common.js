const webpack = require('webpack'); // eslint-disable-line no-unused-vars
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const parentDir = path.join(__dirname, '../');
const htmlWP = new HtmlWebpackPlugin({
  template: path.join(parentDir, 'src/index.html'),
  filename: 'index.html',
});

module.exports = {
  entry: [path.join(parentDir, 'index.js')],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.(less|css)$/,
      loaders: ['style-loader', 'css-loader', 'less-loader'],
    }, {
      test: /\.(png|jp(e*)g)$/,
      loader: 'url-loader',
      options: {
        limit: 8000,
        outputPath: './images/',
        name: '[hash]-[name].ext',
      },
    }],
  },
  output: {
    path: `${parentDir}/docs/`,
    filename: 'bundle.js',
  },
  plugins: [htmlWP],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
