console.log('home')
const a = true

if(a){
    // 实现动态导入
    import('jquery').then(({default:$})=>{
        $(function(){
            $('<div></div>').text('这是 home').appendTo('body')
        })
    })
    
}


