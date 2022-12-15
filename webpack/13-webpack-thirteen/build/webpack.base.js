const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
module.exports = {
    entry:{
        index:'./src/js/index.js',
    },
    output:{
        // 打包后的文件名
        filename:"js/[name].js",
        // 打包后的路径，必须是绝对路径
        path:path.resolve(__dirname,'..','./dist')
    },
    // 配置 loader
    module:{
        rules:[
            {
                test:/\.css$/,
                // use 里面是有顺序的
                // 从右往左
                use:[{
                    loader:MiniCssExtractPlugin.loader
                },{
                    loader:'css-loader',
                    options:{
                        esModule:false
                    }
                },'postcss-loader']
            },
            {
                test:/\.less$/,
                // use 顺序是从左到右
                // 1. less-loader: 将 less 语法转成 css 语法
                // 2. css-loader: 将 css 模块化
                // 3. style-loader : 将 css 文件通过 style 标签引入到 html 文件
                use:[{
                    loader:MiniCssExtractPlugin.loader
                },'css-loader','postcss-loader','less-loader']
            },
            {
                test:/\.scss$/,
                // use 顺序是从左到右
                // 1. sass-loader: 将 sass 语法转成 css 语法
                // 2. css-loader: 将 css 模块化
                // 3. style-loader : 将 css 文件通过 style 标签引入到 html 文件
                use:[{
                    loader:MiniCssExtractPlugin.loader
                },'css-loader','postcss-loader','sass-loader']
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
        //  配置 index 页面
        new HtmlWebpackPlugin({
            template:'./src/pages/index.html',
            filename:'index.html',
            chunks:['index']
        }),
        
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery'
        }),
        new HtmlWebpackExternalsPlugin({
            externals:[
                {
                    module:'axios',
                    entry:'https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.js',
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename:'css/[name].css'
        })
      
    ]
}