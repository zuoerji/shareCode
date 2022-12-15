// 将源代码转成 ast 语法树
const esprima = require('esprima')
// 遍历 ast 语法树
const estraverse = require('estraverse')
// 将 ast 语法树 转成 源代码
const escodegen = require('escodegen')

// 源代码
let sourceCode = 'let a = 10'
let ast = esprima.parseModule(sourceCode)

/*
    遍历语法树 采用的是 深度优先方式
    如果一个遍历完成,同时它有儿子和兄弟

    如果 先遍历 兄弟,就是广度优先
    如果 先遍历 儿子,就是深度优先
*/
estraverse.traverse(ast,{
    enter(node){
        console.log('进入'+node.type)
        if(node.type==='VariableDeclaration'){
            node.kind = 'var'
        }
    },
    leave(node){
        console.log('离开'+node.type)
    }
})

// 生成源码
let code = escodegen.generate(ast)

console.log(code,'code')