// 0.引包
var express = require('express')
//1. 定义变量以及实例化Express对象
var notes = new Array() //用以存储留言
var app = express()
// 2.配置express的渲染引擎
app.engine('html', require('express-art-template'));
// 3.配置路由
app.get('/', function (req, res) {
        console.log(notes)
        // 4.处理相应信息
        res.render('./index.html', {
            data: notes //将notes里的数据渲染到页面中
        })
    })
    .get('/sendPage', function (req, res) {
        res.render('./send.html')
    })

    .get('/send', function (req, res) {
        // console.log(req.query)
        // 添加时间属性
        var date = new Date()
        req.query.time = `${date.getHours()}:${date.getMinutes()}`
        // console.log(temp)
        notes.unshift(req.query) // 处理逻辑,将新的留言加入到数组notes中
        res.redirect('./') // 重定向
    })
    .listen('3000', function () {
        console.log('App is running at port 3000.')
    })

app.use('/node_modules/',express.static('./node_modules/'))