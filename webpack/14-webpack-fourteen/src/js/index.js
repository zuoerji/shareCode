
console.log('index')
import $ from "jquery"
const a = true
// if(a){
//     // 实现动态导入
//     import('jquery').then(({default:$})=>{
//         $(function(){
//             $('<div></div>').text('这是 home').appendTo('body')
//         })
//     })
    
// }
document.querySelector('#btn').addEventListener('click',function(){
    $('<div></div>').text('这是 home').appendTo('body')
})
