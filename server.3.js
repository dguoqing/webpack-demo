const express = require('express')

const app = express()

const webpack = require('webpack')
const middle = require('webpack-dev-middleware')

const config = require('./webpack.config.dev.js')

//使用webpack中间件就可以不用使用proxy

const compiler = webpack(config)
app.use(middle(compiler))

app.get('/api/login', (req, res) => {
    res.json({
        code: 0,
        data: {
            name: 'tom'
        }
    })
})

app.listen(3000, () => {
    console.log('server...')
})