var fs = require('fs')
var dbPath = './db.json'
exports.save = function (content, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var contents = JSON.parse(data).contents

        // 添加 id ，唯一不重复
        // content.id = contents[contents.length - 1].id + 1

        // 把用户传递的对象保存到数组中
        contents.unshift(content)

        // 把对象数据转换为字符串
        var fileData = JSON.stringify({
            contents: contents
        })

        // 把字符串保存到文件中
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                // 错误就是把错误对象传递给它
                return callback(err)
            }
            // 成功就没错，所以错误对象是 null
            callback(null)
        })
    })
}

exports.find = function (callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var ret = JSON.parse(data).contents
        return callback(null, ret)
    })
}