  (() => { 
  	var __webpack_modules__ = ({

      "./src/name.js":

        ((module) => {
          // commonJS 规范
          module.exports = {
              name:'张三',
              age:19
      }

  })

  	});

  	var __webpack_module_cache__ = {};
  	
  	function __webpack_require__(moduleId) {
  		var cachedModule = __webpack_module_cache__[moduleId];
  		if (cachedModule !== undefined) {
  			return cachedModule.exports;
  		}
  		// Create a new module (and put it into the cache)
  		var module = __webpack_module_cache__[moduleId] = {
  			// no module.id needed
  			// no module.loaded needed
  			exports: {}
  		};
  	
  		// Execute the module function
  		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  	
  		// Return the exports of the module
  		return module.exports;
  	}
  	

  	(() => {
  		__webpack_require__.n = (module) => {
  			var getter = module && module.__esModule ?
  				() => (module['default']) :
  				() => (module);
  			__webpack_require__.d(getter, { a: getter });
  			return getter;
  		};
  	})();
  	
  	(() => {
  		__webpack_require__.d = (exports, definition) => {
  			for(var key in definition) {
  				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
  					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
  				}
  			}
  		};
  	})();
  	
  	(() => {
  		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  	})();
  	
  	(() => {
  		__webpack_require__.r = (exports) => {
  			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  			}
  			Object.defineProperty(exports, '__esModule', { value: true });
  		};
  	})();
  	
var __webpack_exports__ = {};
(() => {

__webpack_require__.r(__webpack_exports__);
  var _name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./name.js */ "./src/name.js");
  var _name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_name_js__WEBPACK_IMPORTED_MODULE_0__);
// esModule 规范

console.log((_name_js__WEBPACK_IMPORTED_MODULE_0___default()))
console.log(_name_js__WEBPACK_IMPORTED_MODULE_0__.age)
})();

  })()
;
//# sourceMappingURL=index.js.map