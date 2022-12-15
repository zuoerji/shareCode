
// if(a){
//     // 实现动态导入
//     import('jquery').then(({default:$})=>{
//         $(function(){
//             $('<div></div>').text('这是 home').appendTo('body')
//         })
//     })
    
// }
document.querySelector('#btn').addEventListener('click',function(){
        // $(function(){
        //     $('<div></div>').text('这是 home').appendTo('body')
        // })
        import('jquery').then(({default:$})=>{
            $(function(){
                $('<div></div>').text('这是 home').appendTo('body')
            })
        })
})

