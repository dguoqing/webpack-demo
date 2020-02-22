const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());// 添加json解析
app.use(bodyParser.urlencoded({extended: false}));

//存user数据
const userMap = new Map([
    ['admin',{
        username:'admin',
        password:'111111',
        remember:false,
    }]
])

app.post('/login', (req, res) => {
    console.log(req.body)
    res.json(getData(req.body))
})

function setData(key,value){

}
function getData({username,password}){
    if(userMap.has(username)){
        if(userMap.get(username).password === password){
            return {
                code: 0,
                data: {
                    ...userMap.get(username),
                    flg:true,
                },
                msg:'登录成功！'
            }
        }else{
            return {
                code: 500,
                data: {
                    flg:false,
                },
                msg:'密码错误！'
            }
        }
        
    }else{
        return {
            code: 500,
            data: {
                flg:false,
            },
            msg:'用户不存在，请注册后再登录！'
        }
    }
}
app.listen(3000, () => {
    console.log('server...')
})