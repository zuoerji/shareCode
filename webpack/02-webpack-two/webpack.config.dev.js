//  webpack 是 node 封装 
// entry output
// path.resolve() | __dirname : 当前文件根目录
const path = require('path')
module.exports = {
    entry:'./src/a.js',
    output:{
        // 打包后的文件名
        filename:"bundle3.js",
        // 打包后的路径，必须是绝对路径
        path:path.resolve(__dirname,'./listFile')
    },
    mode:'development'
}