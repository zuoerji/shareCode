const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口
    entry:'./src/index.js',
    // 出口
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'index.js'
    },
    // loader 配置
    module:{},
    // 模式 development|production
    mode:'development',
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        })
    ],
    devtool:'source-map'
}