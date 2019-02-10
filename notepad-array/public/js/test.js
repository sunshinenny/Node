var fs=require('fs')

fs.readFile('../../index.html',function (err,data) {
    console.log(data.toString())
})