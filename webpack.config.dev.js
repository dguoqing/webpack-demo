const path = require('path')
const { smart } = require('webpack-merge')
const webpackBase = require('./webpack.config.base')
const webpack = require('webpack')

module.exports = smart(webpackBase,{
    mode: 'development',
    devtool:'cheap-module-eval-source-map',
    devServer: {
        port:8000,
        host:'0.0.0.0',
        progress:true,
        compress: true,
        hot:true,
        contentBase: path.resolve(__dirname, "./build"),
        historyApiFallback: true, 
        hotOnly:true, //即使HMR没有生效 浏览器也不会自动更新 必须设置
    },
    plugins:[
        new webpack.NamedModulesPlugin(), // 打印出那些变化文件的路径
        new webpack.HotModuleReplacementPlugin()
    ]
})