const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
module.exports =merge(baseConfig,{
    mode:"development",
    plugins:[
        new OptimizeCssAssetsWebpackPlugin()
    ]
})