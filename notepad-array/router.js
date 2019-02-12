var express=require('express')
var msg=require('./deal')
var notes = new Array() //用以存储留言
var router=express.Router()

// 3.配置路由
router.get('/', function (req, res) {
        // console.log(notes)
        // 4.处理相应信息
        res.render('./index.html', {
            data: msg.get() //将notes里的数据渲染到页面中
        })
    })
    .get('/sendPage', function (req, res) {
        res.render('./send.html')
    })

    .get('/send', function (req, res) {
        // console.log(req.query)
        // 添加时间属性
        var date = new Date()
        req.query.time = `${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
        // console.log(temp)
        msg.save(req.query)
        res.redirect('./') // 重定向
    })
module.exports=router
