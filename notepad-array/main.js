var express = require('express')
var art = require('art-template')
var fs = require('fs')
var notes = new Array()
var content = ''
var app = express()
app.get('/', function (req, res) {
    fs.readFile('./index.html', function (error, data) {
        console.log(notes.length)
        // for (var i = 0; i < notes.length; i++) {
        //     content = content + `
        //     <li>
        //     ${notes[i].name} Says : ${notes[i].text}
        //     </li>
        //     <br>
        //     `
        // }
        var htmlStr = art.render(data.toString(), {
            data: notes
        })
        console.log(htmlStr)
        res.send(htmlStr)
    })
})

app.get('/sendPage', function (req, res) {
    fs.readFile('./send.html', function (error, data) {
        res.send(data.toString())
    })
})

app.get('/send', function (req, res) {
    console.log(req.query)
    notes.push(req.query)
    // notes.push(req.query)
    res.redirect('./')
})
console.log(notes)
app.listen('3000', function () {
    console.log('App is running at port 3000.')
})