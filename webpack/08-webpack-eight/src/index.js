import '@babel/polyfill'
console.log(111)
let a = 1;
const b = 2;
// 箭头函数
setTimeout(()=>{
    console.log('setTimeout')
},1000)

// class 类
class Student{
    say(){
        console.log('say')
    }
}
let s = new Student()
s.say()

// 对象的方法
let arr =  [1,2,3,4,5]
console.log(arr.includes(4),'includes') // true
console.log(arr.every(v=>v>2),'every') // false
