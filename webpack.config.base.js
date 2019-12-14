const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')
const Happypack = require('happypack')
const os = require('os')
const happyThreadPool = Happypack.ThreadPool({size: os.cpus().length})


//3927
module.exports = {
    entry: ['./src/index.js'],
    output: {
        filename: '[name].[hash:5].bundle.js',
        path: path.resolve(__dirname, 'build'),
        chunkFilename:'[chunkhash].chunk.js'
    },
    resolve:{
        extensions:['.js','.jsx','.css','.less','.scss','.json']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                        }
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {

                        }
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                    },
                    'less-loader'
                ]
            },
            {
                test:/\.js$/,
                use:['happypack/loader?id=babel'],
                exclude:/node_modules/
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:8192,
                            name:'[name].[hash:5].[ext]',
                            outputPath:'images/',
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            hash: true,
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        }),
        new webpack.ProvidePlugin({
            React:'react'
        }),
        new Happypack({
            //用id来标识 happypack处理那里类文件
            id: 'babel',
            //如何处理  用法和loader 的配置一样
            loaders: [{
                loader: 'babel-loader?cacheDirectory=true',
            }],
            //共享进程池threadPool: HappyThreadPool 代表共享进程池，即多个 HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多。
            threadPool: happyThreadPool,
            //允许 HappyPack 输出日志
            verbose: true,

        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:5].css',
            chunkFilename: '[id].[chunkhash].css',
            
        })
        
    ],
}