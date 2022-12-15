const path = require('path')
const fs = require('fs')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generator = require('@babel/generator').default
const ejs = require('ejs')
// 需要安装 @babel/preser: 拿到抽象语法树
// @babel/traverse : 将 require 进行替换成 __webpack_require_
// @babel/generator : 将 替换好的 ast 在转成 源码
class Compiler{
    constructor(config){
        this.config = config
        this.entry = config.entry
        this.root = process.cwd()
        // 初始化空对象,存放所有的模块
        this.modules = {}
    }
    getSource(path){
        return fs.readFileSync(path,'utf-8')
    }
    depAnalyse(modulePath){
        let res = this.getSource(modulePath)
        // console.log(res,'res')

        // 准备一个依赖数组,用于存储当前模块的所有依赖
        let dependencies = []

        let ast = parser.parse(res)
        // console.log(ast.program.body)
        traverse(ast,{
            // p 抽象语法树找到的节点
            CallExpression(p){
                // 找到 require 的语法
                if(p.node.callee.name ==="require"){
                    // 修改 require
                    p.node.callee.name = "__webpack_require__"
                    // 修改路径
                    let oldValue = p.node.arguments[0].value
                    oldValue = "./" + path.join('src',oldValue)
                    // 避免 window出现反斜杠:\
                    p.node.arguments[0].value = oldValue.replace(/\\+/g,'/')

                    
                    // 每找到一个 require调用,就讲其中的路径修改完毕后加入到依赖数据中
                    dependencies.push(p.node.arguments[0].value)
                }
            }
        })
        let sourceCode = generator(ast).code
        let modulePathRelative = path.relative(this.root,modulePath)
        modulePathRelative = './' + modulePathRelative.replace(/\\+/g,'/')
        this.modules[modulePathRelative] = sourceCode
        // 递归加载所有的依赖
        dependencies.forEach(dep=>this.depAnalyse(path.resolve(this.root,dep)))
        // this.depAnalyse()
    }
    emmitFile(){
        // 将函数和数据动态拼接在一起
        let template = this.getSource(path.join(__dirname,'../template/output.ejs'))
        let result = ejs.render(template,{
            entry:this.entry,
            modules:this.modules
        })
        // 拼接好的字符串,通过 fs 模块写出来
        let outputPath = path.join(this.config.output.path,this.config.output.filename)
        console.log(outputPath)
        fs.writeFileSync(outputPath,result)
        // console.log(result)
    }
    start(){
        // 开始打包
        // 依赖的分析
        this.depAnalyse(path.resolve(this.root,this.entry))
        this.emmitFile()
    }
}


module.exports = Compiler