
const path = require('path')
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'js/bundle.js',
        path:path.resolve(__dirname,'dist/')
    },
    module:{},
    plugins:[]
}