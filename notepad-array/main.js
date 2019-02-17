var express = require('express')
var bodyparser=require('body-parser')
var router=require('./router')

var app = express()
app.engine('html', require('express-art-template'));
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(router)
app .listen('3000', function () {
        console.log('App is running at port 3000.')
    })

app.use('/node_modules/',express.static('./node_modules/'))
