###  分析 webpack 的打包过程

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
