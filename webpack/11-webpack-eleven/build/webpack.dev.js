const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base')
module.exports = merge(baseConfig,{
    mode:"development",
    devServer:{
        open:true,
        port:5000,
        hot:true,
        compress:true
    },
    devtool:'inline-source-map'
})
