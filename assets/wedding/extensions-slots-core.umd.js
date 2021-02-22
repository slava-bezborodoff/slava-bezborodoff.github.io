(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("extensions-slots-core", ["react", "reactDOM"], factory);
	else if(typeof exports === 'object')
		exports["extensions-slots-core"] = factory(require("react"), require("react-dom"));
	else
		root["extensions-slots-core"] = factory(root["React"], root["ReactDOM"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__4__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/extensions-slots-core/1.23.0/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************************************************************!*\
  !*** external {"amd":"react","commonjs":"react","commonjs2":"react","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/*! exports used: createContext, default, memo, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/*!***************************!*\
  !*** ./types/panelAPI.ts ***!
  \***************************/
/*! no static exports found */
/*! exports used: PanelAPI, PanelType */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



/***/ }),
/* 2 */
/*!*****************************!*\
  !*** ./types/slotsState.ts ***!
  \*****************************/
/*! no static exports found */
/*! exports used: SlotsState */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./types/openedPanels.ts ***!
  \*******************************/
/*! no static exports found */
/*! exports used: OpenedPanel */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



/***/ }),
/* 4 */
/*!****************************************************************************************************!*\
  !*** external {"amd":"reactDOM","commonjs":"react-dom","commonjs2":"react-dom","root":"ReactDOM"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/*!*******************************!*\
  !*** ./index.ts + 44 modules ***!
  \*******************************/
/*! exports provided: PrimaryPanelsSlot, PrimaryButtonsSlot, TopBarSecondaryActionsSlot, HelpMenuItemsSlot, StickyPanelSlot, SlotsStateProvider, EditorOpenedPanelsProvider, ExtensionDataProvider, useEditorSDK, useDocumentServices, useServiceTopology, useTranslation, useBiLogger, useExtensionId, useBoundedPanelAPI, useEditorExperiments, useExperiments, SlotsState, OpenedPanel, PanelAPI, PanelType, extensionsSlotsReducer, extensionsSlotsInitialState, registerSlotPortal, unregisterSlotPortal, updateSlotPortalProps, registerSlotPortalNode, unregisterSlotPortalNode, getSlots */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./types/openedPanels.ts (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./types/panelAPI.ts (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./types/slotsState.ts (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external {"amd":"react","commonjs":"react","commonjs2":"react","root":"React"} (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external {"amd":"reactDOM","commonjs":"react-dom","commonjs2":"react-dom","root":"ReactDOM"} (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "PrimaryPanelsSlot", function() { return /* reexport */ PrimaryPanelsSlot; });
__webpack_require__.d(__webpack_exports__, "PrimaryButtonsSlot", function() { return /* reexport */ PrimaryButtonsSlot; });
__webpack_require__.d(__webpack_exports__, "TopBarSecondaryActionsSlot", function() { return /* reexport */ TopBarSecondaryActionsSlot; });
__webpack_require__.d(__webpack_exports__, "HelpMenuItemsSlot", function() { return /* reexport */ HelpMenuItemsSlot; });
__webpack_require__.d(__webpack_exports__, "StickyPanelSlot", function() { return /* reexport */ StickyPanelSlot; });
__webpack_require__.d(__webpack_exports__, "SlotsStateProvider", function() { return /* reexport */ SlotsStateProvider; });
__webpack_require__.d(__webpack_exports__, "EditorOpenedPanelsProvider", function() { return /* reexport */ EditorOpenedPanelsProvider; });
__webpack_require__.d(__webpack_exports__, "ExtensionDataProvider", function() { return /* reexport */ ExtensionDataProvider; });
__webpack_require__.d(__webpack_exports__, "useEditorSDK", function() { return /* reexport */ useEditorSDK; });
__webpack_require__.d(__webpack_exports__, "useDocumentServices", function() { return /* reexport */ useDocumentServices; });
__webpack_require__.d(__webpack_exports__, "useServiceTopology", function() { return /* reexport */ useServiceTopology; });
__webpack_require__.d(__webpack_exports__, "useTranslation", function() { return /* reexport */ useTranslation; });
__webpack_require__.d(__webpack_exports__, "useBiLogger", function() { return /* reexport */ useBiLogger; });
__webpack_require__.d(__webpack_exports__, "useExtensionId", function() { return /* reexport */ useExtensionId; });
__webpack_require__.d(__webpack_exports__, "useBoundedPanelAPI", function() { return /* reexport */ useBoundedPanelAPI; });
__webpack_require__.d(__webpack_exports__, "useEditorExperiments", function() { return /* reexport */ useEditorExperiments; });
__webpack_require__.d(__webpack_exports__, "useExperiments", function() { return /* reexport */ useExperiments; });
__webpack_require__.d(__webpack_exports__, "SlotsState", function() { return /* reexport */ slotsState["SlotsState"]; });
__webpack_require__.d(__webpack_exports__, "OpenedPanel", function() { return /* reexport */ types_openedPanels["OpenedPanel"]; });
__webpack_require__.d(__webpack_exports__, "PanelAPI", function() { return /* reexport */ panelAPI["PanelAPI"]; });
__webpack_require__.d(__webpack_exports__, "PanelType", function() { return /* reexport */ panelAPI["PanelType"]; });
__webpack_require__.d(__webpack_exports__, "extensionsSlotsReducer", function() { return /* reexport */ extensionsSlotsReducer; });
__webpack_require__.d(__webpack_exports__, "extensionsSlotsInitialState", function() { return /* reexport */ extensionsSlotsInitialState; });
__webpack_require__.d(__webpack_exports__, "registerSlotPortal", function() { return /* reexport */ extensionsSlotsActions_registerSlotPortal; });
__webpack_require__.d(__webpack_exports__, "unregisterSlotPortal", function() { return /* reexport */ extensionsSlotsActions_unregisterSlotPortal; });
__webpack_require__.d(__webpack_exports__, "updateSlotPortalProps", function() { return /* reexport */ extensionsSlotsActions_updateSlotPortalProps; });
__webpack_require__.d(__webpack_exports__, "registerSlotPortalNode", function() { return /* reexport */ extensionsSlotsActions_registerSlotPortalNode; });
__webpack_require__.d(__webpack_exports__, "unregisterSlotPortalNode", function() { return /* reexport */ extensionsSlotsActions_unregisterSlotPortalNode; });
__webpack_require__.d(__webpack_exports__, "getSlots", function() { return /* reexport */ getSlots; });

// CONCATENATED MODULE: ../node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// EXTERNAL MODULE: external {"amd":"react","commonjs":"react","commonjs2":"react","root":"React"}
var external_amd_react_commonjs_react_commonjs2_react_root_React_ = __webpack_require__(0);
var external_amd_react_commonjs_react_commonjs2_react_root_React_default = /*#__PURE__*/__webpack_require__.n(external_amd_react_commonjs_react_commonjs2_react_root_React_);

// CONCATENATED MODULE: ./components/slots-state/SlotsAPIContext.tsx

var SlotsAPIContext = Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["createContext"])({});
SlotsAPIContext.displayName = 'SlotsAPIContext';


// CONCATENATED MODULE: ./hooks/slots/useSlotsAPI.ts


var useSlotsAPI = function () { return Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useContext"])(SlotsAPIContext); };

// CONCATENATED MODULE: ./components/slots-state/SlotsContentContext.tsx

var SlotsContentContext = Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["createContext"])({});
SlotsContentContext.displayName = 'SlotsContentContext';


// CONCATENATED MODULE: ./hooks/slots/useSlot.ts


var useSlot = function (slotId) {
    var slots = Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useContext"])(SlotsContentContext);
    return slots[slotId];
};

// CONCATENATED MODULE: ./hooks/slots/useSlotPortals.ts


function useSlotPortals(slotId, filter, sort) {
    var slot = useSlot(slotId);
    return Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useMemo"])(function () {
        if (!slot || Object.keys(slot).length === 0) {
            return [];
        }
        var extensionsIds = Object.keys(slot);
        var filteredExtensionIds = filter(extensionsIds);
        var sortedExtensionsIds = sort(filteredExtensionIds);
        return sortedExtensionsIds.flatMap(function (extensionId) { return slot[extensionId]; });
    }, [slot, filter, sort]);
}

// CONCATENATED MODULE: ./utils/typedMemo.ts

// React.memo hides generic props of a wrapped component
// more details here https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37087
var typedMemo = external_amd_react_commonjs_react_commonjs2_react_root_React_["memo"];

// CONCATENATED MODULE: ./utils/uniqueId.ts
var getRandomBytes = function () { return (Math.random() * 46656) | 0; };
var generateUID = function () {
    return getRandomBytes().toString(36) + getRandomBytes().toString(36);
};

// CONCATENATED MODULE: ./hooks/utils/useUniqueId.ts


var useUniqueId = function () {
    var id = Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useState"])(generateUID)[0];
    return id;
};

// CONCATENATED MODULE: ./components/SlotPlacement.tsx





var SlotPortalPlacement = typedMemo(function (props) {
    var _a = props.slotPortal, portalId = _a.portalId, _b = _a.ownProps, ownProps = _b === void 0 ? {} : _b;
    var _c = useSlotsAPI(), registerSlotPortalNode = _c.registerSlotPortalNode, unregisterSlotPortalNode = _c.unregisterSlotPortalNode;
    var slotPlacementId = useUniqueId();
    var portalNodeId = props.slotId + "." + props.slotPortal.extensionId + "." + portalId + "." + slotPlacementId;
    var integrationProps = Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useMemo"])(function () { return ({
        'data-extensions-portal-node-id': portalNodeId,
    }); }, [portalNodeId]);
    Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useLayoutEffect"])(function () {
        registerSlotPortalNode(portalId, slotPlacementId, portalNodeId);
        return function () {
            unregisterSlotPortalNode(portalId, slotPlacementId);
        };
    }, [
        registerSlotPortalNode,
        unregisterSlotPortalNode,
        portalId,
        portalNodeId,
        slotPlacementId,
    ]);
    return props.render(integrationProps, ownProps);
});
var SlotPortalPlacementList = typedMemo(function (props) { return (external_amd_react_commonjs_react_commonjs2_react_root_React_default.a.createElement(external_amd_react_commonjs_react_commonjs2_react_root_React_default.a.Fragment, null, props.slotPortals.map(function (slotPortal) { return (external_amd_react_commonjs_react_commonjs2_react_root_React_default.a.createElement(SlotPortalPlacement, { slotId: props.slotId, slotPortal: slotPortal, key: slotPortal.portalId, render: props.render })); }))); });
var SlotPlacement = function (props) {
    var slotId = props.slotId, render = props.render, filter = props.filter, sort = props.sort;
    var slotPortals = useSlotPortals(slotId, filter, sort);
    return Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useMemo"])(function () {
        if (slotPortals.length === 0) {
            return null;
        }
        return (external_amd_react_commonjs_react_commonjs2_react_root_React_default.a.createElement(SlotPortalPlacementList, { slotId: slotId, slotPortals: slotPortals, render: render }));
    }, [slotPortals, slotId, render]);
};

// EXTERNAL MODULE: external {"amd":"reactDOM","commonjs":"react-dom","commonjs2":"react-dom","root":"ReactDOM"}
var external_amd_reactDOM_commonjs_react_dom_commonjs2_react_dom_root_ReactDOM_ = __webpack_require__(4);
var external_amd_reactDOM_commonjs_react_dom_commonjs2_react_dom_root_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_amd_reactDOM_commonjs_react_dom_commonjs2_react_dom_root_ReactDOM_);

// CONCATENATED MODULE: ./components/slots-state/SlotsPortalNodesContext.tsx

var SlotsPortalNodesContext = Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["createContext"])({});
SlotsPortalNodesContext.displayName = 'SlotsPortalNodesContext';


// CONCATENATED MODULE: ./hooks/slots/usePortalNodes.ts


var usePortalNodes = function (slotPortalId) {
    var portalNodes = Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useContext"])(SlotsPortalNodesContext);
    var slotPortalNodes = portalNodes[slotPortalId] || [];
    var portalDomNodeSelectors = slotPortalNodes.map(function (portalNode) {
        return "[data-extensions-portal-node-id=\"" + portalNode.portalNodeId + "\"]";
    });
    return portalDomNodeSelectors
        .map(function (selector) { return ({
        node: document.querySelector(selector),
        nodeId: selector,
    }); })
        .filter(function (portalNode) { return portalNode.node !== null; });
};

// CONCATENATED MODULE: ./components/extension/ExtensionDataContext.ts

var ExtensionDataContext = Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["createContext"])({
    extensionId: '',
});

// CONCATENATED MODULE: ./hooks/environment/useExtensionId.ts


var useExtensionId = function () {
    return Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useContext"])(ExtensionDataContext).extensionId;
};

// CONCATENATED MODULE: ./hooks/utils/usePreviousValue.ts

var usePreviousValue = function (value) {
    var prevValueRef = Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useRef"])();
    Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useEffect"])(function () {
        prevValueRef.current = value;
    });
    return prevValueRef.current;
};

// CONCATENATED MODULE: ./utils/isShallowEqual.ts
function isShallowEqual(newObject, prevObject) {
    if (prevObject === newObject) {
        return true;
    }
    if (prevObject === undefined || newObject === undefined) {
        return false;
    }
    for (var prop in newObject) {
        if (!newObject.hasOwnProperty(prop)) {
            continue;
        }
        if (newObject[prop] !== prevObject[prop]) {
            return false;
        }
    }
    if (Object.keys(prevObject).length !== Object.keys(newObject).length) {
        return false;
    }
    return true;
}

// CONCATENATED MODULE: ./hooks/slots/useSlotPortalPropsUpdate.ts




var useSlotPortalPropsUpdate = function (slotId, extensionId, portalId, portalProps) {
    var updateSlotPortalProps = useSlotsAPI().updateSlotPortalProps;
    var prevProps = usePreviousValue(portalProps);
    Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useEffect"])(function () {
        var propsChanged = !isShallowEqual(portalProps, prevProps);
        if (!propsChanged) {
            return;
        }
        updateSlotPortalProps(slotId, extensionId, portalId, portalProps);
    });
};

// CONCATENATED MODULE: ./components/SlotPortal.tsx








var SlotPortal = function (props) {
    var _a = useSlotsAPI(), registerSlotPortal = _a.registerSlotPortal, unregisterSlotPortal = _a.unregisterSlotPortal;
    var extensionId = useExtensionId();
    var slotPortalId = useUniqueId();
    var slotId = props.slotId, children = props.children, slotOwnProps = __rest(props, ["slotId", "children"]);
    Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useEffect"])(function () {
        registerSlotPortal(slotId, extensionId, slotPortalId);
        return function () {
            unregisterSlotPortal(slotId, extensionId, slotPortalId);
        };
    }, [
        slotId,
        extensionId,
        slotPortalId,
        registerSlotPortal,
        unregisterSlotPortal,
    ]);
    useSlotPortalPropsUpdate(slotId, extensionId, slotPortalId, slotOwnProps);
    var portalNodes = usePortalNodes(slotPortalId);
    if (portalNodes.length === 0 || !children) {
        return null;
    }
    return (external_amd_react_commonjs_react_commonjs2_react_root_React_default.a.createElement(external_amd_react_commonjs_react_commonjs2_react_root_React_default.a.Fragment, null, portalNodes.map(function (portalNode) {
        return external_amd_reactDOM_commonjs_react_dom_commonjs2_react_dom_root_ReactDOM_default.a.createPortal(children, portalNode.node, portalNode.nodeId);
    })));
};

// CONCATENATED MODULE: ./utils/slotsUtils.ts




var identity = function (data) { return data; };
function createSlotPlacement(slotId) {
    var Placement = function (props) {
        return SlotPlacement({
            slotId: slotId,
            filter: props.filter || identity,
            sort: props.sort || identity,
            render: props.children,
        });
    };
    Placement.displayName = slotId + ".Placement";
    return Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["memo"])(Placement);
}
function createSlotPortal(slotId) {
    var Portal = function (props) {
        return SlotPortal(__assign(__assign({}, props), { slotId: slotId }));
    };
    Portal.displayName = slotId + ".Portal";
    return Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["memo"])(Portal);
}
function declareSlot(slotId) {
    return {
        Placement: createSlotPlacement(slotId),
        Portal: createSlotPortal(slotId),
    };
}

// CONCATENATED MODULE: ./slot-declarations/basicSlotIDs.ts
var SlotID;
(function (SlotID) {
    SlotID["PrimaryButtons"] = "PrimaryButtonsSlot";
    SlotID["PrimaryPanels"] = "PrimaryPanelsSlot";
    SlotID["TopBarSecondaryActions"] = "TopBarSecondaryActions";
    SlotID["HelpMenuItems"] = "HelpMenuItemsSlot";
    SlotID["StickyPanel"] = "StickyPanel";
})(SlotID || (SlotID = {}));

// CONCATENATED MODULE: ./slot-declarations/basic-slots/PrimaryPanelsSlot.ts


var PrimaryPanelsSlot = declareSlot(SlotID.PrimaryPanels);

// CONCATENATED MODULE: ./slot-declarations/basic-slots/PrimaryButtonsSlot.ts


var PrimaryButtonsSlot = declareSlot(SlotID.PrimaryButtons);

// CONCATENATED MODULE: ./slot-declarations/basic-slots/TopBarSecondaryActionsSlot.ts


var TopBarSecondaryActionsSlot = declareSlot(SlotID.TopBarSecondaryActions);

// CONCATENATED MODULE: ./slot-declarations/basic-slots/HelpMenuItemsSlot.ts


var HelpMenuItemsSlot = declareSlot(SlotID.HelpMenuItems);

// CONCATENATED MODULE: ./slot-declarations/basic-slots/StickyPanelSlot.ts


var StickyPanelSlot = declareSlot(SlotID.StickyPanel);

// CONCATENATED MODULE: ./slot-declarations/index.ts






// CONCATENATED MODULE: ./components/slots-state/SlotsStateProvider.tsx




var SlotsStateProvider = function (props) { return (external_amd_react_commonjs_react_commonjs2_react_root_React_default.a.createElement(SlotsContentContext.Provider, { value: props.slots.portals },
    external_amd_react_commonjs_react_commonjs2_react_root_React_default.a.createElement(SlotsPortalNodesContext.Provider, { value: props.slots.portalNodes },
        external_amd_react_commonjs_react_commonjs2_react_root_React_default.a.createElement(SlotsAPIContext.Provider, { value: props.slotsAPI }, props.children)))); };

// CONCATENATED MODULE: ./components/editor-integration/opened-panels/EditorOpenedPanelsContext.tsx

var EditorOpenedPanelsContext = Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["createContext"])([]);

// CONCATENATED MODULE: ./components/editor-integration/opened-panels/EditorOpenedPanelsProvider.tsx


var EditorOpenedPanelsProvider = function (props) {
    return (external_amd_react_commonjs_react_commonjs2_react_root_React_default.a.createElement(EditorOpenedPanelsContext.Provider, { value: props.openedPanels }, props.children));
};

// CONCATENATED MODULE: ./components/extension/ExtensionDataProvider.tsx




var shallowCompareAllButChildren = function (prevProps, nextProps) {
    var prevChildren = prevProps.children, prevPropsWithNoChildren = __rest(prevProps, ["children"]);
    var nextChildren = nextProps.children, nextPropsWithNoChildren = __rest(nextProps, ["children"]);
    return isShallowEqual(prevPropsWithNoChildren, nextPropsWithNoChildren);
};
var ExtensionDataProvider = Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["memo"])(function (props) {
    return (external_amd_react_commonjs_react_commonjs2_react_root_React_default.a.createElement(ExtensionDataContext.Provider, { value: props }, props.children));
}, shallowCompareAllButChildren);

// CONCATENATED MODULE: ./hooks/environment/useEditorSDK.ts


var useEditorSDK = function () { return Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useContext"])(ExtensionDataContext).editorSDK; };

// CONCATENATED MODULE: ./hooks/environment/useDocumentServices.ts


var useDocumentServices = function () {
    return Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useContext"])(ExtensionDataContext).documentServices;
};

// CONCATENATED MODULE: ./hooks/environment/useServiceTopology.ts


var useServiceTopology = function () {
    return Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useContext"])(ExtensionDataContext).serviceTopology;
};

// CONCATENATED MODULE: ./hooks/environment/useTranslation.ts


var useTranslation = function () { return Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useContext"])(ExtensionDataContext).translate; };

// CONCATENATED MODULE: ./hooks/environment/useBiLogger.ts


var useBiLogger = function () { return Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useContext"])(ExtensionDataContext).biLogger; };

// CONCATENATED MODULE: ./hooks/panels/useOpenedPanels.ts


var useOpenedPanels = function () { return Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useContext"])(EditorOpenedPanelsContext); };

// CONCATENATED MODULE: ./hooks/panels/useEditorPanelAPI.ts




function buildPanelToken(extensionId, panelName) {
    return extensionId + "_" + panelName;
}
var useEditorPanelAPI = function (panelType) {
    var editorSDK = useEditorSDK();
    var extensionId = useExtensionId();
    var openedPanels = useOpenedPanels();
    var openPanel = Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useCallback"])(function (panelName, options) {
        if (options === void 0) { options = { leavePanelsOpened: false }; }
        return editorSDK.editor.openPanel(panelType, {
            token: buildPanelToken(extensionId, panelName),
        }, options.leavePanelsOpened);
    }, [editorSDK, extensionId, panelType]);
    var closePanel = Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useCallback"])(function (panelName) {
        var token = buildPanelToken(extensionId, panelName);
        return editorSDK.editor.closePanel(token, undefined);
    }, [editorSDK, extensionId]);
    var isPanelOpened = Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useCallback"])(function (panelName) {
        var token = buildPanelToken(extensionId, panelName);
        return openedPanels.some(function (panel) { return panel.token === token; });
    }, [openedPanels, extensionId]);
    return Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useMemo"])(function () { return ({
        openPanel: openPanel,
        closePanel: closePanel,
        isPanelOpened: isPanelOpened,
    }); }, [openPanel, closePanel, isPanelOpened]);
};

// CONCATENATED MODULE: ./hooks/panels/useBoundedPanelAPI.ts



var useBoundedPanelAPI = function (panelType) {
    var _a = useEditorPanelAPI(panelType), openPanel = _a.openPanel, closePanel = _a.closePanel, isPanelOpened = _a.isPanelOpened;
    var panelName = useUniqueId();
    var boundedOpenPanel = Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useCallback"])(function (options) { return openPanel(panelName, options); }, [openPanel, panelName]);
    var boundedClosePanel = Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useCallback"])(function () { return closePanel(panelName); }, [
        closePanel,
        panelName,
    ]);
    var boundedIsPanelOpened = Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useCallback"])(function () { return isPanelOpened(panelName); }, [
        isPanelOpened,
        panelName,
    ]);
    return Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useMemo"])(function () { return ({
        openPanel: boundedOpenPanel,
        closePanel: boundedClosePanel,
        isPanelOpened: boundedIsPanelOpened,
    }); }, [boundedOpenPanel, boundedClosePanel, boundedIsPanelOpened]);
};

// CONCATENATED MODULE: ./hooks/environment/useEditorExperiments.ts


var useEditorExperiments = function () {
    return Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useContext"])(ExtensionDataContext).editorExperiments;
};

// CONCATENATED MODULE: ./hooks/environment/useExperiments.ts


var useExperiments = function () {
    return Object(external_amd_react_commonjs_react_commonjs2_react_root_React_["useContext"])(ExtensionDataContext).experiments;
};

// EXTERNAL MODULE: ./types/slotsState.ts
var slotsState = __webpack_require__(2);

// EXTERNAL MODULE: ./types/openedPanels.ts
var types_openedPanels = __webpack_require__(3);

// EXTERNAL MODULE: ./types/panelAPI.ts
var panelAPI = __webpack_require__(1);

// CONCATENATED MODULE: ./state-management/extensionsSlotsActionsTypes.ts
var REGISTER_SLOT_PORTAL = 'extensionsSlots.registerSlotPortal';
var UNREGISTER_SLOT_PORTAL = 'extensionsSlots.unregisterSlotPortal';
var UPDATE_SLOT_PORTAL_PROPS = 'extensionsSlots.updateSlotPortalProps';
var REGISTER_SLOT_PORTAL_NODE = 'extensionsSlots.registerSlotPortalNode';
var UNREGISTER_SLOT_PORTAL_NODE = 'extensionsSlots.unregisterSlotPortalNode';

// CONCATENATED MODULE: ./state-management/extensionsSlotsReducer.ts


var extensionsSlotsInitialState = {
    portals: {},
    portalNodes: {},
};
var extensionsSlotsReducer = function (state, action) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var _j, _k, _l, _m, _o;
    if (state === void 0) { state = extensionsSlotsInitialState; }
    switch (action.type) {
        case REGISTER_SLOT_PORTAL: {
            var _p = action.payload, slotId = _p.slotId, extensionId = _p.extensionId, portalId = _p.portalId;
            return __assign(__assign({}, state), { portals: __assign(__assign({}, state.portals), (_a = {}, _a[slotId] = __assign(__assign({}, state.portals[slotId]), (_b = {}, _b[extensionId] = __spreadArrays(((_k = (_j = state.portals[slotId]) === null || _j === void 0 ? void 0 : _j[extensionId]) !== null && _k !== void 0 ? _k : []), [
                    {
                        portalId: portalId,
                        extensionId: extensionId,
                        ownProps: {},
                    },
                ]), _b)), _a)) });
        }
        case UNREGISTER_SLOT_PORTAL: {
            var _q = action.payload, slotId = _q.slotId, extensionId = _q.extensionId, portalId_1 = _q.portalId;
            return __assign(__assign({}, state), { portals: __assign(__assign({}, state.portals), (_c = {}, _c[slotId] = __assign(__assign({}, state.portals[slotId]), (_d = {}, _d[extensionId] = state.portals[slotId][extensionId].filter(function (slotPortal) { return slotPortal.portalId !== portalId_1; }), _d)), _c)) });
        }
        case UPDATE_SLOT_PORTAL_PROPS: {
            var _r = action.payload, slotId = _r.slotId, extensionId = _r.extensionId, portalId_2 = _r.portalId, portalProps_1 = _r.portalProps;
            return __assign(__assign({}, state), { portals: __assign(__assign({}, state.portals), (_e = {}, _e[slotId] = __assign(__assign({}, state.portals[slotId]), (_f = {}, _f[extensionId] = ((_m = (_l = state.portals[slotId]) === null || _l === void 0 ? void 0 : _l[extensionId]) !== null && _m !== void 0 ? _m : []).map(function (slotPortal) {
                    if (slotPortal.portalId === portalId_2) {
                        return __assign(__assign({}, slotPortal), { ownProps: portalProps_1 });
                    }
                    return slotPortal;
                }), _f)), _e)) });
        }
        case REGISTER_SLOT_PORTAL_NODE: {
            var _s = action.payload, portalId = _s.portalId, portalNodeId = _s.portalNodeId, placementId = _s.placementId;
            return __assign(__assign({}, state), { portalNodes: __assign(__assign({}, state.portalNodes), (_g = {}, _g[portalId] = __spreadArrays(((_o = state.portalNodes[portalId]) !== null && _o !== void 0 ? _o : []), [
                    {
                        portalNodeId: portalNodeId,
                        placementId: placementId,
                    },
                ]), _g)) });
        }
        case UNREGISTER_SLOT_PORTAL_NODE: {
            var _t = action.payload, portalId = _t.portalId, placementId_1 = _t.placementId;
            return __assign(__assign({}, state), { portalNodes: __assign(__assign({}, state.portalNodes), (_h = {}, _h[portalId] = state.portalNodes[portalId].filter(function (portalNode) { return portalNode.placementId !== placementId_1; }), _h)) });
        }
        default: {
            return state;
        }
    }
};

// CONCATENATED MODULE: ./state-management/extensionsSlotsActions.ts

var extensionsSlotsActions_registerSlotPortal = function (slotId, extensionId, portalId) { return ({
    type: REGISTER_SLOT_PORTAL,
    payload: {
        slotId: slotId,
        extensionId: extensionId,
        portalId: portalId,
    },
}); };
var extensionsSlotsActions_unregisterSlotPortal = function (slotId, extensionId, portalId) { return ({
    type: UNREGISTER_SLOT_PORTAL,
    payload: {
        slotId: slotId,
        extensionId: extensionId,
        portalId: portalId,
    },
}); };
var extensionsSlotsActions_updateSlotPortalProps = function (slotId, extensionId, portalId, portalProps) { return ({
    type: UPDATE_SLOT_PORTAL_PROPS,
    payload: {
        slotId: slotId,
        extensionId: extensionId,
        portalId: portalId,
        portalProps: portalProps,
    },
}); };
var extensionsSlotsActions_registerSlotPortalNode = function (portalId, placementId, portalNodeId) { return ({
    type: REGISTER_SLOT_PORTAL_NODE,
    payload: {
        portalId: portalId,
        portalNodeId: portalNodeId,
        placementId: placementId,
    },
}); };
var extensionsSlotsActions_unregisterSlotPortalNode = function (portalId, placementId) { return ({
    type: UNREGISTER_SLOT_PORTAL_NODE,
    payload: {
        portalId: portalId,
        placementId: placementId,
    },
}); };

// CONCATENATED MODULE: ./state-management/extensionsSlotsSelectors.ts
var getSlots = function (state) {
    return state.extensionsSlots;
};


// CONCATENATED MODULE: ./index.ts





















/***/ })
/******/ ]);
});
//# sourceMappingURL=extensions-slots-core.umd.js.map