
const core = require('@babel/core')
const types = require('babel-types')
const BabelPluginTransformEs2015ArrowFunctions = require('babel-plugin-transform-es2015-arrow-functions')

// babel插件其实是一个对象,有一个 visitor 访问器
// 访问器不一样,操作也不一样
let BabelPluginTransformEs2015ArrowFunctions = {
    visitor:{
        // 属性是节点的类型,babel在遍历到对应型的节点的时候
        // 会调用这个函数
        ArrowFunctionExpression(nodePath){ // 参数是一个节点数据
            let node = nodePath.node // 获取 当前路径上的节点
            // 处理 this 指针的问题
            const thisBinding = hoistFunctionEnvironment(nodePath);
            node.type = 'FunctionExpression'
        }
    }
}

function hoistFunctionEnvironment(fnPath){
    // 如果是函数,不能是箭头函数,或者 program 或者是类的属性
    const thisEnvFn = fnPath.findParent(p => {
        if (p.isArrowFunctionExpression()) {
          var _arrowParent;
    
          (_arrowParent = arrowParent) != null ? _arrowParent : arrowParent = p;
          return false;
        }
    
        return p.isFunction() || p.isProgram() || p.isClassProperty({
          static: false
        }) || p.isClassPrivateProperty({
          static: false
        });
      });
      let thisPaths = getScopeInfoInformation(fnPath)
      if(thisPaths.length>0){
          thisEnvFn.scope.push({
              id,
              init:types.thisExpression
          })
      }
}

function getScopeInfoInformation(fnPath){
    let  thisPaths = []
    fnPath.traverse({
        thisExpression(thisPath){
            thisPaths.push(thisPath)
        }
    })
    return thisPaths
}


const sourceCode = `
    const add = (a,b) =>{
        return a + b
    }
`
/*
    babel-core 本身知识用来生成语法树,遍历语法树,生成新代码的
    不负责转换语法树
*/


let targetCode = core.transform(sourceCode,{
    plugins:[BabelPluginTransformEs2015ArrowFunctions]
})

console.log(targetCode.code)