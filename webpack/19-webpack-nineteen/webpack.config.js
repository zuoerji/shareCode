const path = require("path");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口
    entry:'./src/index.js',
    // 出口
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        // main.js  home11.mian.js
        chunkFilename:'[name].main.js',
    },
    // loader 配置
    module:{},
    // 模式 development|production
    mode:'development',
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        })
    ],
    devtool:'source-map'
}