const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    mode: 'production',
    entry: ['./src/index.js'],
    output: {
        filename: '[name].[hash:5],bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    optimization: {
        minimize: true,
        minimizer: [
            // new TerserJSPlugin({
            //     exclude: /\/node_modules/
            // }),
            new OptimizeCSSAssetsPlugin({})
        ]


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
                use:['babel-loader'],
                exclude:/node_modules/
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:8192,
                            outputPath:'/images/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:[path.resolve(__dirname, './build')]
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            hash: true,
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:5].css',
            chunkFilename: '[id].css'
        })
    ],
    devServer: {
        port:8000,
        host:'0.0.0.0',
        progress:true,
        compress: true

    }
}