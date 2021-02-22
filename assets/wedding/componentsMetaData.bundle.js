(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["componentsMetaData"] = factory(require("lodash"));
	else
		root["componentsMetaData"] = factory(root["_"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__3__) {
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
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/wix-ui-santa/1.1534.0/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1566);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1566:
/*!*******************************!*\
  !*** ./componentsMetaData.js ***!
  \*******************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _legacy_components_RichTextBox_metaData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legacy/components/RichTextBox/metaData */ 630);
/* harmony import */ var _legacy_components_ToggleSwitch_metaData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy/components/ToggleSwitch/metaData */ 631);
/* harmony import */ var _components_Slider_metaData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Slider/metaData */ 632);
/* harmony import */ var _components_SearchBox_metaData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SearchBox/metaData */ 633);
/* harmony import */ var _components_BarChart_metaData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/BarChart/metaData */ 634);
/* harmony import */ var _components_TimePicker_metaData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TimePicker/metaData */ 635);
/* harmony import */ var _components_RatingsInput_metaData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/RatingsInput/metaData */ 636);
/* harmony import */ var _components_RatingsDisplay_metaData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/RatingsDisplay/metaData */ 637);
/* harmony import */ var _components_Tags_ds_metaData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Tags/ds/metaData */ 638);
/* harmony import */ var _components_VideoPlayer_metaData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/VideoPlayer/metaData */ 639);
/* harmony import */ var _components_AddressInput_metaData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/AddressInput/metaData */ 812);
/* harmony import */ var _components_AddressInput_metaData__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_AddressInput_metaData__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_LineShareButton_ds_metaData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/LineShareButton/ds/metaData */ 640);
/* harmony import */ var _components_LineShareButton_ds_metaData__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_LineShareButton_ds_metaData__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Captcha_metaData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Captcha/metaData */ 641);
/* harmony import */ var _components_MusicPlayer_metaData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/MusicPlayer/metaData */ 642);
/* harmony import */ var _components_StylableButton_ds_metaData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/StylableButton/ds/metaData */ 643);
/* harmony import */ var _components_StylableLine_ds_metaData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/StylableLine/ds/metaData */ 644);
/* harmony import */ var _components_ProgressBar_metaData__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/ProgressBar/metaData */ 645);
/* harmony import */ var _components_CustomElement_ds_metaData__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/CustomElement/ds/metaData */ 646);
/* harmony import */ var _components_SignatureInput_metaData__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/SignatureInput/metaData */ 647);
/* harmony import */ var _components_SelectionTagsList_metaData__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/SelectionTagsList/metaData */ 648);
/* harmony import */ var _components_StylableHorizontalMenu_metaData__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/StylableHorizontalMenu/metaData */ 649);
/* harmony import */ var _components_ImageX_metaData__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/ImageX/metaData */ 650);
/* harmony import */ var _components_Pagination_ds_metaData__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/Pagination/ds/metaData */ 651);
/* harmony import */ var _components_SocialAuth_metaData__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/SocialAuth/metaData */ 652);
























/* harmony default export */ __webpack_exports__["default"] = ({
  'wixui.RichTextBox': _legacy_components_RichTextBox_metaData__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  'wixui.ToggleSwitch': _legacy_components_ToggleSwitch_metaData__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  'wixui.Slider': _components_Slider_metaData__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  'wixui.SearchBox': _components_SearchBox_metaData__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
  'wixui.TimePicker': _components_TimePicker_metaData__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
  'wixui.RatingsInput': _components_RatingsInput_metaData__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
  'wixui.RatingsDisplay': _components_RatingsDisplay_metaData__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
  'wixui.VideoPlayer': _components_VideoPlayer_metaData__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],
  'wixui.AddressInput': _components_AddressInput_metaData__WEBPACK_IMPORTED_MODULE_10___default.a,
  'wixui.LineShareButton': _components_LineShareButton_ds_metaData__WEBPACK_IMPORTED_MODULE_11___default.a,
  'wixui.Captcha': _components_Captcha_metaData__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"],
  'wixui.Tags': _components_Tags_ds_metaData__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
  'wixui.MusicPlayer': _components_MusicPlayer_metaData__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"],
  'wixui.StylableButton': _components_StylableButton_ds_metaData__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"],
  'wixui.StylableLine': _components_StylableLine_ds_metaData__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"],
  'wixui.ProgressBar': _components_ProgressBar_metaData__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"],
  'wixui.BarChart': _components_BarChart_metaData__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
  'wixui.CustomElementComponent': _components_CustomElement_ds_metaData__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"],
  'wixui.SignatureInput': _components_SignatureInput_metaData__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"],
  'wixui.SelectionTagsList': _components_SelectionTagsList_metaData__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"],
  'wixui.StylableHorizontalMenu': _components_StylableHorizontalMenu_metaData__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"],
  'wixui.ImageX': _components_ImageX_metaData__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"],
  'wixui.Pagination': _components_Pagination_ds_metaData__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"],
  'wixui.SocialAuth': _components_SocialAuth_metaData__WEBPACK_IMPORTED_MODULE_23__[/* default */ "a"]
});

/***/ }),

/***/ 175:
/*!***********************************************************!*\
  !*** ./components/MusicPlayer/editor/layoutManagement.js ***!
  \***********************************************************/
/*! exports provided: findLayoutMinAndMax, findLayoutWidthAndHeight, findPlaylistMaxHeight */
/*! exports used: findLayoutMinAndMax, findLayoutWidthAndHeight, findPlaylistMaxHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findLayoutMinAndMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return findLayoutWidthAndHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return findPlaylistMaxHeight; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ 19);
/* eslint-disable max-params */

/* eslint-disable complexity */


var SMALL_HEIGHT = 40;
var DEFAULT_HEIGHT = 70;
var COVER_SIZE = 70;
var DEFAULT_WIDTH = 320;
var PLAYLIST_TRACK_ITEM_HEIGHT = 52;
var PLAYLIST_FILLERS_HEIGHT = 12 * 2;
var PLAYLIST_FOOTER_HEIGHT = 59;
/*
Width and height values are taken from design.
Bit map are used to cover all show%layout_info% toggles.

weight = width x height

 0 = 70 x 70
 1 = 70 x 70

 2 = 114 x 40
 3 = 114 + 40 x 40
 4 = 250 x 40
 5 = 250 + 40 x 40
 6 = 250 x 40
 7 = 250 + 40 x 40
 8 = 250 x 40
 9 = 250 + 40 x 40
10 = 250 x 40
11 = 250 + 40 x 40
12 = 250 x 70
13 = 250 + 70 x 70
14 = 250 x 70
15 = 250 + 70 x 70
*/

var LAYOUT_WEIGHTS = {
  showCover: 1,
  showTimeStamp: 2,
  showTrackName: 4,
  showArtistName: 4,
  showProgressBar: 8
};
var NO_SELECT_WEIGHT = 1;
var COVER_WEIGHT = 2;
var LAYOUT_WIDTH_LEVELS = {
  1: 70,
  3: 114,
  15: 180
};
var LAYOUT_HEIGHT_LEVELS = {
  1: 70,
  11: 40,
  15: 70
};

function countLayoutWeights(compProps) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.chain(Object.keys(compProps)).filter(function (key) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.startsWith(key, 'show');
  }).map(function (key) {
    return compProps[key] ? LAYOUT_WEIGHTS[key] : 0;
  }).reduce(function (acc, i) {
    return acc | i;
  }, 0) // eslint-disable-line no-bitwise
  .value();
}

function pickLayoutLevel(weight, levels) {
  for (var value in levels) {
    if (weight <= value) {
      return levels[value];
    }
  }
}

function findLayoutMinAndMax(compData, compProps) {
  var layout = compProps.layout;

  if (layout === 'icon') {
    return {
      minWidth: SMALL_HEIGHT,
      maxWidth: 300,
      minHeight: SMALL_HEIGHT,
      maxHeight: 300
    };
  }

  var weight = countLayoutWeights(compProps);
  var minWidth = pickLayoutLevel(weight, LAYOUT_WIDTH_LEVELS);
  var minHeight = pickLayoutLevel(weight, LAYOUT_HEIGHT_LEVELS); // Every odd weight we have cover added to total width

  if (weight > COVER_WEIGHT && weight % 2) {
    minWidth += minHeight;
  }

  var max = weight <= NO_SELECT_WEIGHT ? COVER_SIZE : Number.MAX_SAFE_INTEGER;
  return {
    minWidth: minWidth,
    maxWidth: max,
    minHeight: minHeight,
    maxHeight: max
  };
}

function findLayoutWidthAndHeight(compData, compProps, compLayout, tracksToShow, setNumTracks) {
  var showArtistName = compProps.showArtistName,
      showTrackName = compProps.showTrackName,
      showProgressBar = compProps.showProgressBar,
      showTimeStamp = compProps.showTimeStamp,
      showPlaylist = compProps.showPlaylist,
      layout = compProps.layout,
      source = compProps.source,
      playlistTrackSpacing = compProps.playlistTrackSpacing;
  var width = compLayout.width,
      height = compLayout.height;
  var playlist = compData.playlist;
  var prevHeight = findLayoutWidthAndHeight.prevHeight || height;

  if (layout === 'icon') {
    return {
      height: SMALL_HEIGHT,
      width: SMALL_HEIGHT
    };
  }

  var weight = countLayoutWeights(compProps);
  var showTitle = showTrackName || showArtistName;
  var hasSingleRow = showTitle !== showProgressBar || !showTitle && !showProgressBar && showTimeStamp;
  var nextWidth;

  if (weight === 2) {
    nextWidth = width > 130 ? width : 130;
  } else if (weight === 8) {
    nextWidth = width > 154 ? width : 154;
  } else {
    nextWidth = width <= 250 ? 250 : width;
  }

  var nextHeight;

  if (hasSingleRow && source !== _types__WEBPACK_IMPORTED_MODULE_1__[/* SOURCE */ "c"].WIX_MUSIC) {
    nextHeight = SMALL_HEIGHT;
  } else {
    nextHeight = DEFAULT_HEIGHT;

    if (hasSingleRow) {
      nextHeight = SMALL_HEIGHT;
    }

    var totalTracks = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(playlist, 'length');

    if (source === _types__WEBPACK_IMPORTED_MODULE_1__[/* SOURCE */ "c"].WIX_MUSIC && showPlaylist && totalTracks > 0) {
      nextHeight += findPlaylistMaxHeight({
        parentHeight: height,
        totalTracks: totalTracks,
        tracksSpacing: playlistTrackSpacing,
        tracksMayChange: prevHeight !== height,
        prevNumTracksToShow: tracksToShow,
        setNumTracks: setNumTracks
      });
      nextHeight += PLAYLIST_FILLERS_HEIGHT;
      nextHeight += PLAYLIST_FOOTER_HEIGHT;
    }
  }

  if (!showTitle && !showProgressBar && !showTimeStamp) {
    nextWidth = COVER_SIZE;
  } else if (width === COVER_SIZE) {
    nextWidth = DEFAULT_WIDTH;
  }

  findLayoutWidthAndHeight.prevHeight = nextHeight;
  return {
    width: nextWidth,
    height: nextHeight
  };
}

function findPlaylistMaxHeight(_ref) {
  var parentHeight = _ref.parentHeight,
      totalTracks = _ref.totalTracks,
      tracksSpacing = _ref.tracksSpacing,
      tracksMayChange = _ref.tracksMayChange,
      prevNumTracksToShow = _ref.prevNumTracksToShow,
      setNumTracks = _ref.setNumTracks;
  var numTracksToShow = prevNumTracksToShow || (totalTracks > 3 ? 3 : totalTracks);

  if (tracksMayChange && numTracksToShow >= 3) {
    var onlyPlaylistBlockHeight = parentHeight - DEFAULT_HEIGHT - PLAYLIST_FOOTER_HEIGHT - PLAYLIST_FILLERS_HEIGHT;
    var tracksThatFit = Math.round((onlyPlaylistBlockHeight + tracksSpacing) / (PLAYLIST_TRACK_ITEM_HEIGHT + tracksSpacing));
    numTracksToShow = tracksThatFit < 3 ? 3 : tracksThatFit > totalTracks ? totalTracks : tracksThatFit;
    prevNumTracksToShow !== numTracksToShow ? setNumTracks(numTracksToShow) : null;
  }

  var height = numTracksToShow * PLAYLIST_TRACK_ITEM_HEIGHT;

  if (tracksSpacing) {
    height += (numTracksToShow - 1) * tracksSpacing;
  }

  return height;
}



/***/ }),

/***/ 19:
/*!************************************************!*\
  !*** ./components/MusicPlayer/editor/types.js ***!
  \************************************************/
/*! exports provided: SOURCE, WIX_MUSIC_OPTIONS, DEFAULT_MUSIC_COVER, DEFAULT_WIX_MUSIC_COVER, WIX_MUSIC_DEMO_COVER, DEFAULT_PLAYLIST, staticMediaUrl, staticAudioPreviewUrl, staticShapesUrl */
/*! exports used: DEFAULT_PLAYLIST, DEFAULT_WIX_MUSIC_COVER, SOURCE, WIX_MUSIC_DEMO_COVER, WIX_MUSIC_OPTIONS, staticAudioPreviewUrl, staticMediaUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return WIX_MUSIC_OPTIONS; });
/* unused harmony export DEFAULT_MUSIC_COVER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEFAULT_WIX_MUSIC_COVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return WIX_MUSIC_DEMO_COVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_PLAYLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return staticMediaUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return staticAudioPreviewUrl; });
/* unused harmony export staticShapesUrl */
var SOURCE = {
  UPLOADS: 'uploads',
  URL: 'url',
  WIX_MUSIC: 'wixMusic'
};
var WIX_MUSIC_OPTIONS = {
  state: '',
  title: null,
  origin: 'gfpp',
  widgetless: true,
  shouldNotCloseOnBlur: true,
  isBareMode: true,
  leavePanelsOpen: true,
  options: {
    background: 'rgba(0,0,0,0)',
    overlay: 'rgba(0,0,0,0.5)',
    margin: true
  }
};
var DEFAULT_MUSIC_COVER = staticMediaUrl() + "/f9a47e_e7631916c7e4468091c47929b7acdf8a~mv2.png";
var DEFAULT_WIX_MUSIC_COVER = staticShapesUrl() + "/f9a47e_a45ee66e0d00442cbdbfcc323bb135d8.svg";
var WIX_MUSIC_DEMO_COVER = staticMediaUrl() + "/a6b72e_99cda2c157fe4c0a9ddb7484de2ab762~mv2_d_4000_4000_s_4_2.jpg";
var DEFAULT_PLAYLIST = [{
  albumName: 'Wix Demo Album',
  artistName: 'Wix',
  trackName: 'Good Vibes',
  url: 'https://static.wixstatic.com/preview/a6b72e_01aedb61a6c4429787697fe906f47222-128.mp3',
  cover: WIX_MUSIC_DEMO_COVER,
  durationFormatted: '02:50'
}, {
  albumName: 'Wix Demo Album',
  artistName: 'Wix',
  trackName: 'Into the Wild',
  url: 'https://static.wixstatic.com/preview/a6b72e_51313df4bfb24f9392b994a30ec17c6e-128.mp3',
  cover: WIX_MUSIC_DEMO_COVER,
  durationFormatted: '03:15'
}, {
  albumName: 'Wix Demo Album',
  artistName: 'Wix',
  trackName: 'Flying Low',
  url: 'https://static.wixstatic.com/preview/a6b72e_370a75a289bf4697a5a9f2daf2258b58-128.mp3',
  cover: WIX_MUSIC_DEMO_COVER,
  durationFormatted: '03:18'
}, {
  albumName: 'Wix Demo Album',
  artistName: 'Wix',
  trackName: 'Sixteen',
  url: 'https://static.wixstatic.com/preview/a6b72e_9553b5455a8d4778a91193d0dbb55109-128.mp3',
  cover: WIX_MUSIC_DEMO_COVER,
  durationFormatted: '02:43'
}];

function staticMediaUrl() {
  return typeof window !== 'undefined' && window.serviceTopology && window.serviceTopology.staticMediaUrl || 'https://static.wixstatic.com/media';
}

function staticAudioPreviewUrl() {
  var url = typeof window !== 'undefined' && window.serviceTopology && window.serviceTopology.mediaRootUrl || 'https://static.wixstatic.com/';
  return url + "preview";
} // Place where all vector images are stored


function staticShapesUrl() {
  var url = typeof window !== 'undefined' && window.serviceTopology && window.serviceTopology.mediaRootUrl || 'https://static.wixstatic.com/';
  return url + "shapes";
}



/***/ }),

/***/ 3:
/*!*************************************************************************************!*\
  !*** external {"amd":"lodash","commonjs":"lodash","commonjs2":"lodash","root":"_"} ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),

/***/ 630:
/*!***************************************************!*\
  !*** ./legacy/components/RichTextBox/metaData.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  disableable: true,
  isRepeatable: true,
  layoutLimits: {
    minHeight: 100,
    minWidth: 200
  }
});

/***/ }),

/***/ 631:
/*!****************************************************!*\
  !*** ./legacy/components/ToggleSwitch/metaData.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  resizableSides: [],
  layoutLimits: {
    minHeight: 24,
    maxHeight: 128,
    minWidth: 48,
    maxWidth: 256,
    aspectRatio: 2
  },
  disableable: true,
  isRepeatable: true
});

/***/ }),

/***/ 632:
/*!***************************************!*\
  !*** ./components/Slider/metaData.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  rotatable: false,
  isRepeatable: true,
  disableable: true
});

/***/ }),

/***/ 633:
/*!******************************************!*\
  !*** ./components/SearchBox/metaData.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 634:
/*!*****************************************!*\
  !*** ./components/BarChart/metaData.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  rotatable: false,
  isRepeatable: true,
  disableable: true
});

/***/ }),

/***/ 635:
/*!*******************************************!*\
  !*** ./components/TimePicker/metaData.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  rotatable: false,
  layoutLimits: {
    minHeight: 42,
    minWidth: 150
  },
  disableable: true,
  isRepeatable: true
});

/***/ }),

/***/ 636:
/*!*********************************************!*\
  !*** ./components/RatingsInput/metaData.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  defaultMobileProperties: {
    shapeSize: 25,
    shapeSpacing: 5
  },
  isRepeatable: true,
  disableable: true
});

/***/ }),

/***/ 637:
/*!***********************************************!*\
  !*** ./components/RatingsDisplay/metaData.js ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  defaultMobileProperties: {
    shapeSize: 20,
    shapeSpacing: 5
  },
  isRepeatable: true
});

/***/ }),

/***/ 638:
/*!****************************************!*\
  !*** ./components/Tags/ds/metaData.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  layoutLimits: {
    minWidth: 60
  }
});

/***/ }),

/***/ 639:
/*!********************************************!*\
  !*** ./components/VideoPlayer/metaData.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  rotatable: false,
  layoutLimits: {
    minHeight: 180,
    minWidth: 200
  },
  isRepeatable: true
});

/***/ }),

/***/ 640:
/*!***************************************************!*\
  !*** ./components/LineShareButton/ds/metaData.js ***!
  \***************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

var metaData = {
  rotatable: false,
  disableable: false,
  isRepeatable: true,
  resizableSides: []
};
module.exports = metaData;

/***/ }),

/***/ 641:
/*!****************************************!*\
  !*** ./components/Captcha/metaData.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  rotatable: false,
  isRepeatable: false,
  resizableSides: [],
  disableable: false,
  mobileConversionConfig: {
    fixedSize: {
      height: 57,
      width: 235
    }
  }
});

/***/ }),

/***/ 642:
/*!********************************************!*\
  !*** ./components/MusicPlayer/metaData.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _editor_layoutManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor/layoutManagement */ 175);


function layoutLimits(compDriver) {
  var compDriverProperties = compDriver.properties;
  var compDriverData = compDriver.data;

  if (!compDriverProperties || !compDriverData) {
    return null;
  }

  return Object(_editor_layoutManagement__WEBPACK_IMPORTED_MODULE_0__[/* findLayoutMinAndMax */ "a"])(compDriverData.get(), compDriverProperties.get());
}

function canBeStretched(_ref) {
  var properties = _ref.properties;
  return properties.get().layout === 'classic';
}

var rotatable = false;
var isRepeatable = true;
/* harmony default export */ __webpack_exports__["a"] = ({
  rotatable: rotatable,
  isRepeatable: isRepeatable,
  canBeStretched: canBeStretched,
  layoutLimits: layoutLimits
});

/***/ }),

/***/ 643:
/*!**************************************************!*\
  !*** ./components/StylableButton/ds/metaData.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  layoutLimits: {
    minHeight: 10,
    minWidth: 10
  },
  isRepeatable: true,
  a11yConfigurable: true,
  rotatable: true,
  disableable: true,
  styleCanBeApplied: true
});

/***/ }),

/***/ 644:
/*!************************************************!*\
  !*** ./components/StylableLine/ds/metaData.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  // styleCanBeApplied: true,
  rotatable: true
});

/***/ }),

/***/ 645:
/*!********************************************!*\
  !*** ./components/ProgressBar/metaData.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  rotatable: false,
  isRepeatable: true
});

/***/ }),

/***/ 646:
/*!*************************************************!*\
  !*** ./components/CustomElement/ds/metaData.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  isRepeatable: true
});

/***/ }),

/***/ 647:
/*!***********************************************!*\
  !*** ./components/SignatureInput/metaData.js ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  layoutLimits: {
    minHeight: 85,
    minWidth: 160
  },
  rotatable: false,
  isRepeatable: true,
  disableable: true
});

/***/ }),

/***/ 648:
/*!**************************************************!*\
  !*** ./components/SelectionTagsList/metaData.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  rotatable: false,
  isRepeatable: true,
  disableable: true,
  canBeStretched: true,
  layoutLimits: {
    minWidth: 50
  }
});

/***/ }),

/***/ 649:
/*!*******************************************************!*\
  !*** ./components/StylableHorizontalMenu/metaData.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// REPLACE-ME: replace with correct document-services metadata!
// Document services metadata defines valid behaviors for the component
// For all available options see https://github.com/wix-private/santa-core/blob/master/document-services-implementation/src/componentsMetaData/externalComponentsMetaDataMap.js
/* harmony default export */ __webpack_exports__["a"] = ({
  rotatable: false,
  disableable: false,
  canBeStretched: true,
  mobileConversionConfig: {
    desktopOnly: true
  }
});

/***/ }),

/***/ 650:
/*!***************************************!*\
  !*** ./components/ImageX/metaData.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// REPLACE-ME: replace with correct document-services metadata!
// Document services metadata defines valid behaviors for the component
// For all available options see https://github.com/wix-private/santa-core/blob/master/document-services-implementation/src/componentsMetaData/externalComponentsMetaDataMap.js
/* harmony default export */ __webpack_exports__["a"] = ({
  rotatable: false,
  isRepeatable: true,
  canBeStretched: true
});

/***/ }),

/***/ 651:
/*!**********************************************!*\
  !*** ./components/Pagination/ds/metaData.js ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var paginationMetaData = {
  disableable: true
};
/* harmony default export */ __webpack_exports__["a"] = (paginationMetaData);

/***/ }),

/***/ 652:
/*!*******************************************!*\
  !*** ./components/SocialAuth/metaData.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// REPLACE-ME: replace with correct document-services metadata!
// Document services metadata defines valid behaviors for the component
// For all available options see https://github.com/wix-private/santa-core/blob/master/document-services-implementation/src/componentsMetaData/externalComponentsMetaDataMap.js
/* harmony default export */ __webpack_exports__["a"] = ({
  rotatable: false,
  isRepeatable: false,
  disableable: false,
  canBeStretched: false,
  resizableSides: [],
  layoutLimits: {
    minHeight: 63,
    width: 300
  }
});

/***/ }),

/***/ 812:
/*!*********************************************!*\
  !*** ./components/AddressInput/metaData.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var metaData = {
  layoutLimits: {
    minHeight: 25,
    minWidth: 200
  },
  isRepeatable: true,
  disableable: true
};
module.exports = metaData;

/***/ })

/******/ });
});
//# sourceMappingURL=componentsMetaData.bundle.js.map