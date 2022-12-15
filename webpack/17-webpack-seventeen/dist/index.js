  (() => { // webpackBootstrap
  	var __webpack_modules__ = ({

   "./src/name.js":

   ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "age": () => (/* binding */ age),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

// esModule 规范
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('张三');
let age = 19


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
  	
  		// Return the exports of the module
  		return module.exports;
  	}
  	

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

  // require: commonJS 规范
  const name = __webpack_require__(/*! ./name.js */ "./src/name.js")
  console.log(name)
  })();

  })()
;
//# sourceMappingURL=index.js.map