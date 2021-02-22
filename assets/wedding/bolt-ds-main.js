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
/******/ 	__webpack_require__.p = "bolt-ds-main/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../tb-main/src/utils.ts":
/*!*******************************!*\
  !*** ../tb-main/src/utils.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadStyle = exports.loadScript = void 0;

const loadScript = (src, name) => new Promise(resolve => {
  const element = document.createElement('script');
  element.async = false; //make sure the scripts execute in the order they are added

  element.src = src;

  element.onload = () => resolve();

  document.body.appendChild(element);
}).catch(err => {
  console.log(`Failed to load script ${name}: ${err.message}`);
});

exports.loadScript = loadScript;

const loadStyle = (href, name) => new Promise(resolve => {
  const element = document.createElement('link');
  element.rel = 'stylesheet';
  element.href = href;

  element.onload = () => resolve();

  document.body.appendChild(element);
}).catch(err => {
  console.log(`Failed to load script ${name}: ${err.message}`);
});

exports.loadStyle = loadStyle;
module.exports = {
  loadScript,
  loadStyle
};

/***/ }),

/***/ "./dist/versions.json":
/*!****************************!*\
  !*** ./dist/versions.json ***!
  \****************************/
/*! exports provided: bolt, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"bolt\":\"1.7038.0\"}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const {
  bolt
} = __webpack_require__(/*! ../dist/versions.json */ "./dist/versions.json");

const {
  loadScript
} = __webpack_require__(/*! tb-main/src/utils */ "../tb-main/src/utils.ts");

if (window.location.search.indexOf('BoltSource') < 0) {
  //eslint-disable-line lodash/prefer-includes
  window.boltBase = `https://static.parastorage.com/services/wix-bolt/${bolt}`;
}

const main = `${window.boltBase}/bolt-main/app/main-r.min.js`;
loadScript('https://static.parastorage.com/unpkg-semver/wix-recorder@^1/app.bundle.min.js').catch(e => console.log(e));
loadScript(main).then(() => {}).catch(e => console.log(e));

/***/ })

/******/ });
//# sourceMappingURL=bolt-ds-main.js.map