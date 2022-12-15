//  webpack 是 node 封装 
// entry output
// path.resolve() | __dirname : 当前文件根目录
const path = require('path')
console.log(path.resolve(),'path')
console.log(__dirname,'__dirname')
module.exports = {
    entry:'./src/a.js',
    output:{
        // 打包后的文件名
        filename:"bundle4.js",
        // 打包后的路径，必须是绝对路径
        path:path.resolve(__dirname,'./list')
    },
    // production: 生产  development : 开发
    mode:"production"
}