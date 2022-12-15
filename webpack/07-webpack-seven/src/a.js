
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
console.log(11)
console.log(22)
console.log(33)
console.log(44)
console.log(55)
console.log(66)
console.log(77)
console.log(88)
console.log(9)
console.log(99)


// js 里面引入css
import './css/index.css'
// js 引入 less
import './less/index.less'
// js 引入 scss
import './scss/index.scss'


// 使用 js 的方式 导入图片
const imgUrl = require('./imgs/dog2.jpg')
console.log(imgUrl)
imgBox.src = imgUrl

