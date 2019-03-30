/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./commons.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./commons.js":
/*!********************!*\
  !*** ./commons.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_my_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/my-styles.scss */ \"./styles/my-styles.scss\");\n/* harmony import */ var _styles_my_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_my_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n // console.log('Hello, world!!!!! Вот!');\n\n /////////////////////////////////\n// Загрузка иконок для спрайта //\n/////////////////////////////////\n// main\n\n__webpack_require__(/*! ./icons/home.svg */ \"./icons/home.svg\");\n\n__webpack_require__(/*! ./icons/email.svg */ \"./icons/email.svg\");\n\n__webpack_require__(/*! ./icons/phone.svg */ \"./icons/phone.svg\");\n\n__webpack_require__(/*! ./icons/place.svg */ \"./icons/place.svg\");\n\n__webpack_require__(/*! ./icons/search.svg */ \"./icons/search.svg\"); // require('./icons/arrow-down.svg');\n// require('./icons/menu.svg');\n// require('./icons/time.svg');\n// require('./icons/comment.svg');\n// require('./icons/edit.svg');\n// require('./icons/close.svg');\n// require('./icons/person.svg');\n// require('./icons/person-o.svg');\n// require('./icons/mobile.svg');\n// Картинки\n\n\n__webpack_require__(/*! ./images/logo_farmeropt.svg */ \"./images/logo_farmeropt.svg\");\n\n__webpack_require__(/*! ./images/logo_farmeropt_white.svg */ \"./images/logo_farmeropt_white.svg\");\n\n//# sourceURL=webpack:///./commons.js?");

/***/ }),

/***/ "./icons/email.svg":
/*!*************************!*\
  !*** ./icons/email.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"email-usage\",\n      viewBox: \"0 0 24 24\",\n      url: __webpack_require__.p + \"icons/icons-sprite.svg#email-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });\n\n//# sourceURL=webpack:///./icons/email.svg?");

/***/ }),

/***/ "./icons/home.svg":
/*!************************!*\
  !*** ./icons/home.svg ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"home-usage\",\n      viewBox: \"0 0 24 24\",\n      url: __webpack_require__.p + \"icons/icons-sprite.svg#home-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });\n\n//# sourceURL=webpack:///./icons/home.svg?");

/***/ }),

/***/ "./icons/phone.svg":
/*!*************************!*\
  !*** ./icons/phone.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"phone-usage\",\n      viewBox: \"0 0 24 24\",\n      url: __webpack_require__.p + \"icons/icons-sprite.svg#phone-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });\n\n//# sourceURL=webpack:///./icons/phone.svg?");

/***/ }),

/***/ "./icons/place.svg":
/*!*************************!*\
  !*** ./icons/place.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"place-usage\",\n      viewBox: \"0 0 24 24\",\n      url: __webpack_require__.p + \"icons/icons-sprite.svg#place-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });\n\n//# sourceURL=webpack:///./icons/place.svg?");

/***/ }),

/***/ "./icons/search.svg":
/*!**************************!*\
  !*** ./icons/search.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"search-usage\",\n      viewBox: \"0 0 24 24\",\n      url: __webpack_require__.p + \"icons/icons-sprite.svg#search-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });\n\n//# sourceURL=webpack:///./icons/search.svg?");

/***/ }),

/***/ "./images/logo_farmeropt.svg":
/*!***********************************!*\
  !*** ./images/logo_farmeropt.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/logo_farmeropt.svg\";\n\n//# sourceURL=webpack:///./images/logo_farmeropt.svg?");

/***/ }),

/***/ "./images/logo_farmeropt_white.svg":
/*!*****************************************!*\
  !*** ./images/logo_farmeropt_white.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/logo_farmeropt_white.svg\";\n\n//# sourceURL=webpack:///./images/logo_farmeropt_white.svg?");

/***/ }),

/***/ "./styles/my-styles.scss":
/*!*******************************!*\
  !*** ./styles/my-styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/my-styles.scss?");

/***/ })

/******/ });