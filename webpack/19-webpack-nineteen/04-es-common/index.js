
(function(){
	var modules={
		'./src/name.js':(module,exports,require)=>{
			// commonJS 规范
			// 由于 name.js 导出属于 commonJS 规范,不需要处理
			module.exports = {
				name:'张三',
				age:19
			}
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

	require.n = (module) =>{
		// 兼容处理
		// 有可能是 commonJS 规范,也有可能是 esModule
		let  getter = module&&module.__esModule?
		()=> module.default:
		()=> module
		require.d(getter)

		return getter
	}

	let exports = {};
	// 入口 js 代码执行
	((function(){
		// esModule 规范
		require.r(exports)
		let name = require('./src/name.js')
		// require.n 用于 兼容处理
		let name_default = require.n(name)
		console.log(name_default())
		console.log(name.age)
	}))()
})()