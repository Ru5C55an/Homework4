/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks sync recursive \\.(png|gif|svg|jpg)$":
/*!******************************************!*\
  !*** ./blocks sync \.(png|gif|svg|jpg)$ ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./logo/logo.svg": "./blocks/logo/logo.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./blocks sync recursive \\.(png|gif|svg|jpg)$";

/***/ }),

/***/ "./blocks/logo/logo.svg":
/*!******************************!*\
  !*** ./blocks/logo/logo.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/logo.svg");

/***/ }),

/***/ "./img sync recursive \\.(png|gif|svg|jpg)$":
/*!***************************************!*\
  !*** ./img sync \.(png|gif|svg|jpg)$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./img sync recursive \\.(png|gif|svg|jpg)$";

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "../node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);

global.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
global.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;



__webpack_require__("./blocks sync recursive \\.(png|gif|svg|jpg)$");

__webpack_require__("./img sync recursive \\.(png|gif|svg|jpg)$");

jquery__WEBPACK_IMPORTED_MODULE_0___default()('#btn-tooltip').tooltip();
var rect1 = document.getElementById('rect1');

rect1.oninput = function () {
  var a = rect1.value;
  var S = a * a;
  var rectresult = document.getElementById('rectresult');
  rectresult.innerHTML = "Результат: " + S;
};

var circle1 = document.getElementById('circle1');

circle1.oninput = function () {
  var R = circle1.value;
  var S = Math.PI * R * R;
  var rectresult = document.getElementById('circleresult');
  rectresult.innerHTML = "Результат: " + S;
};

var ellipse1 = document.getElementById('ellipse1');
var ellipse2 = document.getElementById('ellipse2');

ellipse1.oninput = function () {
  var a = ellipse1.value;
  var b = ellipse2.value;
  var S = Math.PI * a * b;
  var rectresult = document.getElementById('ellipseresult');
  rectresult.innerHTML = "Результат: " + S;
};

ellipse2.oninput = function () {
  var a = ellipse1.value;
  var b = ellipse2.value;
  var S = Math.PI * a * b;
  var rectresult = document.getElementById('ellipseresult');
  rectresult.innerHTML = "Результат: " + S;
};

var parallelogram1 = document.getElementById('parallelogram1');
var parallelogram2 = document.getElementById('parallelogram2');

parallelogram1.oninput = function () {
  var a = parallelogram1.value;
  var h = parallelogram2.value;
  var S = a * h;
  var rectresult = document.getElementById('parallelogramresult');
  rectresult.innerHTML = "Результат: " + S;
};

parallelogram2.oninput = function () {
  var a = parallelogram1.value;
  var h = parallelogram2.value;
  var S = a * h;
  var rectresult = document.getElementById('parallelogramresult');
  rectresult.innerHTML = "Результат: " + S;
};

var trapecia1 = document.getElementById('trapecia1');
var trapecia2 = document.getElementById('trapecia2');
var trapecia3 = document.getElementById('trapecia3');

trapecia1.oninput = function () {
  var a = trapecia1.value;
  var b = trapecia2.value;
  var h = trapecia3.value;
  var S = 1 / 2 * (+a + +b) * h;
  console.log(a + b);
  var rectresult = document.getElementById('trapeciaresult');
  rectresult.innerHTML = "Результат: " + S;
};

trapecia2.oninput = function () {
  var a = trapecia1.value;
  var b = trapecia2.value;
  var h = trapecia3.value;
  var S = 1 / 2 * (+a + +b) * h;
  console.log(a + b);
  var rectresult = document.getElementById('trapeciaresult');
  rectresult.innerHTML = "Результат: " + S;
};

trapecia3.oninput = function () {
  var a = trapecia1.value;
  var b = trapecia2.value;
  var h = trapecia3.value;
  var S = 1 / 2 * (+a + +b) * h;
  console.log(a + b);
  var rectresult = document.getElementById('trapeciaresult');
  rectresult.innerHTML = "Результат: " + S;
};

var triangle1 = document.getElementById('triangle1');
var triangle2 = document.getElementById('triangle2');

triangle1.oninput = function () {
  var a = triangle1.value;
  var h = triangle2.value;
  var S = 1 / 2 * a * h;
  var rectresult = document.getElementById('triangleresult');
  rectresult.innerHTML = "Результат: " + S;
};

triangle2.oninput = function () {
  var a = triangle1.value;
  var h = triangle2.value;
  var S = 1 / 2 * a * h;
  var rectresult = document.getElementById('triangleresult');
  rectresult.innerHTML = "Результат: " + S;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./js/index.js ./scss/style.scss @babel/polyfill ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./js/index.js */"./js/index.js");
__webpack_require__(/*! ./scss/style.scss */"./scss/style.scss");
module.exports = __webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map