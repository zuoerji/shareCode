  (() => {
  	var __webpack_modules__ = ({
      "./src/name.js":
        ((module) => {
            module.exports = '张三'

         })

  	});

  	var __webpack_module_cache__ = {};
  	
  	function __webpack_require__(moduleId) {
  		var cachedModule = __webpack_module_cache__[moduleId];
  		if (cachedModule !== undefined) {
  			return cachedModule.exports;
  		}
  		var module = __webpack_module_cache__[moduleId] = {
  			exports: {}
  		};
  		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  		return module.exports;
  	}
  	
    var __webpack_exports__ = {};
    (() => {

    const name = __webpack_require__(/*! ./name.js */ "./src/name.js")
        console.log(name)
    })();

  })()
;