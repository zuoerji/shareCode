//  webpack 是 node 封装 
// entry output
// path.resolve() | __dirname : 当前文件根目录
const path = require('path')
module.exports = {
    entry:'./src/a.js',
    output:{
        // 打包后的文件名
        filename:"bundle.js",
        // 打包后的路径，必须是绝对路径
        path:path.resolve(__dirname,'./list')
    },
    // production: 生产  development : 开发
    mode:"development",
    devServer:{
        open:true,
        static:'./src',
        port:5000,
        hot:true,
        compress:true
    }
}