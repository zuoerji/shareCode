(function(){
	var modules={
		'./src/name.js':(module,exports,require)=>{
		// 不管是 commonJS规范还是 esModule规范 最后都会编译成 commonJS 规范
		// 原来的 esModule规范 就把 exports 传给 r 方法来处理
			require.r(exports)
			require.d(exports,{
				default:()=>DEFAULT_EXPORT,
				age:()=>age
			})

			const DEFAULT_EXPORT = '张三'
			const age = 19
		}
	}
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


	// 入口 js 代码执行
	((function(){
		const name = require('./src/name.js')
		console.log(name)
	}))()
})()