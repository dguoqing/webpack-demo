const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack')
const webpackBase = require('./webpack.config.base')
const { smart } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = smart(webpackBase, {
    mode: 'production',
    entry: ['./src/index.js'],
    output: {
        filename: '[name].[hash:5],bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserJSPlugin({
                exclude: /\/node_modules/
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins:[
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:[path.resolve(__dirname, './build')]
        }),
    ]
})