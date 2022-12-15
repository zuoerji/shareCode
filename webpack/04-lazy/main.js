(()=>{
	// 存放着所有的模块定义,包括懒加载,或者异步在家过来的模块定义
	let modules = {}

	let cache = {}
	function require(moduleId){
		if(cache[moduleId]){
			return cache[moduleId].exports
		}
		let module = { exports:{}}
		cache[moduleId] = module

		modules[moduleId].call(module.exports,module,module.exports,require)

		return module.exports
	}
	require.f = {}
	// 如何异步加载额外代码块 chunkId = name
	require.e = (chunkId)=>{
		let promises = []
		
		require.f.j(chunkId,promises)
		return Promise.all(promises)
	}
	require.p = '' // publicPath 资源访问路径
	require.u = (chunkId)=>{ // 参数是代码块的名字,返回值是这个代码的文件名
		return  chunkId+ '.main.js';
	}
	// 已经安装的代码块 main 代码块的名字: 0 表示已经就绪
	let installedChunks = {
		main:0,
		// name:[resolve,reject]
	}
	// 通过 jsonp 异步加载 chunkId,
	require.f.j = (chunkId,promises)=>{
		let promise = new Promise((resolve,reject)=>{
			installedChunks[chunkId] = [resolve,reject]
		})
		promises.push(promise)
		let url = require.p + require.u(chunkId)
		require.l(url)
	}
	// 动态添加 script 标签
	// 自动加载
	require.l = (url)=>{
		let script = document.createElement('script')
		script.src = url
		document.head.appendChild(script)
	}
	let webpackJsonpCallback = ([chunkeIds,moreModules]) =>{
		// chunkeIds = ['hello'] => [resolve,reject]
		let resolves =  chunkeIds.map(chunkId=>installedChunks[chunkId][0])
		installedChunks[chunkeIds]=0
		// 把异步加载回来的额外的代码块,合并到总的模块化对象中
		for(let moduleId in moreModules){
			modules[moduleId] = moreModules[moduleId]
		}
		resolves.forEach(resolve=>resolve())
	}
	let chunkLoadingGlobal = window['webpack'] = []
	chunkLoadingGlobal.push = webpackJsonpCallback
	// 异步加载 name 代码块,  然后把 name 里面的代码块的合并到 主模块定义里面去
	require.e('name').then(require.bind(require,'./src/name.js')).then(res=>{
		console.log(res.default)
	})
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

})()