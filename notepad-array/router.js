var express = require('express')
var deal = require('./deal')

var notes = new Array() //用以存储留言
var router = express.Router()
var g_id = ''

// 3.配置路由
router.get('/', function (req, res) {
        // console.log(notes)
        // 4.处理相应信息
        deal.find(function (err, ret) {
            if (err) {
                return res.status(500).send('Server error.')
            }
            res.render('index.html', {

                data: ret
            })
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
        deal.save(req.query, function (err) {
            if (err) {
                return res.status(500).send('Server error.')
            }
            res.redirect('./')
        })
    })
// .get('/goRoom', function (req, res) {

//     var id = req.query.room_id
//     console.log(id)
//     g_id = id
//     console.log("This is g_id" + g_id)
//     res.redirect('./' + g_id)
// })
// .get('/' + g_id, function (req, res) {
//     res.send('Welcome to the ' + g_id + ' room')
// })
module.exports = router
