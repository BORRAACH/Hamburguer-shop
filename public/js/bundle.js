/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/bodyEvents.js":
/*!******************************!*\
  !*** ./src/js/bodyEvents.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventsBody": () => (/* binding */ eventsBody)
/* harmony export */ });
function eventsBody() {
  window.addEventListener("scroll", function (e) {
    var scrolled = window.scrollY;
  });
}


/***/ }),

/***/ "./src/js/mainComponents/adversting.js":
/*!*********************************************!*\
  !*** ./src/js/mainComponents/adversting.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadElement": () => (/* binding */ loadElement)
/* harmony export */ });
function loadElement() {}


/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globalNav": () => (/* binding */ globalNav)
/* harmony export */ });
function globalNav() {
  var nav = document.querySelector("#first-nav");
  var navA = document.querySelectorAll(".items-nav");
  var largura = "".concat(window.innerWidth - 100, "px");
  var body = document.querySelector("body");
  var produtos = document.querySelector(".produtos");
  var cardapio = document.querySelector("#cardapio");
  produtos.style.width = largura;
  cardapio.addEventListener("mouseover", function () {
    produtos.style.display = "block";
  });
  cardapio.addEventListener("mouseout", function () {
    produtos.style.display = "none";
  });

  // Adiciona os eventos de mouseover e mouseout no elemento "Produtos"
  produtos.addEventListener("mouseover", function () {
    produtos.style.display = "block";
  });
  produtos.addEventListener("mouseout", function () {
    produtos.style.display = "none";
  });
  console.log(largura);
}


/***/ }),

/***/ "./src/js/slideContainer.js":
/*!**********************************!*\
  !*** ./src/js/slideContainer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globalSlideCont": () => (/* binding */ globalSlideCont)
/* harmony export */ });
/* harmony import */ var _mainComponents_adversting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainComponents/adversting */ "./src/js/mainComponents/adversting.js");

function globalSlideCont() {
  var slideCont = document.querySelector("#slide-cont-1");
  var nav = document.querySelector("#first-nav");
  slideCont.style.marginTop = "".concat(nav.style.height, "px");
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(//db.onlinewebfonts.com/c/35b626a8e74729592e71dad8350302db?family=McDonalds);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(//db.onlinewebfonts.com/c/35b626a8e74729592e71dad8350302db?family=McDonalds);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  transition: 0.25s;\n  list-style-type: none;\n  text-decoration: none;\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\n\nbody {\n  width: 100%;\n}\nbody nav {\n  width: 92%;\n  height: 9vh;\n  background: #fff;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  z-index: 1010;\n  padding-left: 4vw;\n  padding-right: 4vw;\n}\nbody nav .left-box {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\nbody nav .left-box .items-nav {\n  height: 100%;\n  color: #242424;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  padding-left: 0.7rem;\n  padding-right: 0.7rem;\n}\nbody nav .right-box {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\nbody nav .right-box #compra {\n  padding: 1.3rem;\n  border-radius: 3px;\n  background: rgb(224, 93, 18);\n  color: #fff;\n}\nbody .container-1 {\n  width: 100vw;\n  height: 80vh;\n  z-index: 0;\n  background: rgba(0, 0, 0, 0.6352941176);\n  position: relative;\n  display: flex;\n  align-items: center;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\nbody .container-1 .produtos {\n  padding: 3vw 5vh;\n  top: 9vh;\n  margin: 0 auto;\n  background: #ffffff;\n  display: none;\n  position: fixed;\n  z-index: 800;\n  width: 100%;\n}\nbody .container-1 .produtos .line {\n  display: flex;\n  justify-content: space-between;\n}\nbody .container-1 .produtos .line i {\n  color: #000;\n  scale: 2.4;\n}\nbody .container-1 .produtos .line-2 {\n  margin-top: 6vh;\n}\nbody .container-1 .produtos .line-3 {\n  margin-top: 6vh;\n}\nbody .container-1 .produtos .line-4 {\n  margin-top: 6vh;\n}\nbody .container-1 .produtos .line-5 {\n  margin-top: 6vh;\n}\nbody .container-1 .slide-content {\n  width: 100%;\n  height: 80vh;\n  display: flex;\n  align-items: center;\n  background: #000;\n}\nbody .container-1 .slide-content .center-box {\n  border: solid 1px #fff;\n  width: 80%;\n  height: 30%;\n}\nbody .container-2 {\n  padding: 50px;\n}", "",{"version":3,"sources":["webpack://./src/sass/style.scss","webpack://./src/sass/_base.scss"],"names":[],"mappings":"AAGA;EACE,SAAA;EACA,UAAA;EAEA,iBAAA;EACA,qBAAA;EACA,qBAAA;EACA,oLCRa;ADOf;;AAIA;ECNE,WAAA;ADMF;AAGE;ECLA,UAAA;EACA,WAAA;EAEA,gBAAA;EACA,kCAAA;EACA,0BAAA;EAEA,aAAA;EACA,8BAAA;EACA,eAAA;EACA,aAAA;EAEA,iBAAA;EACA,kBAAA;ADEF;ACAE;EACE,aAAA;EACA,mBAAA;EAEA,WAAA;EACA,YAAA;ADCJ;ACCI;EACE,YAAA;EAEA,cAAA;EACA,iBAAA;EAEA,aAAA;EACA,mBAAA;EAEA,oBAAA;EACA,qBAAA;ADFN;ACME;EACE,YAAA;EAEA,aAAA;EACA,mBAAA;ADLJ;ACOI;EACE,eAAA;EACA,kBAAA;EAEA,4BAAA;EACA,WAAA;ADNN;AAjCE;EC6CA,YAAA;EACA,YAAA;EAEA,UAAA;EAEA,uCAAA;EAEA,kBAAA;EAEA,aAAA;EACA,mBAAA;EAEA,gBAAA;EACA,kBAAA;ADdF;ACgBE;EACE,gBAAA;EAEA,QAAA;EACA,cAAA;EAEA,mBAAA;EAEA,aAAA;EACA,eAAA;EACA,YAAA;EAEA,WAAA;ADlBJ;ACoBI;EACE,aAAA;EACA,8BAAA;ADlBN;ACoBM;EACE,WAAA;EACA,UAAA;ADlBR;ACwBM;EACE,eAAA;ADtBR;ACqBM;EACE,eAAA;ADnBR;ACkBM;EACE,eAAA;ADhBR;ACeM;EACE,eAAA;ADbR;ACkBE;EACE,WAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EAEA,gBAAA;ADlBJ;ACoBI;EACE,sBAAA;EAEA,UAAA;EACA,WAAA;ADnBN;AA/EE;ECwGA,aAAA;ADtBF","sourcesContent":["@import \"base\";\n@import \"mobile\";\n\n* {\n  margin: 0;\n  padding: 0;\n  //box-sizing: border-box;\n  transition: 0.25s;\n  list-style-type: none;\n  text-decoration: none;\n  font-family: $primary-font;\n}\n\nbody {\n  @include body;\n\n  nav {\n    @include nav;\n  }\n  .container-1 {\n    @include first-container;\n\n    .slide-content {\n    }\n  }\n\n  .container-2 {\n    @include second-container;\n  }\n}\n","@import url(//db.onlinewebfonts.com/c/35b626a8e74729592e71dad8350302db?family=McDonalds);\n\n$primary-font: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n  \"Helvetica\", \"Arial\", sans-serif;\n\n@mixin body() {\n  width: 100%;\n}\n\n@mixin nav {\n  width: 92%;\n  height: 9vh;\n\n  background: #fff;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  z-index: 1010;\n\n  padding-left: 4vw;\n  padding-right: 4vw;\n\n  .left-box {\n    display: flex;\n    align-items: center;\n\n    width: 100%;\n    height: 100%;\n\n    .items-nav {\n      height: 100%;\n\n      color: #242424;\n      font-size: 1.2rem;\n\n      display: flex;\n      align-items: center;\n\n      padding-left: 0.7rem;\n      padding-right: 0.7rem;\n    }\n  }\n\n  .right-box {\n    height: 100%;\n\n    display: flex;\n    align-items: center;\n\n    #compra {\n      padding: 1.3rem;\n      border-radius: 3px;\n\n      background: rgb(224, 93, 18);\n      color: #fff;\n    }\n  }\n}\n\n@mixin first-container {\n  width: 100vw;\n  height: 80vh;\n\n  z-index: 0;\n\n  background: #000000a2;\n\n  position: relative;\n\n  display: flex;\n  align-items: center;\n\n  overflow-x: auto;\n  overflow-y: hidden;\n\n  .produtos {\n    padding: 3vw 5vh;\n\n    top: 9vh;\n    margin: 0 auto;\n\n    background: #ffffff;\n\n    display: none;\n    position: fixed;\n    z-index: 800;\n\n    width: 100%;\n\n    .line {\n      display: flex;\n      justify-content: space-between;\n\n      i {\n        color: #000;\n        scale: 2.4;\n      }\n    }\n\n    $i: 0;\n    @for $i from 2 through 5 {\n      .line-#{$i} {\n        margin-top: 6vh;\n      }\n    }\n  }\n\n  .slide-content {\n    width: 100%;\n    height: 80vh;\n\n    display: flex;\n    align-items: center;\n\n    background: #000;\n\n    .center-box {\n      border: solid 1px #fff;\n\n      width: 80%;\n      height: 30%;\n    }\n  }\n}\n\n@mixin second-container {\n  padding: 50px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js":
/*!************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js ***!
  \************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join("\n");
  };
}();

/* istanbul ignore next  */
function apply(styleElement, index, remove, obj) {
  var css;
  if (remove) {
    css = "";
  } else {
    css = "";
    if (obj.supports) {
      css += "@supports (".concat(obj.supports, ") {");
    }
    if (obj.media) {
      css += "@media ".concat(obj.media, " {");
    }
    var needLayer = typeof obj.layer !== "undefined";
    if (needLayer) {
      css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
    }
    css += obj.css;
    if (needLayer) {
      css += "}";
    }
    if (obj.media) {
      css += "}";
    }
    if (obj.supports) {
      css += "}";
    }
  }

  // For old IE
  /* istanbul ignore if  */
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = styleElement.childNodes;
    if (childNodes[index]) {
      styleElement.removeChild(childNodes[index]);
    }
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index]);
    } else {
      styleElement.appendChild(cssNode);
    }
  }
}
var singletonData = {
  singleton: null,
  singletonCounter: 0
};

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") return {
    update: function update() {},
    remove: function remove() {}
  };

  // eslint-disable-next-line no-undef,no-use-before-define
  var styleIndex = singletonData.singletonCounter++;
  var styleElement =
  // eslint-disable-next-line no-undef,no-use-before-define
  singletonData.singleton || (
  // eslint-disable-next-line no-undef,no-use-before-define
  singletonData.singleton = options.insertStyleElement(options));
  return {
    update: function update(obj) {
      apply(styleElement, styleIndex, false, obj);
    },
    remove: function remove(obj) {
      apply(styleElement, styleIndex, true, obj);
    }
  };
}
module.exports = domAPI;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/js/nav.js");
/* harmony import */ var _slideContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideContainer */ "./src/js/slideContainer.js");
/* harmony import */ var _bodyEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bodyEvents */ "./src/js/bodyEvents.js");



(0,_nav__WEBPACK_IMPORTED_MODULE_0__.globalNav)();
(0,_slideContainer__WEBPACK_IMPORTED_MODULE_1__.globalSlideCont)();
(0,_bodyEvents__WEBPACK_IMPORTED_MODULE_2__.eventsBody)();
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js */ "./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

;
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_5__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map