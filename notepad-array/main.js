// 0.引包
var express = require('express')
//1. 定义变量以及实例化Express对象
var router=require('./router')
var app = express()
// 2.配置express的渲染引擎
app.engine('html', require('express-art-template'));
app.use('',router)
   app .listen('3000', function () {
        console.log('App is running at port 3000.')
    })

app.use('/node_modules/',express.static('./node_modules/'))
