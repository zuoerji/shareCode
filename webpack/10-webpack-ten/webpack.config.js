//  webpack 是 node 封装 
// entry output
// path.resolve() | __dirname : 当前文件根目录
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
module.exports = {
    // 多个入口，就会有多个出口
    entry:{
        home:'./src/js/home.js',
        aboutMe:'./src/js/aboutMe.js'
    },
    output:{
        // 打包后的文件名
        filename:"js/[name].js",
        // 打包后的路径，必须是绝对路径
        path:path.resolve(__dirname,'./dist')
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
                use:['style-loader',{
                    loader:'css-loader',
                    options:{
                        esModule:false
                    }
                }]
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
            {
                test:/\.(png|jpg)$/,
                loader:'url-loader',
                // 需要的配置项
                options:{
                    esModule:false,
                    // 如果 大于16kb 的图片就不处理成 base64
                    limit:16*1024,
                    // 修改打包图片的名字
                    name:'[hash:4].[ext]',
                    // 配置图片输出路径
                    outputPath:'imgs'
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader',
                // 需要的配置项
                options:{
                    esModule:false
                }
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/, // 除了这个文件夹之外的文件
                options:{
                    presets:['@babel/env']
                }
            },
            // {   // node_module/jquery/dist/
            //     test:require.resolve('jquery'),
            //     loader:'expose-loader',
            //     options:{
            //         exposes:['$','jQuery']
            //     }
            // }
        ]
    },
    plugins:[
        //  配置 home 页面
        new HtmlWebpackPlugin({
            template:'./src/pages/home.html',
            filename:'home.html',
            chunks:['home']
        }),
        //  配置 aboutMe 页面
        new HtmlWebpackPlugin({
            template:'./src/pages/aboutMe.html',
            filename:'aboutMe.html',
            chunks:['aboutMe']
        }),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery'
        })
    ],
    devtool:'inline-source-map'
}