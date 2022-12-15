// commonJS 规范的引入
// const a = require('./a')

// ESModule 规范的引入
import a from './a'
function add(a,b){
    console.log(a+b)
}
console.log(a)
add(1,3)