
   
   
   (() => { 
    var __webpack_modules__ = ({
        
            "./src/index.js":((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
                eval(`let news = __webpack_require__("./src/news.js");

console.log(news.content);`);
            }),
        
            "./src/news.js":((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
                eval(`let message = __webpack_require__("./src/message.js");

module.exports = {
  content: '今天有个大新闻,爆炸消息!!内容是:' + message.content
};`);
            }),
        
            "./src/message.js":((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
                eval(`module.exports = {
  content: '今天要下雨了'
};`);
            }),
        

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

    var __webpack_exports__ = __webpack_require__("./src/index.js");
    
})()
;