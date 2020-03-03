const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')
const Happypack = require('happypack')
const os = require('os')
const happyThreadPool = Happypack.ThreadPool({ size: os.cpus().length })


//同步查找src目录下的任意文件夹下的任意文件
const glob = require('glob');
// 去除无用的样式
const PurgecssWebpackPlugin = require('purgecss-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';


//3927
module.exports = {
    entry: ['react-hot-loader/patch', './src/index.tsx'],
    output: {
        filename: '[name].[hash:5].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[chunkhash].chunk.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", '.js', '.jsx', '.css', '.less', '.scss', '.json'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
            '@net':path.resolve(__dirname,'src/net/index.ts')
        },
    }, 
    //loaders文件夹下是自己写的loader
    resolveLoader:{
        // alias:{
        //     'banner-loader':path.resolve(__dirname,'loaders','banner-loader')
        // },
        modules:['node_modules',path.resolve(__dirname, 'loaders')], 
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // only enable hot in development
                            hmr: devMode,
                            // if hmr does not work, this is a forceful method.
                            reloadAll: true,
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
                use: [{
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
                test: /\.(tsx|ts)$/,
                use: [                  
                    {
                        loader: 'awesome-typescript-loader'
                    },
                    //手写的loader  注释
                    // {
                    //     loader:'banner-loader',
                    //     options:{
                    //         text:'dongguoqingmmmm',
                    //         filename:path.resolve(__dirname,'banner.js')
                    //     }
                    // },
                ],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: [{
                        loader: 'react-hot-loader/webpack'
                    },                   
                    'happypack/loader?id=babel',
                    'async-catch-loader'                  
                ],
                exclude: /node_modules/
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name].[hash:5].[ext]',
                        outputPath: 'images/',
                    }
                }]
            }
        ]
    },
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            title:'总有一天，你会放下稍许不舍和遗憾，带上爱开始新生活 | 个人网站 | web前端',
            favicon:'favicon.ico',
            inject:true,
            hash: true,
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        }),
        // new webpack.ProvidePlugin({
        //     React: 'react'
        // }),
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
            filename: devMode ? '[name].css' : '[name].[hash:5].css',
            chunkFilename: devMode ? '[id].css' : '[id].[chunkhash].css',

        }),

        // 去除无用的样式
        new PurgecssWebpackPlugin({
            paths: glob.sync('./src/**/*', {nodir: true})
        })

    ],
}