
const say = function(){
    console.log('say')
}
// commonJS 导出方式
// module.exports = {
//     say
// }

//ESModule 导出方式
export default {
    say
}


function say1(){
    console.log('say')
}
say1()