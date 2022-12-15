const axios = require('axios')

axios.get('/api/getList').then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})