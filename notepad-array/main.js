var express = require('express')
var notes = new Array()
var app = express()
app.engine('html', require('express-art-template'));
app.get('/', function (req, res) {
        res.render('./index.html', {
            data: notes
        })
    })
    .get('/sendPage', function (req, res) {
        res.render('./send.html')
    })

app.get('/send', function (req, res) {
    console.log(req.query)
    notes.push(req.query)
    res.redirect('./')
})
console.log(notes)
app.listen('3000', function () {
    console.log('App is running at port 3000.')
})