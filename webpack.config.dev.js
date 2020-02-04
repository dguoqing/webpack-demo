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
        inline:true,
        hot:true,
        contentBase: path.resolve(__dirname, "./build"),
        historyApiFallback: true, 
        hotOnly:true, //即使HMR没有生效 浏览器也不会自动更新 必须设置

        //<3>有服务端，不用代理，用服务端启用webpack，端口使用服务端的 server.3.js


        //<1>前端自己模拟数据 ，代理proxy注释
        // before(app){ //提供的钩子函数
        //     app.get('/login', (req, res) => {
        //         res.json({
        //             code: 0,
        //             data: {
        //                 name: 'tom'
        //             }
        //         })
        //     })
        // },

        
        //<2> 使用代理 server.js
        // proxy:{
        //     '/api':{
        //         target:'http://localhost:3000',
        //         pathRewrite:{
        //             '/api':''
        //         }
        //     }
        // }
    },
    plugins:[
        new webpack.NamedModulesPlugin(), // 打印出那些变化文件的路径
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        })
    ]
})