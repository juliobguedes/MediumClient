const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

const common = require('./webpack.common');

const parentDir = path.join(__dirname, '../');

module.exports = merge(common, {
    devServer: {
        contentBase: `${parentDir}`,
        historyApiFallback: true,
    },
    mode: 'development',
});
