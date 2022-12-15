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


### 静态资源分析
+ webpack 封装了 require 函数
+ 缓存对象,如果里面有就直接返回,如果没有就创建一个空的
+ 执行入口文件里面的代码
