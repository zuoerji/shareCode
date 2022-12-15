
(window["webpack"] = window["webpack"] || []).push([["name"],{

 "./src/name.js":
 ((module, exports, requier) => {
    console.log(requier,'requier')
    requier.r(exports);
    requier.d(exports, {
      "default": () => (__WEBPACK_DEFAULT_EXPORT__)
    });

// // commonJS 规范
// module.exports = {
//     name:'张三',
//     age:19
// }


 const __WEBPACK_DEFAULT_EXPORT__ = ('张三');

 })

}]);