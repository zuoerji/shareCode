####  分析 webpack 的打包过程

#### 初始化项目
```js
npm init -y
```

#### 下载依赖包

```js
npm i webpack webpack-cli html-webpack-plugin clean-webpack-plugin -D
```

### 新建 webpack.config.js 文件

### 创建 src 文件夹 ./src/index.js ./src/index.html


### 1.静态资源分析
+ webpack 封装了 require 函数
+ 缓存对象,如果里面有就直接返回,如果没有就创建一个空的
+ 执行入口文件里面的代码


### 2.模块化兼容

+ 使用 esModule 规范 导出,使用 commonJS 规范导入的
+ 将 esModule规范转成  commonJS 规范
    + 在 requier.r 静态方法里面 进行打标记
        + 将检测数据类型 改成 [object Module]
        + 将对象 增加一个属性 __esModule = true
    + 在 requier.d 静态方法里面,将 esModule 变成 commonJS 规范
        + export default 改变成 exports.default
        + export let age = 19 改变成 export.age

+ 使用 esModule 规范 导出,使用 esModule 规范导入
    + 需要将 esModule 规范变成 commonJS 规范
    + 在 入口 文件中需要指向 require.r(exports={})
    + 需要调用 require 方法


+ 使用 commonJS 规范导出 ,使用 esModule 规范导入
    + 在 入口 执行 require.r(exports={})
    + 调用 require 方法
    + 需要要兼容处理 require.n()


### 3. 异步加载模块

    + 1. 加载额外的代码块
        require.e = (chunkId)=>{

            require.f.j(chunkId,...) 
        }
    + 2. 通过 jsonp 异步加载
        require.f.j(chunkId,...)

    + 3. 创建 script 去实现 JSONp
        require.l(url) =>{

        }

    + 4. 在懒加载代码块里面 调用 window['webpack'].push()

    + 5. 在入口文件 定义 push 方法
        合并 modules
        并且执行 resolve()


### 4. 抽象语法树 ast
> es6 语法转成 es5的语法 , 在 抽象语法树的层面去操作的
> 抽象语法树 ast 就是对象, 这个对象是对源代码的描述

```js
// 安装 
// esprima : 将源代码转成 ast
// estraverse : 遍历 抽象语法树
// escodegen : 将语法树 转成源码
npm i esprima estraverse escodegen
```


### 5. 转换箭头函数 babel 插件

```js

// @babel/core :babel 的核心模块
// babel-types :检测类型
// babel-plugin-transform-es2015-arrow-functions : 插件 箭头函数转 函数
npm i @babel/core babel-types babel-plugin-transform-es2015-arrow-functions -D
```