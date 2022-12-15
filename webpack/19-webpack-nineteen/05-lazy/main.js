
(function(){
  // 存放 所有的模块定义,包括 懒加载
	var modules={}
	// 缓存
	var cache = {}
	function require(moduleId){
		// 先看缓存里面有没有已经缓存的模块
		if(cache[moduleId]){
			// 如果有就直接返回
			return cache[moduleId].exports
		}
		// module.exports 默认值是一个空对象
		var module = { exports:{}}
		modules[moduleId](module,module.exports,require)
		return module.exports
	}
	// require 函数的静态方法
	require.r = (exports)=>{
		// 将 exports 的数据检测类型变为 Module
		// Object.property.toString.call(exports) :[object Module]
		Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})
		Object.defineProperty(exports,'__esModule',{value:true})
	}
	require.d = (exports,definition) =>{
		for(let key in definition){
			Object.defineProperty(exports,key,{
				enumerable:true,
				get:definition[key]
			})
		}
	}
  require.p = ''// 配置的 publicPath
  // 参数是代码块的名字,返回这个代码块的名称
  // name.main.js
  require.u = (chunkId) =>{
    return chunkId+ '.main.js'
  }
  // JSONP的原理,就是动态创建 script 标签
  require.l = (url)=>{
    // 创建标签
    let script = document.createElement('script')
    // 赋值 地址
    script.src = url
    // 将这段 script 代表放在 head 里面
    document.head.appendChild(script)
  }


  // 已经安装代码块, main 的代码块的名字 是 0 ,表示已经就绪
  let installedChunks = {
    main:0,
    // name:[resolve,reject]
  }
  require.f = {}
  require.f.j = (chunkId,promises)=>{
    let promise = new Promise((resolve,reject)=>{
      installedChunks[chunkId] = [resolve,reject]
    })
    promises.push(promise)
    // require.p publicPath + name.main.js
    let url = require.p + require.u(chunkId)
    // 自动加载
    require.l(url)
  }
  require.e = (chunkId)=>{
    let promises = []
    // 通过 jsonp 异步加载 chunkId
    require.f.j(chunkId,promises)
    return Promise.all(promises)
  }
  // window['webpack'].push 方法
  let webpackJsonpCallback = ([chunkIds,moreModules])=>{
    let resolves = chunkIds.map(chunkId=>installedChunks[chunkId][0])
    installedChunks[chunkIds]=0
    // 将外部的代码块和 modules进行合并
    for(let moduleId in moreModules){
      modules[moduleId] = moreModules[moduleId]
    }

    // 执行resolve
    resolves.forEach(resolve=>resolve())
  }


  let chunkLoadingGlobal = window['webpack'] = []
  chunkLoadingGlobal.push = webpackJsonpCallback

	require.e('name').then(require.bind(require,'./src/name.js')).then(res=>{
    console.log(res.default)
  })
})()