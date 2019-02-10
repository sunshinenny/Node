`
关于下方返回结果出现的原因分析
1. when init: exports=module.exports
2. 如果其中一个出现了变动:那么这两个对象指向的地址将会不同,即已经变成不一样的两个对象了(两个分开独立的对象)
3. 然而Node 默认返回的是module.exports ,所以在地址分离之后,对exports的操作均无效

ex:
exports.add=function add(){
    return 1+1
}
// 接上面 此时返回的是 add函数

module.exports.cut='cut'

// {function add(),cut:'cut'}

//在这里断开exports和module.exports的链接
exports={}//最好不要将module.exports重定向,毕竟返回的就是他

//此后不管exports的内容怎么变,都影响不到modole.exports
//除非将它们重新连接
exports=module.exports

`
`
如果实在分不清 exports 和 module.exports
那么一直使用module.exports就可以了
`
// {name:'sunshine'}
module.exports.name = 'sunshine'

// {name:'sunshine',Function calc()}
exports.calc = function () {
    return Date.now.toString
}

// {Function show()}
// 原因:此时将module.exports与原有的分离开了,重新进行了赋值
module.exports = function show() {
    console.log('成功覆盖了上面的exports数组,如果同时存在,将只返回单例module')
}

// 如果是这么写的话,那么返回值就是对的
// { name: 'sunshine', calc: [Function], show: [Function: show] }

// module.exports.show=function show (){
//     console.log('成功覆盖了上面的exports数组,如果同时存在,将只返回单例module')
// }