const loaderUtils = require('loader-utils');//获取loader 中option的参数
const schemaUtils = require('schema-utils')
const fs = require('fs')
//手写loader
function loader(source){
    let option = loaderUtils.getOptions(this)
    console.log('<<<  guoqing.dong-loader >>>')
    let cb = this.async()
    let schema = {
        type:'object',
        properties:{
            text:{
                type:'string'
            },
            filename:{
                type:'string'
            }
        }
    }

    schemaUtils(schema,option,'banner-loader')

    if(option.filename){
        this.addDependency(option.filename); //监听的文件变化了，就会告知wepack重新打包,自动添加文件依赖
        fs.readFile(option.filename,'utf8',(err,data) => {
            cb(err, `/**${data}**/\r\n${source}`)
        })
    }else{
        cb(null,`/**${option.text}**/\r\n${source}`)
    }

    return source
}
module.exports = loader