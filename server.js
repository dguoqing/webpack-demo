const express = require('express')

const app = express()



app.get('/login', (req, res) => {
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