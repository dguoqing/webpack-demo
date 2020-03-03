const path = require('path')
const webpack = require('webpack')



module.exports = {
    mode: 'production',
    entry:{
        vendor:['react','antd','react-router-dom','react-dom']
    },
    output:{
        filename:'[name].dll.js',
        path:path.resolve(__dirname, './dll'),
        library:'[name]_library'
    },
    performance:{
        hints: false,//文件过大警告
    },
    plugins:[
        new webpack.DllPlugin({
            name:'[name]_library',
            path:path.resolve(__dirname, './dll', '[name]-manifest.json')
        })
    ]
}