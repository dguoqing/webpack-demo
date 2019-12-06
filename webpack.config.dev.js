const path = require('path')
const { smart } = require('webpack-merge')
const webpackBase = require('./webpack.config.base')
const webpack = require('webpack')

module.exports = smart(webpackBase,{
    mode: 'development',
    entry: ['./src/index.js'],
    output: {
        filename: '[name].[hash:5],bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    devtool:'cheap-module-eval-source-map',
    devServer: {
        port:8000,
        host:'0.0.0.0',
        progress:true,
        compress: true,
        contentBase:'/build'

    }
})