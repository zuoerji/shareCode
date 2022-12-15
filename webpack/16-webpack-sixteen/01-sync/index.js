(function(){
	var modules={
		'./src/name.js':(module,exports,require)=>{
			// name.js 里面的代码
			module.exports = '张三'
		
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
	// 入口 js 代码执行
	((function(){
		const name = require('./src/name.js')
		console.log(name)
	}))()
})()