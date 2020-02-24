const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack')
const webpackBase = require('./webpack.config.base')
const { smart } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const FileListPlugin = require('./plugins/FileListPlugin') // 手写插件，测试

module.exports = smart(webpackBase, {
    mode: 'production',
    output: {
        // 输出目录
        path: path.resolve(__dirname, 'dist'),
        // 文件名称
        filename: '[name].[contenthash:8].js',
        chunkFilename: '[name].[contenthash:8].js',
        publicPath: '/webpack-demo',
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserJSPlugin({
                exclude: /node_modules/
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {  //分割代码块多页面应用会用到
            chunks: "all",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                common:{        //公共模块
                    chunks:'initial',
                    minSize:0,
                    minChunks:2,
                },
                vendors: {      //抽离第三方
                    test: /[\\/]node_modules[\\/]/,     //抽离出来
                    priority: 1,   //权重
                },
                // default: {
                //     minChunks: 2,
                //     priority: -20,
                //     reuseExistingChunk: true
                // }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './dist')]
        }),
        new HtmlWebpackPlugin({
            template: './src/404.html',
            filename: '404.html',
            hash: true,
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        }),
        new webpack.DllReferencePlugin({
            context: path.join(__dirname),
            manifest: require('./dll/vendor-manifest.json'),
        }),
        new AddAssetHtmlPlugin({
            filepath: path.resolve(__dirname, './dll/*.dll.js'),
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new FileListPlugin({
            filename:'list.md'
        })
    ]
})