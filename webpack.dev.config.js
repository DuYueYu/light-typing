const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const fs = require('fs');

fs.open('./src/config/env.js', 'a', (err, fd) => {
    if (err) return err;
    const buf = new Buffer('export default "development";');
    fs.write(fd, buf, 0, buf.length, null, function cb(err, written, buffer) {
        if (err) return err;
        console.log('开发环境：已写入env.js');
    });
});

module.exports = merge(webpackBaseConfig, {
    devtool: '#source-map',
    output: {
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.dev.html',
            publicPath: '/dist/',
            template: './src/template/index.ejs',
            inject: false
        })
    ]
});