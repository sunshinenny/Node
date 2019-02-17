// 0. install
// 1. require
var express=require('express')

// 2. 创建服务器应用程序
var app = express()

app.get('/',function(req,res){
    res.send('Hello Express!')
})
app.get('/a',function (req,res) {
    res.send(`
    <script>
    alert('Alert')
    </script>
    `)
    res.send('Alert Page')
})
app.get('/hello',function(req,res){
    res.send('现在可以直接写中文了,不需要setHead了!!!')
})

app.listen(3000,function(){
    console.log('App is running at port 3000.')
})
// 可以开启多个端口进行监听
app.listen(8090,function(){
    console.log('App is running at port 8090.')
})

// 公开指定的目录,便于快速生成静态目录 // 自动生成的./public/.. 是不行的
app.use('/public/',express.static('./public/'))

// 前面的是命名
// app.use('/fuck/',express.static('./public/'))