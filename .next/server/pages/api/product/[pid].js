"use strict";
(() => {
var exports = {};
exports.id = 151;
exports.ids = [151];
exports.modules = {

/***/ 1014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_data_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9797);
// fake data

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{
    const { query: { pid } } = req;
    const product = _utils_data_products__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.find((x)=>x.id === pid);
    res.status(200).json(product);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [797], () => (__webpack_exec__(1014)));
module.exports = __webpack_exports__;

})();