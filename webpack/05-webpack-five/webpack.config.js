//  webpack 是 node 封装 
// entry output
// path.resolve() | __dirname : 当前文件根目录
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    entry:'./src/a.js',
    output:{
        // 打包后的文件名
        filename:"aaa.js",
        // 打包后的路径，必须是绝对路径
        path:path.resolve(__dirname,'./list')
    },
    // production: 生产  development : 开发
    mode:"development",
    // watch:true,
    devServer:{
        open:true,
        // static:'./list',
        port:5000,
        hot:true,
        compress:true
    },
    // 配置 loader
    module:{
        rules:[
            {
                test:/\.css$/,
                // use 里面是有顺序的
                // 从左往右
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                // use 顺序是从左到右
                // 1. less-loader: 将 less 语法转成 css 语法
                // 2. css-loader: 将 css 模块化
                // 3. style-loader : 将 css 文件通过 style 标签引入到 html 文件
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.scss$/,
                // use 顺序是从左到右
                // 1. sass-loader: 将 sass 语法转成 css 语法
                // 2. css-loader: 将 css 模块化
                // 3. style-loader : 将 css 文件通过 style 标签引入到 html 文件
                use:['style-loader','css-loader','sass-loader']
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        })
    ]
}