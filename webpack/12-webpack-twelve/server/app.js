const express = require('express')
// const cors = require('cors')
// 创建应用
const app = express()
// 配置跨域问题
// app.use(cors())
// 写接口 
// 参数1： 接口地址
// 参数2： 回调函数 req : 请求报文 res : 响应处理
app.get('/api/getList',(req,res)=>{
    res.send({
        status:0,
        message:'请求成功',
        data:[
            { id:1,name:'张三',age:17},
            { id:2,name:'赵六',age:87},
            { id:3,name:'王二麻子',age:50},
        ]
    })
})
// 开启服务
app.listen(666,()=>{
    console.log('http://localhost:666')
})