/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
#projectContainer > * {
  font-family: "Press Start 2P", cursive;
}

#projectContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100dvh;
  background-color: black;
  position: relative;
}

#gitLink {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px;
  border: 2px solid aquamarine;
  color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

#subContainer {
  width: fit-content;
  height: fit-content;
  position: relative;
}

#muteButton {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: black;
  width: fit-content;
  height: fit-content;
  border-radius: 8px;
  border: 3px solid aquamarine;
  cursor: pointer;
  padding: 4px 8px;
}
#muteButton svg {
  width: 24px;
  height: 24px;
}

#helpBox {
  position: absolute;
  top: 60%;
  right: 0;
  transform: translateX(calc(100% + 10px));
  height: fit-content;
  width: 300px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 10px;
  border: 2px solid aquamarine;
  border-radius: 8px;
  font-size: 14px;
}
.helpRow {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.helpRow span:nth-child(2) {
  text-align: center;
}

#nextPiece {
  position: absolute;
  background-color: black;
  transform: translate(10px, 95px);
  border: 3px solid aquamarine;
  border-radius: 8px;
}

#cornerPause:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

#scoreBoard {
  border: 3px solid aquamarine;
  border-radius: 8px;
  position: absolute;
  left: 0;
  bottom: 50%;
  transform: translate(calc(-100% - 10px), 35%);
}

#gameOverContainer,
#startGameContainer,
#pauseGameContainer {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: white;
  background-color: black;
  border: 4px solid aquamarine;
  border-radius: 20px;
  font-size: 18px;
  padding: 20px;
  width: 81%;
}
#startGameContainer {
  background-color: rgba(127, 255, 212, 0.175);
}
#gameOverContainer {
  width: 99%;
}
#gameOverContainer span:nth-child(1) {
  align-self: center;
}

#playButton,
#playAgainButton,
#resumeButton,
#quitButton {
  color: white;
  background-color: black;
  border: 2px solid aquamarine;
  padding: 8px 20px;
  font-size: 16px;
  border-radius: 3px;
  font-family: "Press Start 2P", cursive;
}
#playAgainButton {
  align-self: center;
}
#playButton:hover,
#playAgainButton:hover,
#resumeButton:hover,
#quitButton:hover {
  cursor: pointer;
  background-color: aquamarine;
  color: black;
}

@media (max-width: 1015px) {
  #helpBox {
    position: absolute;
    height: 124px;
    top: 77%;
    right: 50%;
    transform: translateX(50%);
    border: none;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;EACE,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,cAAc;EACd,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,aAAa;EACb,4BAA4B;EAC5B,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,4BAA4B;EAC5B,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,QAAQ;EACR,wCAAwC;EACxC,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;EACT,aAAa;EACb,4BAA4B;EAC5B,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,gCAAgC;EAChC,4BAA4B;EAC5B,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,4BAA4B;EAC5B,kBAAkB;EAClB,kBAAkB;EAClB,OAAO;EACP,WAAW;EACX,6CAA6C;AAC/C;;AAEA;;;EAGE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,4BAA4B;EAC5B,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,UAAU;AACZ;AACA;EACE,4CAA4C;AAC9C;AACA;EACE,UAAU;AACZ;AACA;EACE,kBAAkB;AACpB;;AAEA;;;;EAIE,YAAY;EACZ,uBAAuB;EACvB,4BAA4B;EAC5B,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,sCAAsC;AACxC;AACA;EACE,kBAAkB;AACpB;AACA;;;;EAIE,eAAe;EACf,4BAA4B;EAC5B,YAAY;AACd;;AAEA;EACE;IACE,kBAAkB;IAClB,aAAa;IACb,QAAQ;IACR,UAAU;IACV,0BAA0B;IAC1B,YAAY;EACd;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap\");\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n#projectContainer > * {\n  font-family: \"Press Start 2P\", cursive;\n}\n\n#projectContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100dvh;\n  background-color: black;\n  position: relative;\n}\n\n#gitLink {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  padding: 10px;\n  border: 2px solid aquamarine;\n  color: aquamarine;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n#subContainer {\n  width: fit-content;\n  height: fit-content;\n  position: relative;\n}\n\n#muteButton {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background-color: black;\n  width: fit-content;\n  height: fit-content;\n  border-radius: 8px;\n  border: 3px solid aquamarine;\n  cursor: pointer;\n  padding: 4px 8px;\n}\n#muteButton svg {\n  width: 24px;\n  height: 24px;\n}\n\n#helpBox {\n  position: absolute;\n  top: 60%;\n  right: 0;\n  transform: translateX(calc(100% + 10px));\n  height: fit-content;\n  width: 300px;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 16px;\n  padding: 10px;\n  border: 2px solid aquamarine;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.helpRow {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n}\n.helpRow span:nth-child(2) {\n  text-align: center;\n}\n\n#nextPiece {\n  position: absolute;\n  background-color: black;\n  transform: translate(10px, 95px);\n  border: 3px solid aquamarine;\n  border-radius: 8px;\n}\n\n#cornerPause:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n#scoreBoard {\n  border: 3px solid aquamarine;\n  border-radius: 8px;\n  position: absolute;\n  left: 0;\n  bottom: 50%;\n  transform: translate(calc(-100% - 10px), 35%);\n}\n\n#gameOverContainer,\n#startGameContainer,\n#pauseGameContainer {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -40%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  color: white;\n  background-color: black;\n  border: 4px solid aquamarine;\n  border-radius: 20px;\n  font-size: 18px;\n  padding: 20px;\n  width: 81%;\n}\n#startGameContainer {\n  background-color: rgba(127, 255, 212, 0.175);\n}\n#gameOverContainer {\n  width: 99%;\n}\n#gameOverContainer span:nth-child(1) {\n  align-self: center;\n}\n\n#playButton,\n#playAgainButton,\n#resumeButton,\n#quitButton {\n  color: white;\n  background-color: black;\n  border: 2px solid aquamarine;\n  padding: 8px 20px;\n  font-size: 16px;\n  border-radius: 3px;\n  font-family: \"Press Start 2P\", cursive;\n}\n#playAgainButton {\n  align-self: center;\n}\n#playButton:hover,\n#playAgainButton:hover,\n#resumeButton:hover,\n#quitButton:hover {\n  cursor: pointer;\n  background-color: aquamarine;\n  color: black;\n}\n\n@media (max-width: 1015px) {\n  #helpBox {\n    position: absolute;\n    height: 124px;\n    top: 77%;\n    right: 50%;\n    transform: translateX(50%);\n    border: none;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./assets/18. Game Over.mp3":
/*!**********************************!*\
  !*** ./assets/18. Game Over.mp3 ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d735670017a3489d654560cd2d3e1f5e.mp3");

/***/ }),

/***/ "./assets/Tetris.mp3":
/*!***************************!*\
  !*** ./assets/Tetris.mp3 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "819f444fda995193e9bc97860ee43890.mp3");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
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
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameOverMusic: () => (/* binding */ gameOverMusic),
/* harmony export */   tetrisMusic: () => (/* binding */ tetrisMusic)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.js */ "./src/components.js");
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draw.js */ "./src/draw.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.js */ "./src/events.js");
/* harmony import */ var _tetris_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tetris.js */ "./src/tetris.js");
/* harmony import */ var _assets_Tetris_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/Tetris.mp3 */ "./assets/Tetris.mp3");
/* harmony import */ var _assets_18_Game_Over_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/18. Game Over.mp3 */ "./assets/18. Game Over.mp3");









//Music
const tetrisMusic = new Audio(_assets_Tetris_mp3__WEBPACK_IMPORTED_MODULE_5__["default"])
const gameOverMusic = new Audio(_assets_18_Game_Over_mp3__WEBPACK_IMPORTED_MODULE_6__["default"])
tetrisMusic.preload = "auto"
gameOverMusic.preload = "auto"

_tetris_js__WEBPACK_IMPORTED_MODULE_4__.Module.onRuntimeInitialized = async function () {
  let game = new _tetris_js__WEBPACK_IMPORTED_MODULE_4__.Module.Game()

  //Game tick start variable
  game.lastTick = Date.now()
  game.gameLoop = function () {
    let now = Date.now()
    let delta = now - this.lastTick

    if (delta >= this.getDropInterval() && !this.getGamePaused()) {
      this.update() // update game state (tetris.cpp)
      this.lastTick = now // update the last tick time
    }

    (0,_draw_js__WEBPACK_IMPORTED_MODULE_2__.draw)(this) // render game state

    if (!this.getGameOver()) {
      requestAnimationFrame(this.gameLoop.bind(this)) // repeat next frame
    } else {
      (0,_draw_js__WEBPACK_IMPORTED_MODULE_2__.saveHighScore)(this)
      tetrisMusic.pause()
      gameOverMusic.play()
      _components_js__WEBPACK_IMPORTED_MODULE_1__.components.displayGameOverPage(this)
    }
  }.bind(game) // bind the game instance to the function context:
  //bind allows the gameLoop function to be called from events.js by ensuring that "this"
  //always refers to the "game" obj

  ;(0,_events_js__WEBPACK_IMPORTED_MODULE_3__.initEvents)(game)
  ;(0,_draw_js__WEBPACK_IMPORTED_MODULE_2__.draw)(game) //Draw Board just as a background before game starts
  _components_js__WEBPACK_IMPORTED_MODULE_1__.components.displayStartComponents()
}


/***/ }),

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* binding */ components)
/* harmony export */ });
const components = (() => {
  function displayGameOverPage(game) {
    const gameOverContainer = document.createElement("div")
    const spanTitle = document.createElement("span")
    const spanScore = document.createElement("span")
    const spanHighScore = document.createElement("span")
    const playAgainButton = document.createElement("button")
    const quitButton = document.createElement("button")
    gameOverContainer.id = "gameOverContainer"
    playAgainButton.id = "playAgainButton"
    quitButton.id = "quitButton"
    spanTitle.textContent = "Game Over!"
    spanScore.textContent = `Score: ${game.getScore().toString()}`
    if (localStorage.getItem("highScore") !== null) {
      spanHighScore.textContent = `High Score: ${localStorage.getItem("highScore")}`
    } else {
      spanHighScore.textContent = `High Score: ${game.getScore().toString()}`
    }
    playAgainButton.textContent = "PLAY AGAIN"
    quitButton.textContent = "QUIT"
    gameOverContainer.appendChild(spanTitle)
    gameOverContainer.appendChild(spanScore)
    gameOverContainer.appendChild(spanHighScore)
    gameOverContainer.appendChild(playAgainButton)
    gameOverContainer.appendChild(quitButton)
    subContainer.appendChild(gameOverContainer)
  }

  function displayStartPage() {
    const startGameContainer = document.createElement("div")
    const spanTitle = document.createElement("span")
    const playButton = document.createElement("button")
    playButton.id = "playButton"
    startGameContainer.id = "startGameContainer"
    spanTitle.textContent = "TETRIS"
    playButton.textContent = "PLAY"
    startGameContainer.appendChild(spanTitle)
    startGameContainer.appendChild(playButton)
    subContainer.appendChild(startGameContainer)
  }

  function displayPausePage() {
    const pauseGameContainer = document.createElement("div")
    const spanTitle = document.createElement("span")
    const resumeButton = document.createElement("resumeButton")
    pauseGameContainer.id = "pauseGameContainer"
    resumeButton.id = "resumeButton"
    spanTitle.textContent = "PAUSED"
    resumeButton.textContent = "resume"
    pauseGameContainer.appendChild(spanTitle)
    pauseGameContainer.appendChild(resumeButton)
    subContainer.appendChild(pauseGameContainer)
  }

  function displayHelpBox() {
    const helpBox = document.createElement("div")
    helpBox.id = "helpBox"

    let contentArr = ["Move:", "Rotate:", "Quick Drop:", "Pause/Play:"]
    let keys = ["Arrows", "'z'", "'Space'", "'Esc'"]

    for (let i = 0; i < contentArr.length; i++) {
      const innerContainer = document.createElement("div")
      const span = document.createElement("span")
      const span2 = document.createElement("span")
      innerContainer.classList.add("helpRow")
      span.textContent = contentArr[i]
      span2.textContent = keys[i]
      innerContainer.appendChild(span)
      innerContainer.appendChild(span2)
      helpBox.appendChild(innerContainer)
    }
    document.getElementById("subContainer").appendChild(helpBox)
  }

  function toggleMuteButton() {
    const tetrisMusic = document.getElementById("startMusic")
    const soundOn = `<svg class="muteClickable" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path class="muteClickable" fill="aquamarine" d="M7.563 2.069A.75.75 0 0 1 8 2.75v10.5a.751.751 0 0 1-1.238.57L3.472 11H1.75A1.75 1.75 0 0 1 0 9.25v-2.5C0 5.784.784 5 1.75 5h1.723l3.289-2.82a.75.75 0 0 1 .801-.111ZM6.5 4.38L4.238 6.319a.748.748 0 0 1-.488.181h-2a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2c.179 0 .352.064.488.18L6.5 11.62Zm6.096-2.038a.75.75 0 0 1 1.06 0a8 8 0 0 1 0 11.314a.751.751 0 0 1-1.042-.018a.751.751 0 0 1-.018-1.042a6.5 6.5 0 0 0 0-9.193a.75.75 0 0 1 0-1.06Zm-1.06 2.121l-.001.001a5 5 0 0 1 0 7.07a.749.749 0 0 1-1.275-.326a.749.749 0 0 1 .215-.734a3.5 3.5 0 0 0 0-4.95a.75.75 0 1 1 1.061-1.061Z"/></svg>`
    const soundOff = `<svg class="muteClickable" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="muteClickable" fill="aquamarine" d="M12.43 4.1a1 1 0 0 0-1 .12L6.65 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.73 3.78A1 1 0 0 0 12 20a.91.91 0 0 0 .43-.1A1 1 0 0 0 13 19V5a1 1 0 0 0-.57-.9ZM11 16.92l-3.38-2.7A1 1 0 0 0 7 14H4v-4h3a1 1 0 0 0 .62-.22L11 7.08ZM19.91 12l1.8-1.79a1 1 0 0 0-1.42-1.42l-1.79 1.8l-1.79-1.8a1 1 0 0 0-1.42 1.42l1.8 1.79l-1.8 1.79a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l1.79-1.8l1.79 1.8a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"/></svg>`
    const muteButton = document.getElementById("muteButton")
    muteButton.classList.toggle("on")
    if (muteButton.classList.contains("on")) {
      muteButton.innerHTML = soundOn
      tetrisMusic.muted = false
    } else {
      muteButton.innerHTML = soundOff
      tetrisMusic.muted = true
    }
  }

  //COMPONENTS BELOW:
  function displayStartComponents() {
    displayStartPage()
    displayHelpBox()
  }

  return {
    displayGameOverPage,
    displayPausePage,
    displayStartPage,
    displayHelpBox,
    toggleMuteButton,
    displayStartComponents,
  }
})()


/***/ }),

/***/ "./src/draw.js":
/*!*********************!*\
  !*** ./src/draw.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   draw: () => (/* binding */ draw),
/* harmony export */   saveHighScore: () => (/* binding */ saveHighScore)
/* harmony export */ });
const canvas = document.getElementById("game-canvas")
const nextPieceCanvas = document.getElementById("nextPiece")
const scoreBoard = document.getElementById("scoreBoard")
//Canvas contexts
var c = canvas.getContext("2d")
var cn = nextPieceCanvas.getContext("2d")
var cs = scoreBoard.getContext("2d")

let blockSize = 30 //px
const nFieldWidth = 12
const nFieldHeight = 23
const offsetX = 2
const offsetY = 2
//colors
const tetrominoColors = ["#fbbf24", "#22c55e", "#0ea5e9", "#67e8f9", "#e11d48", "#d946ef", "#f8fafc"]

canvas.width = blockSize * nFieldWidth + offsetX * 2
canvas.height = blockSize * nFieldHeight + offsetY * 2
nextPieceCanvas.width = blockSize * 4
nextPieceCanvas.height = blockSize * 4
scoreBoard.width = blockSize * 5
scoreBoard.height = blockSize * 8

let HIGH_SCORE = localStorage.getItem("highScore")
if (HIGH_SCORE === null) HIGH_SCORE = "0"

const Cell = {
  EMPTY: 10,
  BORDER: 9,
  TETROMINO: 8,
}

function draw(game) {
  refreshPage()

  //Get game variables
  let nCurrentX = game.getCurrentX()
  let nCurrentY = game.getCurrentY()
  let nShadowY = game.changeShadowY()
  let nCurrentPiece = game.getCurrentPiece()
  let nNextPiece = game.getNextPiece()
  let nCurrentRotation = game.getCurrentRotation()
  let tetromino = game.getTetromino(nCurrentPiece)
  let nextTetromino = game.getTetromino(nNextPiece)

  drawGameField(game)

  //Draw Tetromino, shadow, next tetromino
  for (let px = 0; px < 4; px++)
    for (let py = 0; py < 4; py++) {
      let rotatedIndex = game.Rotate(px, py, nCurrentRotation)
      if (tetromino.get(rotatedIndex) === 1) {
        drawTetromino(px, py, nCurrentX, nCurrentY, nCurrentPiece)
        drawTetrominoShadow(game, px, py, nCurrentX, nShadowY, tetromino, nCurrentPiece, nCurrentRotation)
      }
      drawNextPiece(px, py, nNextPiece, nextTetromino)
    }
  drawScoreBoard(game)
  drawGameFieldBorders()
}

//Util functions
const refreshPage = () => {
  c.clearRect(0, 0, canvas.width, canvas.height)
  cn.clearRect(0, 0, nextPieceCanvas.width, nextPieceCanvas.height)
  cs.clearRect(0, 0, scoreBoard.width, scoreBoard.height)
}
function drawLine(sx, sy, ex, ey) {
  c.beginPath()
  c.moveTo(sx, sy)
  c.lineTo(ex, ey)
  c.stroke()
}

//Draw functions
const drawGameField = game => {
  let gameBoard = game.getGameBoard()
  //Draw Field
  for (let x = 0; x < nFieldWidth; x++) {
    for (let y = 0; y < nFieldHeight; y++) {
      const index = y * nFieldWidth + x
      const value = gameBoard.get(index)

      if (value === Cell.EMPTY) {
        //Empty space
        c.fillStyle = "black"
      } else if (value === Cell.BORDER) {
        //Border cells
        c.strokeStyle = "black"
        c.fillStyle = "black"
        c.fillRect(x * blockSize + offsetX, y * blockSize + offsetY, blockSize, blockSize)
      } else {
        //Dropped tetrominos
        game.getGameOver() ? (c.strokeStyle = "aquamarine") : (c.strokeStyle = "white")
        c.lineWidth = 2
        c.strokeRect(x * blockSize + offsetX, y * blockSize + offsetY, blockSize, blockSize)
      }

      // Draw diagonals
      if (value !== Cell.EMPTY && value !== Cell.BORDER) {
        //Placed tetrominos
        c.lineWidth = 1
        //c.shadowBlur = 10
        //c.shadowColor = "aquamarine"
        drawLine(
          x * blockSize + offsetX,
          y * blockSize + offsetY,
          (x + 1) * blockSize + offsetX,
          (y + 1) * blockSize + offsetY
        )
        drawLine(
          x * blockSize + blockSize + offsetX,
          y * blockSize + offsetY,
          x * blockSize + offsetX,
          y * blockSize + blockSize + offsetY
        )
      }

      //kill shadows
      c.shadowBlur = 0
      c.shadowColor = "black"
    }
  }
}

const drawTetromino = (px, py, nCurrentX, nCurrentY, nCurrentPiece) => {
  // Set glow effect
  c.shadowBlur = 12
  c.shadowColor = tetrominoColors[nCurrentPiece]
  // Draw border
  c.strokeStyle = tetrominoColors[nCurrentPiece]
  c.lineWidth = 3
  c.strokeRect((nCurrentX + px) * blockSize + offsetX, (nCurrentY + py) * blockSize + offsetY, blockSize, blockSize)
  c.shadowBlur = 0
  c.shadowColor = "black"
}

const drawTetrominoShadow = (game, px, py, nCurrentX, nShadowY, tetromino, nCurrentPiece, nCurrentRotation) => {
  const EMPTY_SPACE = 0
  c.strokeStyle = tetrominoColors[nCurrentPiece]
  if (!game.getGamePaused() && !game.getGameOver()) {
    // Check neighboring cells
    const top = py > 0 ? tetromino.get(game.Rotate(px, py - 1, nCurrentRotation)) : EMPTY_SPACE
    const right = px < 3 ? tetromino.get(game.Rotate(px + 1, py, nCurrentRotation)) : EMPTY_SPACE
    const bottom = py < 3 ? tetromino.get(game.Rotate(px, py + 1, nCurrentRotation)) : EMPTY_SPACE
    const left = px > 0 ? tetromino.get(game.Rotate(px - 1, py, nCurrentRotation)) : EMPTY_SPACE

    // Draw top line
    if (top === EMPTY_SPACE) {
      drawLine(
        (nCurrentX + px) * blockSize + offsetX,
        (nShadowY + py) * blockSize + offsetY,
        (nCurrentX + px + 1) * blockSize + offsetX,
        (nShadowY + py) * blockSize + offsetY
      )
    }
    // Draw right line
    if (right === EMPTY_SPACE) {
      drawLine(
        (nCurrentX + px + 1) * blockSize + offsetX,
        (nShadowY + py) * blockSize + offsetY,
        (nCurrentX + px + 1) * blockSize + offsetX,
        (nShadowY + py + 1) * blockSize + offsetY
      )
    }
    // Draw bottom line
    if (bottom === EMPTY_SPACE) {
      drawLine(
        (nCurrentX + px + 1) * blockSize + offsetX,
        (nShadowY + py + 1) * blockSize + offsetY,
        (nCurrentX + px) * blockSize + offsetX,
        (nShadowY + py + 1) * blockSize + offsetY
      )
    }
    // Draw left line
    if (left === EMPTY_SPACE) {
      drawLine(
        (nCurrentX + px) * blockSize + offsetX,
        (nShadowY + py + 1) * blockSize + offsetY,
        (nCurrentX + px) * blockSize + offsetX,
        (nShadowY + py) * blockSize + offsetY
      )
    }
  }
}

const drawNextPiece = (px, py, nNextPiece, nextTetromino) => {
  //Define offset for next tetromino display in order to center it inside the canvas
  let nextOffsetX = 0
  let nextOffsetY = 0
  if (nNextPiece === 0) {
    nextOffsetX = 0
    nextOffsetY = 12
  } else if (nNextPiece === 1) {
    nextOffsetX = 25
    nextOffsetY = 10
  } else if (nNextPiece === 2) {
    nextOffsetX = 12
    nextOffsetY = 13
  } else if (nNextPiece === 3) {
    nextOffsetX = 10
    nextOffsetY = 23
  } else if (nNextPiece === 4) {
    nextOffsetX = 14
    nextOffsetY = 23
  } else if (nNextPiece === 5 || nNextPiece === 6) {
    nextOffsetX = 10
    nextOffsetY = 25
  }

  //Draw Next Piece in seperate canvas (cn)
  if (nextTetromino.get(py * 4 + px) == 1) {
    cn.shadowBlur = 12
    cn.shadowColor = tetrominoColors[nNextPiece]
    cn.strokeStyle = tetrominoColors[nNextPiece]
    cn.lineWidth = 2
    //change offsets based on piece
    cn.strokeRect(
      px * (blockSize / 1.25) + nextOffsetX,
      py * (blockSize / 1.25) + nextOffsetY,
      blockSize / 1.25,
      blockSize / 1.25
    )
  }
  cn.shadowBlur = 0
  cn.shadowColor = "black"
}

const drawScoreBoard = game => {
  //Draw scoreBoard in seperate canvas (cs)
  cs.font = '22px "Press Start 2P"'
  cs.fillStyle = "aquamarine"
  cs.fillText(`TOP`, 16, scoreBoard.height / 2 - 40)
  cs.fillText(`${HIGH_SCORE}`, 16, scoreBoard.height / 2 - 14)
  cs.fillText(`SCORE`, 16, scoreBoard.height / 2 + 20)
  cs.fillText(`${game.getScore()}`, 16, scoreBoard.height / 2 + 46)
}

const drawGameFieldBorders = () => {
  c.strokeStyle = "aquamarine"
  const lines = [
    // Top border
    [offsetX, offsetY, offsetX, nFieldHeight * blockSize + offsetY],

    // Top inner border
    [offsetX + blockSize, offsetY, offsetX + blockSize, nFieldHeight * blockSize + offsetY - blockSize],

    // Right border
    [nFieldWidth * blockSize + offsetX, offsetY, nFieldWidth * blockSize + offsetX, nFieldHeight * blockSize + offsetY],

    // Right inner border
    [
      nFieldWidth * blockSize + offsetX - blockSize,
      offsetY,
      nFieldWidth * blockSize + offsetX - blockSize,
      nFieldHeight * blockSize + offsetY - blockSize,
    ],

    // Bottom border
    [
      offsetX,
      nFieldHeight * blockSize + offsetY,
      nFieldWidth * blockSize + offsetX,
      nFieldHeight * blockSize + offsetY,
    ],

    // Bottom inner border
    [
      offsetX + blockSize,
      nFieldHeight * blockSize + offsetY - blockSize,
      nFieldWidth * blockSize + offsetX - blockSize,
      nFieldHeight * blockSize + offsetY - blockSize,
    ],
  ]
  lines.forEach(args => drawLine(...args))
}

//LOCAL STORAGE STUFF:
function saveHighScore(game) {
  if (game.getScore() > HIGH_SCORE) {
    HIGH_SCORE = game.getScore()
    localStorage.setItem("highScore", HIGH_SCORE)
  }
}


/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initEvents: () => (/* binding */ initEvents)
/* harmony export */ });
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ "./src/components.js");
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw.js */ "./src/draw.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ "./src/app.js");



//IMPORT MUSIC HERE


const initEvents = game => {
  //Main containers
  const projectContainer = document.getElementById("projectContainer")

  document.addEventListener("keypress", function (event) {
    if (event.code === "KeyZ") {
      game.rotateTetromino(-1)
    }
  })

  //Left, right and down
  document.addEventListener("keydown", function (event) {
    switch (event.code) {
      case "ArrowLeft":
        game.moveTetromino(0)
        break

      case "ArrowRight":
        game.moveTetromino(1)
        break

      case "ArrowDown":
        game.moveTetromino(2)
        break

      case "Space":
        game.moveTetromino(3)
        break
      case "Escape":
        if (document.getElementById("startGameContainer") || document.getElementById("gameOverContainer")) return
        if (!document.getElementById("pauseGameContainer")) {
          game.pauseGame()
          _app_js__WEBPACK_IMPORTED_MODULE_2__.tetrisMusic.pause()
          _components_js__WEBPACK_IMPORTED_MODULE_0__.components.displayPausePage()
        } else if (document.getElementById("pauseGameContainer")) {
          game.resumeGame()
          _app_js__WEBPACK_IMPORTED_MODULE_2__.tetrisMusic.play()
          document.getElementById("pauseGameContainer").remove()
        }
        break
    }
  })

  projectContainer.addEventListener("click", e => {
    if (e.target.id == "playButton") {
      game.resumeGame() //Stop user input until game starts
      game.gameLoop()
      document.getElementById("startGameContainer").remove()
      document.getElementById("helpBox").remove()
      //Play game audio:
      _app_js__WEBPACK_IMPORTED_MODULE_2__.tetrisMusic.oncanplaythrough = function () {
        _app_js__WEBPACK_IMPORTED_MODULE_2__.tetrisMusic.play().catch(function (error) {
          console.error("Failed to play audio:", error)
        })
      }
      _app_js__WEBPACK_IMPORTED_MODULE_2__.tetrisMusic.currentTime = 0
    }
    if (e.target.id == "playAgainButton") {
      game.restartGame()
      document.getElementById("gameOverContainer").remove()
      _app_js__WEBPACK_IMPORTED_MODULE_2__.tetrisMusic.currentTime = 0
      _app_js__WEBPACK_IMPORTED_MODULE_2__.tetrisMusic.play()
      game.gameLoop()
    }
    if (e.target.id === "quitButton") {
      document.getElementById("gameOverContainer").remove()
      _components_js__WEBPACK_IMPORTED_MODULE_0__.components.displayStartPage()
      _components_js__WEBPACK_IMPORTED_MODULE_0__.components.displayHelpBox()
      game.restartGame()
      game.pauseGame()
      ;(0,_draw_js__WEBPACK_IMPORTED_MODULE_1__.draw)(game)
    }
    if (e.target.id == "resumeButton") {
      game.resumeGame()
      document.getElementById("pauseGameContainer").remove()
      _app_js__WEBPACK_IMPORTED_MODULE_2__.tetrisMusic.play()
    }
  })

  const muteButton = document.getElementById("muteButton")
  muteButton.addEventListener("click", e => {
    if (e.target.id === "muteButton" || e.target.classList.contains("muteClickable")) {
      _components_js__WEBPACK_IMPORTED_MODULE_0__.components.toggleMuteButton()
      muteButton.blur()
    }
  })
}


/***/ }),

/***/ "./src/tetris.js":
/*!***********************!*\
  !*** ./src/tetris.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Module: () => (/* binding */ Module)
/* harmony export */ });
var Module=typeof Module!="undefined"?Module:{};var moduleOverrides=Object.assign({},Module);var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var ENVIRONMENT_IS_WEB=true;var ENVIRONMENT_IS_WORKER=false;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=(url,onload,onerror)=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=()=>{if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=title=>document.title=title}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.error.bind(console);Object.assign(Module,moduleOverrides);moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime=Module["noExitRuntime"]||true;if(typeof WebAssembly!="object"){abort("no native wasm support detected")}var wasmMemory;var ABORT=false;var EXITSTATUS;function assert(condition,text){if(!condition){abort(text)}}var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateMemoryViews(){var b=wasmMemory.buffer;Module["HEAP8"]=HEAP8=new Int8Array(b);Module["HEAP16"]=HEAP16=new Int16Array(b);Module["HEAP32"]=HEAP32=new Int32Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);Module["HEAPU16"]=HEAPU16=new Uint16Array(b);Module["HEAPU32"]=HEAPU32=new Uint32Array(b);Module["HEAPF32"]=HEAPF32=new Float32Array(b);Module["HEAPF64"]=HEAPF64=new Float64Array(b)}var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}what="Aborted("+what+")";err(what);ABORT=true;EXITSTATUS=1;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);throw e}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}var wasmBinaryFile;wasmBinaryFile="tetris.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}catch(err){abort(err)}}function getBinaryPromise(binaryFile){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch=="function"){return fetch(binaryFile,{credentials:"same-origin"}).then(response=>{if(!response["ok"]){throw"failed to load wasm binary file at '"+binaryFile+"'"}return response["arrayBuffer"]()}).catch(()=>getBinary(binaryFile))}}return Promise.resolve().then(()=>getBinary(binaryFile))}function instantiateArrayBuffer(binaryFile,imports,receiver){return getBinaryPromise(binaryFile).then(binary=>{return WebAssembly.instantiate(binary,imports)}).then(instance=>{return instance}).then(receiver,reason=>{err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(binary,binaryFile,imports,callback){if(!binary&&typeof WebAssembly.instantiateStreaming=="function"&&!isDataURI(binaryFile)&&typeof fetch=="function"){return fetch(binaryFile,{credentials:"same-origin"}).then(response=>{var result=WebAssembly.instantiateStreaming(response,imports);return result.then(callback,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(binaryFile,imports,callback)})})}else{return instantiateArrayBuffer(binaryFile,imports,callback)}}function createWasm(){var info={"a":wasmImports};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;wasmMemory=Module["asm"]["u"];updateMemoryViews();wasmTable=Module["asm"]["w"];addOnInit(Module["asm"]["v"]);removeRunDependency("wasm-instantiate");return exports}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){receiveInstance(result["instance"])}if(Module["instantiateWasm"]){try{return Module["instantiateWasm"](info,receiveInstance)}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}instantiateAsync(wasmBinary,wasmBinaryFile,info,receiveInstantiationResult);return{}}function callRuntimeCallbacks(callbacks){while(callbacks.length>0){callbacks.shift()(Module)}}function ExceptionInfo(excPtr){this.excPtr=excPtr;this.ptr=excPtr-24;this.set_type=function(type){HEAPU32[this.ptr+4>>2]=type};this.get_type=function(){return HEAPU32[this.ptr+4>>2]};this.set_destructor=function(destructor){HEAPU32[this.ptr+8>>2]=destructor};this.get_destructor=function(){return HEAPU32[this.ptr+8>>2]};this.set_caught=function(caught){caught=caught?1:0;HEAP8[this.ptr+12>>0]=caught};this.get_caught=function(){return HEAP8[this.ptr+12>>0]!=0};this.set_rethrown=function(rethrown){rethrown=rethrown?1:0;HEAP8[this.ptr+13>>0]=rethrown};this.get_rethrown=function(){return HEAP8[this.ptr+13>>0]!=0};this.init=function(type,destructor){this.set_adjusted_ptr(0);this.set_type(type);this.set_destructor(destructor)};this.set_adjusted_ptr=function(adjustedPtr){HEAPU32[this.ptr+16>>2]=adjustedPtr};this.get_adjusted_ptr=function(){return HEAPU32[this.ptr+16>>2]};this.get_exception_ptr=function(){var isPointer=___cxa_is_pointer_type(this.get_type());if(isPointer){return HEAPU32[this.excPtr>>2]}var adjusted=this.get_adjusted_ptr();if(adjusted!==0)return adjusted;return this.excPtr}}var exceptionLast=0;var uncaughtExceptionCount=0;function ___cxa_throw(ptr,type,destructor){var info=new ExceptionInfo(ptr);info.init(type,destructor);exceptionLast=ptr;uncaughtExceptionCount++;throw exceptionLast}function __embind_register_bigint(primitiveType,name,size,minRange,maxRange){}function getShiftFromSize(size){switch(size){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError(`Unknown type size: ${size}`)}}function embind_init_charCodes(){var codes=new Array(256);for(var i=0;i<256;++i){codes[i]=String.fromCharCode(i)}embind_charCodes=codes}var embind_charCodes=undefined;function readLatin1String(ptr){var ret="";var c=ptr;while(HEAPU8[c]){ret+=embind_charCodes[HEAPU8[c++]]}return ret}var awaitingDependencies={};var registeredTypes={};var typeDependencies={};var char_0=48;var char_9=57;function makeLegalFunctionName(name){if(undefined===name){return"_unknown"}name=name.replace(/[^a-zA-Z0-9_]/g,"$");var f=name.charCodeAt(0);if(f>=char_0&&f<=char_9){return`_${name}`}return name}function createNamedFunction(name,body){name=makeLegalFunctionName(name);return{[name]:function(){return body.apply(this,arguments)}}[name]}function extendError(baseErrorType,errorName){var errorClass=createNamedFunction(errorName,function(message){this.name=errorName;this.message=message;var stack=new Error(message).stack;if(stack!==undefined){this.stack=this.toString()+"\n"+stack.replace(/^Error(:[^\n]*)?\n/,"")}});errorClass.prototype=Object.create(baseErrorType.prototype);errorClass.prototype.constructor=errorClass;errorClass.prototype.toString=function(){if(this.message===undefined){return this.name}else{return`${this.name}: ${this.message}`}};return errorClass}var BindingError=undefined;function throwBindingError(message){throw new BindingError(message)}var InternalError=undefined;function throwInternalError(message){throw new InternalError(message)}function whenDependentTypesAreResolved(myTypes,dependentTypes,getTypeConverters){myTypes.forEach(function(type){typeDependencies[type]=dependentTypes});function onComplete(typeConverters){var myTypeConverters=getTypeConverters(typeConverters);if(myTypeConverters.length!==myTypes.length){throwInternalError("Mismatched type converter count")}for(var i=0;i<myTypes.length;++i){registerType(myTypes[i],myTypeConverters[i])}}var typeConverters=new Array(dependentTypes.length);var unregisteredTypes=[];var registered=0;dependentTypes.forEach((dt,i)=>{if(registeredTypes.hasOwnProperty(dt)){typeConverters[i]=registeredTypes[dt]}else{unregisteredTypes.push(dt);if(!awaitingDependencies.hasOwnProperty(dt)){awaitingDependencies[dt]=[]}awaitingDependencies[dt].push(()=>{typeConverters[i]=registeredTypes[dt];++registered;if(registered===unregisteredTypes.length){onComplete(typeConverters)}})}});if(0===unregisteredTypes.length){onComplete(typeConverters)}}function registerType(rawType,registeredInstance,options={}){if(!("argPackAdvance"in registeredInstance)){throw new TypeError("registerType registeredInstance requires argPackAdvance")}var name=registeredInstance.name;if(!rawType){throwBindingError(`type "${name}" must have a positive integer typeid pointer`)}if(registeredTypes.hasOwnProperty(rawType)){if(options.ignoreDuplicateRegistrations){return}else{throwBindingError(`Cannot register type '${name}' twice`)}}registeredTypes[rawType]=registeredInstance;delete typeDependencies[rawType];if(awaitingDependencies.hasOwnProperty(rawType)){var callbacks=awaitingDependencies[rawType];delete awaitingDependencies[rawType];callbacks.forEach(cb=>cb())}}function __embind_register_bool(rawType,name,size,trueValue,falseValue){var shift=getShiftFromSize(size);name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":function(wt){return!!wt},"toWireType":function(destructors,o){return o?trueValue:falseValue},"argPackAdvance":8,"readValueFromPointer":function(pointer){var heap;if(size===1){heap=HEAP8}else if(size===2){heap=HEAP16}else if(size===4){heap=HEAP32}else{throw new TypeError("Unknown boolean type size: "+name)}return this["fromWireType"](heap[pointer>>shift])},destructorFunction:null})}function ClassHandle_isAliasOf(other){if(!(this instanceof ClassHandle)){return false}if(!(other instanceof ClassHandle)){return false}var leftClass=this.$$.ptrType.registeredClass;var left=this.$$.ptr;var rightClass=other.$$.ptrType.registeredClass;var right=other.$$.ptr;while(leftClass.baseClass){left=leftClass.upcast(left);leftClass=leftClass.baseClass}while(rightClass.baseClass){right=rightClass.upcast(right);rightClass=rightClass.baseClass}return leftClass===rightClass&&left===right}function shallowCopyInternalPointer(o){return{count:o.count,deleteScheduled:o.deleteScheduled,preservePointerOnDelete:o.preservePointerOnDelete,ptr:o.ptr,ptrType:o.ptrType,smartPtr:o.smartPtr,smartPtrType:o.smartPtrType}}function throwInstanceAlreadyDeleted(obj){function getInstanceTypeName(handle){return handle.$$.ptrType.registeredClass.name}throwBindingError(getInstanceTypeName(obj)+" instance already deleted")}var finalizationRegistry=false;function detachFinalizer(handle){}function runDestructor($$){if($$.smartPtr){$$.smartPtrType.rawDestructor($$.smartPtr)}else{$$.ptrType.registeredClass.rawDestructor($$.ptr)}}function releaseClassHandle($$){$$.count.value-=1;var toDelete=0===$$.count.value;if(toDelete){runDestructor($$)}}function downcastPointer(ptr,ptrClass,desiredClass){if(ptrClass===desiredClass){return ptr}if(undefined===desiredClass.baseClass){return null}var rv=downcastPointer(ptr,ptrClass,desiredClass.baseClass);if(rv===null){return null}return desiredClass.downcast(rv)}var registeredPointers={};function getInheritedInstanceCount(){return Object.keys(registeredInstances).length}function getLiveInheritedInstances(){var rv=[];for(var k in registeredInstances){if(registeredInstances.hasOwnProperty(k)){rv.push(registeredInstances[k])}}return rv}var deletionQueue=[];function flushPendingDeletes(){while(deletionQueue.length){var obj=deletionQueue.pop();obj.$$.deleteScheduled=false;obj["delete"]()}}var delayFunction=undefined;function setDelayFunction(fn){delayFunction=fn;if(deletionQueue.length&&delayFunction){delayFunction(flushPendingDeletes)}}function init_embind(){Module["getInheritedInstanceCount"]=getInheritedInstanceCount;Module["getLiveInheritedInstances"]=getLiveInheritedInstances;Module["flushPendingDeletes"]=flushPendingDeletes;Module["setDelayFunction"]=setDelayFunction}var registeredInstances={};function getBasestPointer(class_,ptr){if(ptr===undefined){throwBindingError("ptr should not be undefined")}while(class_.baseClass){ptr=class_.upcast(ptr);class_=class_.baseClass}return ptr}function getInheritedInstance(class_,ptr){ptr=getBasestPointer(class_,ptr);return registeredInstances[ptr]}function makeClassHandle(prototype,record){if(!record.ptrType||!record.ptr){throwInternalError("makeClassHandle requires ptr and ptrType")}var hasSmartPtrType=!!record.smartPtrType;var hasSmartPtr=!!record.smartPtr;if(hasSmartPtrType!==hasSmartPtr){throwInternalError("Both smartPtrType and smartPtr must be specified")}record.count={value:1};return attachFinalizer(Object.create(prototype,{$$:{value:record}}))}function RegisteredPointer_fromWireType(ptr){var rawPointer=this.getPointee(ptr);if(!rawPointer){this.destructor(ptr);return null}var registeredInstance=getInheritedInstance(this.registeredClass,rawPointer);if(undefined!==registeredInstance){if(0===registeredInstance.$$.count.value){registeredInstance.$$.ptr=rawPointer;registeredInstance.$$.smartPtr=ptr;return registeredInstance["clone"]()}else{var rv=registeredInstance["clone"]();this.destructor(ptr);return rv}}function makeDefaultHandle(){if(this.isSmartPointer){return makeClassHandle(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:rawPointer,smartPtrType:this,smartPtr:ptr})}else{return makeClassHandle(this.registeredClass.instancePrototype,{ptrType:this,ptr:ptr})}}var actualType=this.registeredClass.getActualType(rawPointer);var registeredPointerRecord=registeredPointers[actualType];if(!registeredPointerRecord){return makeDefaultHandle.call(this)}var toType;if(this.isConst){toType=registeredPointerRecord.constPointerType}else{toType=registeredPointerRecord.pointerType}var dp=downcastPointer(rawPointer,this.registeredClass,toType.registeredClass);if(dp===null){return makeDefaultHandle.call(this)}if(this.isSmartPointer){return makeClassHandle(toType.registeredClass.instancePrototype,{ptrType:toType,ptr:dp,smartPtrType:this,smartPtr:ptr})}else{return makeClassHandle(toType.registeredClass.instancePrototype,{ptrType:toType,ptr:dp})}}function attachFinalizer(handle){if("undefined"===typeof FinalizationRegistry){attachFinalizer=handle=>handle;return handle}finalizationRegistry=new FinalizationRegistry(info=>{releaseClassHandle(info.$$)});attachFinalizer=handle=>{var $$=handle.$$;var hasSmartPtr=!!$$.smartPtr;if(hasSmartPtr){var info={$$:$$};finalizationRegistry.register(handle,info,handle)}return handle};detachFinalizer=handle=>finalizationRegistry.unregister(handle);return attachFinalizer(handle)}function ClassHandle_clone(){if(!this.$$.ptr){throwInstanceAlreadyDeleted(this)}if(this.$$.preservePointerOnDelete){this.$$.count.value+=1;return this}else{var clone=attachFinalizer(Object.create(Object.getPrototypeOf(this),{$$:{value:shallowCopyInternalPointer(this.$$)}}));clone.$$.count.value+=1;clone.$$.deleteScheduled=false;return clone}}function ClassHandle_delete(){if(!this.$$.ptr){throwInstanceAlreadyDeleted(this)}if(this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete){throwBindingError("Object already scheduled for deletion")}detachFinalizer(this);releaseClassHandle(this.$$);if(!this.$$.preservePointerOnDelete){this.$$.smartPtr=undefined;this.$$.ptr=undefined}}function ClassHandle_isDeleted(){return!this.$$.ptr}function ClassHandle_deleteLater(){if(!this.$$.ptr){throwInstanceAlreadyDeleted(this)}if(this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete){throwBindingError("Object already scheduled for deletion")}deletionQueue.push(this);if(deletionQueue.length===1&&delayFunction){delayFunction(flushPendingDeletes)}this.$$.deleteScheduled=true;return this}function init_ClassHandle(){ClassHandle.prototype["isAliasOf"]=ClassHandle_isAliasOf;ClassHandle.prototype["clone"]=ClassHandle_clone;ClassHandle.prototype["delete"]=ClassHandle_delete;ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){}function ensureOverloadTable(proto,methodName,humanName){if(undefined===proto[methodName].overloadTable){var prevFunc=proto[methodName];proto[methodName]=function(){if(!proto[methodName].overloadTable.hasOwnProperty(arguments.length)){throwBindingError(`Function '${humanName}' called with an invalid number of arguments (${arguments.length}) - expects one of (${proto[methodName].overloadTable})!`)}return proto[methodName].overloadTable[arguments.length].apply(this,arguments)};proto[methodName].overloadTable=[];proto[methodName].overloadTable[prevFunc.argCount]=prevFunc}}function exposePublicSymbol(name,value,numArguments){if(Module.hasOwnProperty(name)){if(undefined===numArguments||undefined!==Module[name].overloadTable&&undefined!==Module[name].overloadTable[numArguments]){throwBindingError(`Cannot register public name '${name}' twice`)}ensureOverloadTable(Module,name,name);if(Module.hasOwnProperty(numArguments)){throwBindingError(`Cannot register multiple overloads of a function with the same number of arguments (${numArguments})!`)}Module[name].overloadTable[numArguments]=value}else{Module[name]=value;if(undefined!==numArguments){Module[name].numArguments=numArguments}}}function RegisteredClass(name,constructor,instancePrototype,rawDestructor,baseClass,getActualType,upcast,downcast){this.name=name;this.constructor=constructor;this.instancePrototype=instancePrototype;this.rawDestructor=rawDestructor;this.baseClass=baseClass;this.getActualType=getActualType;this.upcast=upcast;this.downcast=downcast;this.pureVirtualFunctions=[]}function upcastPointer(ptr,ptrClass,desiredClass){while(ptrClass!==desiredClass){if(!ptrClass.upcast){throwBindingError(`Expected null or instance of ${desiredClass.name}, got an instance of ${ptrClass.name}`)}ptr=ptrClass.upcast(ptr);ptrClass=ptrClass.baseClass}return ptr}function constNoSmartPtrRawPointerToWireType(destructors,handle){if(handle===null){if(this.isReference){throwBindingError(`null is not a valid ${this.name}`)}return 0}if(!handle.$$){throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`)}if(!handle.$$.ptr){throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`)}var handleClass=handle.$$.ptrType.registeredClass;var ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);return ptr}function genericPointerToWireType(destructors,handle){var ptr;if(handle===null){if(this.isReference){throwBindingError(`null is not a valid ${this.name}`)}if(this.isSmartPointer){ptr=this.rawConstructor();if(destructors!==null){destructors.push(this.rawDestructor,ptr)}return ptr}else{return 0}}if(!handle.$$){throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`)}if(!handle.$$.ptr){throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`)}if(!this.isConst&&handle.$$.ptrType.isConst){throwBindingError(`Cannot convert argument of type ${handle.$$.smartPtrType?handle.$$.smartPtrType.name:handle.$$.ptrType.name} to parameter type ${this.name}`)}var handleClass=handle.$$.ptrType.registeredClass;ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);if(this.isSmartPointer){if(undefined===handle.$$.smartPtr){throwBindingError("Passing raw pointer to smart pointer is illegal")}switch(this.sharingPolicy){case 0:if(handle.$$.smartPtrType===this){ptr=handle.$$.smartPtr}else{throwBindingError(`Cannot convert argument of type ${handle.$$.smartPtrType?handle.$$.smartPtrType.name:handle.$$.ptrType.name} to parameter type ${this.name}`)}break;case 1:ptr=handle.$$.smartPtr;break;case 2:if(handle.$$.smartPtrType===this){ptr=handle.$$.smartPtr}else{var clonedHandle=handle["clone"]();ptr=this.rawShare(ptr,Emval.toHandle(function(){clonedHandle["delete"]()}));if(destructors!==null){destructors.push(this.rawDestructor,ptr)}}break;default:throwBindingError("Unsupporting sharing policy")}}return ptr}function nonConstNoSmartPtrRawPointerToWireType(destructors,handle){if(handle===null){if(this.isReference){throwBindingError(`null is not a valid ${this.name}`)}return 0}if(!handle.$$){throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`)}if(!handle.$$.ptr){throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`)}if(handle.$$.ptrType.isConst){throwBindingError(`Cannot convert argument of type ${handle.$$.ptrType.name} to parameter type ${this.name}`)}var handleClass=handle.$$.ptrType.registeredClass;var ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);return ptr}function simpleReadValueFromPointer(pointer){return this["fromWireType"](HEAP32[pointer>>2])}function RegisteredPointer_getPointee(ptr){if(this.rawGetPointee){ptr=this.rawGetPointee(ptr)}return ptr}function RegisteredPointer_destructor(ptr){if(this.rawDestructor){this.rawDestructor(ptr)}}function RegisteredPointer_deleteObject(handle){if(handle!==null){handle["delete"]()}}function init_RegisteredPointer(){RegisteredPointer.prototype.getPointee=RegisteredPointer_getPointee;RegisteredPointer.prototype.destructor=RegisteredPointer_destructor;RegisteredPointer.prototype["argPackAdvance"]=8;RegisteredPointer.prototype["readValueFromPointer"]=simpleReadValueFromPointer;RegisteredPointer.prototype["deleteObject"]=RegisteredPointer_deleteObject;RegisteredPointer.prototype["fromWireType"]=RegisteredPointer_fromWireType}function RegisteredPointer(name,registeredClass,isReference,isConst,isSmartPointer,pointeeType,sharingPolicy,rawGetPointee,rawConstructor,rawShare,rawDestructor){this.name=name;this.registeredClass=registeredClass;this.isReference=isReference;this.isConst=isConst;this.isSmartPointer=isSmartPointer;this.pointeeType=pointeeType;this.sharingPolicy=sharingPolicy;this.rawGetPointee=rawGetPointee;this.rawConstructor=rawConstructor;this.rawShare=rawShare;this.rawDestructor=rawDestructor;if(!isSmartPointer&&registeredClass.baseClass===undefined){if(isConst){this["toWireType"]=constNoSmartPtrRawPointerToWireType;this.destructorFunction=null}else{this["toWireType"]=nonConstNoSmartPtrRawPointerToWireType;this.destructorFunction=null}}else{this["toWireType"]=genericPointerToWireType}}function replacePublicSymbol(name,value,numArguments){if(!Module.hasOwnProperty(name)){throwInternalError("Replacing nonexistant public symbol")}if(undefined!==Module[name].overloadTable&&undefined!==numArguments){Module[name].overloadTable[numArguments]=value}else{Module[name]=value;Module[name].argCount=numArguments}}function dynCallLegacy(sig,ptr,args){var f=Module["dynCall_"+sig];return args&&args.length?f.apply(null,[ptr].concat(args)):f.call(null,ptr)}var wasmTableMirror=[];function getWasmTableEntry(funcPtr){var func=wasmTableMirror[funcPtr];if(!func){if(funcPtr>=wasmTableMirror.length)wasmTableMirror.length=funcPtr+1;wasmTableMirror[funcPtr]=func=wasmTable.get(funcPtr)}return func}function dynCall(sig,ptr,args){if(sig.includes("j")){return dynCallLegacy(sig,ptr,args)}var rtn=getWasmTableEntry(ptr).apply(null,args);return rtn}function getDynCaller(sig,ptr){var argCache=[];return function(){argCache.length=0;Object.assign(argCache,arguments);return dynCall(sig,ptr,argCache)}}function embind__requireFunction(signature,rawFunction){signature=readLatin1String(signature);function makeDynCaller(){if(signature.includes("j")){return getDynCaller(signature,rawFunction)}return getWasmTableEntry(rawFunction)}var fp=makeDynCaller();if(typeof fp!="function"){throwBindingError(`unknown function pointer with signature ${signature}: ${rawFunction}`)}return fp}var UnboundTypeError=undefined;function getTypeName(type){var ptr=___getTypeName(type);var rv=readLatin1String(ptr);_free(ptr);return rv}function throwUnboundTypeError(message,types){var unboundTypes=[];var seen={};function visit(type){if(seen[type]){return}if(registeredTypes[type]){return}if(typeDependencies[type]){typeDependencies[type].forEach(visit);return}unboundTypes.push(type);seen[type]=true}types.forEach(visit);throw new UnboundTypeError(`${message}: `+unboundTypes.map(getTypeName).join([", "]))}function __embind_register_class(rawType,rawPointerType,rawConstPointerType,baseClassRawType,getActualTypeSignature,getActualType,upcastSignature,upcast,downcastSignature,downcast,name,destructorSignature,rawDestructor){name=readLatin1String(name);getActualType=embind__requireFunction(getActualTypeSignature,getActualType);if(upcast){upcast=embind__requireFunction(upcastSignature,upcast)}if(downcast){downcast=embind__requireFunction(downcastSignature,downcast)}rawDestructor=embind__requireFunction(destructorSignature,rawDestructor);var legalFunctionName=makeLegalFunctionName(name);exposePublicSymbol(legalFunctionName,function(){throwUnboundTypeError(`Cannot construct ${name} due to unbound types`,[baseClassRawType])});whenDependentTypesAreResolved([rawType,rawPointerType,rawConstPointerType],baseClassRawType?[baseClassRawType]:[],function(base){base=base[0];var baseClass;var basePrototype;if(baseClassRawType){baseClass=base.registeredClass;basePrototype=baseClass.instancePrototype}else{basePrototype=ClassHandle.prototype}var constructor=createNamedFunction(legalFunctionName,function(){if(Object.getPrototypeOf(this)!==instancePrototype){throw new BindingError("Use 'new' to construct "+name)}if(undefined===registeredClass.constructor_body){throw new BindingError(name+" has no accessible constructor")}var body=registeredClass.constructor_body[arguments.length];if(undefined===body){throw new BindingError(`Tried to invoke ctor of ${name} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(registeredClass.constructor_body).toString()}) parameters instead!`)}return body.apply(this,arguments)});var instancePrototype=Object.create(basePrototype,{constructor:{value:constructor}});constructor.prototype=instancePrototype;var registeredClass=new RegisteredClass(name,constructor,instancePrototype,rawDestructor,baseClass,getActualType,upcast,downcast);if(registeredClass.baseClass){if(registeredClass.baseClass.__derivedClasses===undefined){registeredClass.baseClass.__derivedClasses=[]}registeredClass.baseClass.__derivedClasses.push(registeredClass)}var referenceConverter=new RegisteredPointer(name,registeredClass,true,false,false);var pointerConverter=new RegisteredPointer(name+"*",registeredClass,false,false,false);var constPointerConverter=new RegisteredPointer(name+" const*",registeredClass,false,true,false);registeredPointers[rawType]={pointerType:pointerConverter,constPointerType:constPointerConverter};replacePublicSymbol(legalFunctionName,constructor);return[referenceConverter,pointerConverter,constPointerConverter]})}function heap32VectorToArray(count,firstElement){var array=[];for(var i=0;i<count;i++){array.push(HEAPU32[firstElement+i*4>>2])}return array}function runDestructors(destructors){while(destructors.length){var ptr=destructors.pop();var del=destructors.pop();del(ptr)}}function newFunc(constructor,argumentList){if(!(constructor instanceof Function)){throw new TypeError(`new_ called with constructor type ${typeof constructor} which is not a function`)}var dummy=createNamedFunction(constructor.name||"unknownFunctionName",function(){});dummy.prototype=constructor.prototype;var obj=new dummy;var r=constructor.apply(obj,argumentList);return r instanceof Object?r:obj}function craftInvokerFunction(humanName,argTypes,classType,cppInvokerFunc,cppTargetFunc,isAsync){var argCount=argTypes.length;if(argCount<2){throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!")}var isClassMethodFunc=argTypes[1]!==null&&classType!==null;var needsDestructorStack=false;for(var i=1;i<argTypes.length;++i){if(argTypes[i]!==null&&argTypes[i].destructorFunction===undefined){needsDestructorStack=true;break}}var returns=argTypes[0].name!=="void";var argsList="";var argsListWired="";for(var i=0;i<argCount-2;++i){argsList+=(i!==0?", ":"")+"arg"+i;argsListWired+=(i!==0?", ":"")+"arg"+i+"Wired"}var invokerFnBody=`\n        return function ${makeLegalFunctionName(humanName)}(${argsList}) {\n        if (arguments.length !== ${argCount-2}) {\n          throwBindingError('function ${humanName} called with ${arguments.length} arguments, expected ${argCount-2} args!');\n        }`;if(needsDestructorStack){invokerFnBody+="var destructors = [];\n"}var dtorStack=needsDestructorStack?"destructors":"null";var args1=["throwBindingError","invoker","fn","runDestructors","retType","classParam"];var args2=[throwBindingError,cppInvokerFunc,cppTargetFunc,runDestructors,argTypes[0],argTypes[1]];if(isClassMethodFunc){invokerFnBody+="var thisWired = classParam.toWireType("+dtorStack+", this);\n"}for(var i=0;i<argCount-2;++i){invokerFnBody+="var arg"+i+"Wired = argType"+i+".toWireType("+dtorStack+", arg"+i+"); // "+argTypes[i+2].name+"\n";args1.push("argType"+i);args2.push(argTypes[i+2])}if(isClassMethodFunc){argsListWired="thisWired"+(argsListWired.length>0?", ":"")+argsListWired}invokerFnBody+=(returns||isAsync?"var rv = ":"")+"invoker(fn"+(argsListWired.length>0?", ":"")+argsListWired+");\n";if(needsDestructorStack){invokerFnBody+="runDestructors(destructors);\n"}else{for(var i=isClassMethodFunc?1:2;i<argTypes.length;++i){var paramName=i===1?"thisWired":"arg"+(i-2)+"Wired";if(argTypes[i].destructorFunction!==null){invokerFnBody+=paramName+"_dtor("+paramName+"); // "+argTypes[i].name+"\n";args1.push(paramName+"_dtor");args2.push(argTypes[i].destructorFunction)}}}if(returns){invokerFnBody+="var ret = retType.fromWireType(rv);\n"+"return ret;\n"}else{}invokerFnBody+="}\n";args1.push(invokerFnBody);return newFunc(Function,args1).apply(null,args2)}function __embind_register_class_constructor(rawClassType,argCount,rawArgTypesAddr,invokerSignature,invoker,rawConstructor){assert(argCount>0);var rawArgTypes=heap32VectorToArray(argCount,rawArgTypesAddr);invoker=embind__requireFunction(invokerSignature,invoker);whenDependentTypesAreResolved([],[rawClassType],function(classType){classType=classType[0];var humanName=`constructor ${classType.name}`;if(undefined===classType.registeredClass.constructor_body){classType.registeredClass.constructor_body=[]}if(undefined!==classType.registeredClass.constructor_body[argCount-1]){throw new BindingError(`Cannot register multiple constructors with identical number of parameters (${argCount-1}) for class '${classType.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`)}classType.registeredClass.constructor_body[argCount-1]=()=>{throwUnboundTypeError(`Cannot construct ${classType.name} due to unbound types`,rawArgTypes)};whenDependentTypesAreResolved([],rawArgTypes,function(argTypes){argTypes.splice(1,0,null);classType.registeredClass.constructor_body[argCount-1]=craftInvokerFunction(humanName,argTypes,null,invoker,rawConstructor);return[]});return[]})}function __embind_register_class_function(rawClassType,methodName,argCount,rawArgTypesAddr,invokerSignature,rawInvoker,context,isPureVirtual,isAsync){var rawArgTypes=heap32VectorToArray(argCount,rawArgTypesAddr);methodName=readLatin1String(methodName);rawInvoker=embind__requireFunction(invokerSignature,rawInvoker);whenDependentTypesAreResolved([],[rawClassType],function(classType){classType=classType[0];var humanName=`${classType.name}.${methodName}`;if(methodName.startsWith("@@")){methodName=Symbol[methodName.substring(2)]}if(isPureVirtual){classType.registeredClass.pureVirtualFunctions.push(methodName)}function unboundTypesHandler(){throwUnboundTypeError(`Cannot call ${humanName} due to unbound types`,rawArgTypes)}var proto=classType.registeredClass.instancePrototype;var method=proto[methodName];if(undefined===method||undefined===method.overloadTable&&method.className!==classType.name&&method.argCount===argCount-2){unboundTypesHandler.argCount=argCount-2;unboundTypesHandler.className=classType.name;proto[methodName]=unboundTypesHandler}else{ensureOverloadTable(proto,methodName,humanName);proto[methodName].overloadTable[argCount-2]=unboundTypesHandler}whenDependentTypesAreResolved([],rawArgTypes,function(argTypes){var memberFunction=craftInvokerFunction(humanName,argTypes,classType,rawInvoker,context,isAsync);if(undefined===proto[methodName].overloadTable){memberFunction.argCount=argCount-2;proto[methodName]=memberFunction}else{proto[methodName].overloadTable[argCount-2]=memberFunction}return[]});return[]})}function HandleAllocator(){this.allocated=[undefined];this.freelist=[];this.get=function(id){return this.allocated[id]};this.has=function(id){return this.allocated[id]!==undefined};this.allocate=function(handle){var id=this.freelist.pop()||this.allocated.length;this.allocated[id]=handle;return id};this.free=function(id){this.allocated[id]=undefined;this.freelist.push(id)}}var emval_handles=new HandleAllocator;function __emval_decref(handle){if(handle>=emval_handles.reserved&&0===--emval_handles.get(handle).refcount){emval_handles.free(handle)}}function count_emval_handles(){var count=0;for(var i=emval_handles.reserved;i<emval_handles.allocated.length;++i){if(emval_handles.allocated[i]!==undefined){++count}}return count}function init_emval(){emval_handles.allocated.push({value:undefined},{value:null},{value:true},{value:false});emval_handles.reserved=emval_handles.allocated.length;Module["count_emval_handles"]=count_emval_handles}var Emval={toValue:handle=>{if(!handle){throwBindingError("Cannot use deleted val. handle = "+handle)}return emval_handles.get(handle).value},toHandle:value=>{switch(value){case undefined:return 1;case null:return 2;case true:return 3;case false:return 4;default:{return emval_handles.allocate({refcount:1,value:value})}}}};function __embind_register_emval(rawType,name){name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":function(handle){var rv=Emval.toValue(handle);__emval_decref(handle);return rv},"toWireType":function(destructors,value){return Emval.toHandle(value)},"argPackAdvance":8,"readValueFromPointer":simpleReadValueFromPointer,destructorFunction:null})}function embindRepr(v){if(v===null){return"null"}var t=typeof v;if(t==="object"||t==="array"||t==="function"){return v.toString()}else{return""+v}}function floatReadValueFromPointer(name,shift){switch(shift){case 2:return function(pointer){return this["fromWireType"](HEAPF32[pointer>>2])};case 3:return function(pointer){return this["fromWireType"](HEAPF64[pointer>>3])};default:throw new TypeError("Unknown float type: "+name)}}function __embind_register_float(rawType,name,size){var shift=getShiftFromSize(size);name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":function(value){return value},"toWireType":function(destructors,value){return value},"argPackAdvance":8,"readValueFromPointer":floatReadValueFromPointer(name,shift),destructorFunction:null})}function integerReadValueFromPointer(name,shift,signed){switch(shift){case 0:return signed?function readS8FromPointer(pointer){return HEAP8[pointer]}:function readU8FromPointer(pointer){return HEAPU8[pointer]};case 1:return signed?function readS16FromPointer(pointer){return HEAP16[pointer>>1]}:function readU16FromPointer(pointer){return HEAPU16[pointer>>1]};case 2:return signed?function readS32FromPointer(pointer){return HEAP32[pointer>>2]}:function readU32FromPointer(pointer){return HEAPU32[pointer>>2]};default:throw new TypeError("Unknown integer type: "+name)}}function __embind_register_integer(primitiveType,name,size,minRange,maxRange){name=readLatin1String(name);if(maxRange===-1){maxRange=4294967295}var shift=getShiftFromSize(size);var fromWireType=value=>value;if(minRange===0){var bitshift=32-8*size;fromWireType=value=>value<<bitshift>>>bitshift}var isUnsignedType=name.includes("unsigned");var checkAssertions=(value,toTypeName)=>{};var toWireType;if(isUnsignedType){toWireType=function(destructors,value){checkAssertions(value,this.name);return value>>>0}}else{toWireType=function(destructors,value){checkAssertions(value,this.name);return value}}registerType(primitiveType,{name:name,"fromWireType":fromWireType,"toWireType":toWireType,"argPackAdvance":8,"readValueFromPointer":integerReadValueFromPointer(name,shift,minRange!==0),destructorFunction:null})}function __embind_register_memory_view(rawType,dataTypeIndex,name){var typeMapping=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array];var TA=typeMapping[dataTypeIndex];function decodeMemoryView(handle){handle=handle>>2;var heap=HEAPU32;var size=heap[handle];var data=heap[handle+1];return new TA(heap.buffer,data,size)}name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":decodeMemoryView,"argPackAdvance":8,"readValueFromPointer":decodeMemoryView},{ignoreDuplicateRegistrations:true})}function stringToUTF8Array(str,heap,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}}heap[outIdx]=0;return outIdx-startIdx}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var c=str.charCodeAt(i);if(c<=127){len++}else if(c<=2047){len+=2}else if(c>=55296&&c<=57343){len+=4;++i}else{len+=3}}return len}var UTF8Decoder=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(heapOrArray,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heapOrArray[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.subarray(idx,endPtr))}var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}function __embind_register_std_string(rawType,name){name=readLatin1String(name);var stdStringIsUTF8=name==="std::string";registerType(rawType,{name:name,"fromWireType":function(value){var length=HEAPU32[value>>2];var payload=value+4;var str;if(stdStringIsUTF8){var decodeStartPtr=payload;for(var i=0;i<=length;++i){var currentBytePtr=payload+i;if(i==length||HEAPU8[currentBytePtr]==0){var maxRead=currentBytePtr-decodeStartPtr;var stringSegment=UTF8ToString(decodeStartPtr,maxRead);if(str===undefined){str=stringSegment}else{str+=String.fromCharCode(0);str+=stringSegment}decodeStartPtr=currentBytePtr+1}}}else{var a=new Array(length);for(var i=0;i<length;++i){a[i]=String.fromCharCode(HEAPU8[payload+i])}str=a.join("")}_free(value);return str},"toWireType":function(destructors,value){if(value instanceof ArrayBuffer){value=new Uint8Array(value)}var length;var valueIsOfTypeString=typeof value=="string";if(!(valueIsOfTypeString||value instanceof Uint8Array||value instanceof Uint8ClampedArray||value instanceof Int8Array)){throwBindingError("Cannot pass non-string to std::string")}if(stdStringIsUTF8&&valueIsOfTypeString){length=lengthBytesUTF8(value)}else{length=value.length}var base=_malloc(4+length+1);var ptr=base+4;HEAPU32[base>>2]=length;if(stdStringIsUTF8&&valueIsOfTypeString){stringToUTF8(value,ptr,length+1)}else{if(valueIsOfTypeString){for(var i=0;i<length;++i){var charCode=value.charCodeAt(i);if(charCode>255){_free(ptr);throwBindingError("String has UTF-16 code units that do not fit in 8 bits")}HEAPU8[ptr+i]=charCode}}else{for(var i=0;i<length;++i){HEAPU8[ptr+i]=value[i]}}}if(destructors!==null){destructors.push(_free,base)}return base},"argPackAdvance":8,"readValueFromPointer":simpleReadValueFromPointer,destructorFunction:function(ptr){_free(ptr)}})}var UTF16Decoder=typeof TextDecoder!="undefined"?new TextDecoder("utf-16le"):undefined;function UTF16ToString(ptr,maxBytesToRead){var endPtr=ptr;var idx=endPtr>>1;var maxIdx=idx+maxBytesToRead/2;while(!(idx>=maxIdx)&&HEAPU16[idx])++idx;endPtr=idx<<1;if(endPtr-ptr>32&&UTF16Decoder)return UTF16Decoder.decode(HEAPU8.subarray(ptr,endPtr));var str="";for(var i=0;!(i>=maxBytesToRead/2);++i){var codeUnit=HEAP16[ptr+i*2>>1];if(codeUnit==0)break;str+=String.fromCharCode(codeUnit)}return str}function stringToUTF16(str,outPtr,maxBytesToWrite){if(maxBytesToWrite===undefined){maxBytesToWrite=2147483647}if(maxBytesToWrite<2)return 0;maxBytesToWrite-=2;var startPtr=outPtr;var numCharsToWrite=maxBytesToWrite<str.length*2?maxBytesToWrite/2:str.length;for(var i=0;i<numCharsToWrite;++i){var codeUnit=str.charCodeAt(i);HEAP16[outPtr>>1]=codeUnit;outPtr+=2}HEAP16[outPtr>>1]=0;return outPtr-startPtr}function lengthBytesUTF16(str){return str.length*2}function UTF32ToString(ptr,maxBytesToRead){var i=0;var str="";while(!(i>=maxBytesToRead/4)){var utf32=HEAP32[ptr+i*4>>2];if(utf32==0)break;++i;if(utf32>=65536){var ch=utf32-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}else{str+=String.fromCharCode(utf32)}}return str}function stringToUTF32(str,outPtr,maxBytesToWrite){if(maxBytesToWrite===undefined){maxBytesToWrite=2147483647}if(maxBytesToWrite<4)return 0;var startPtr=outPtr;var endPtr=startPtr+maxBytesToWrite-4;for(var i=0;i<str.length;++i){var codeUnit=str.charCodeAt(i);if(codeUnit>=55296&&codeUnit<=57343){var trailSurrogate=str.charCodeAt(++i);codeUnit=65536+((codeUnit&1023)<<10)|trailSurrogate&1023}HEAP32[outPtr>>2]=codeUnit;outPtr+=4;if(outPtr+4>endPtr)break}HEAP32[outPtr>>2]=0;return outPtr-startPtr}function lengthBytesUTF32(str){var len=0;for(var i=0;i<str.length;++i){var codeUnit=str.charCodeAt(i);if(codeUnit>=55296&&codeUnit<=57343)++i;len+=4}return len}function __embind_register_std_wstring(rawType,charSize,name){name=readLatin1String(name);var decodeString,encodeString,getHeap,lengthBytesUTF,shift;if(charSize===2){decodeString=UTF16ToString;encodeString=stringToUTF16;lengthBytesUTF=lengthBytesUTF16;getHeap=()=>HEAPU16;shift=1}else if(charSize===4){decodeString=UTF32ToString;encodeString=stringToUTF32;lengthBytesUTF=lengthBytesUTF32;getHeap=()=>HEAPU32;shift=2}registerType(rawType,{name:name,"fromWireType":function(value){var length=HEAPU32[value>>2];var HEAP=getHeap();var str;var decodeStartPtr=value+4;for(var i=0;i<=length;++i){var currentBytePtr=value+4+i*charSize;if(i==length||HEAP[currentBytePtr>>shift]==0){var maxReadBytes=currentBytePtr-decodeStartPtr;var stringSegment=decodeString(decodeStartPtr,maxReadBytes);if(str===undefined){str=stringSegment}else{str+=String.fromCharCode(0);str+=stringSegment}decodeStartPtr=currentBytePtr+charSize}}_free(value);return str},"toWireType":function(destructors,value){if(!(typeof value=="string")){throwBindingError(`Cannot pass non-string to C++ string type ${name}`)}var length=lengthBytesUTF(value);var ptr=_malloc(4+length+charSize);HEAPU32[ptr>>2]=length>>shift;encodeString(value,ptr+4,length+charSize);if(destructors!==null){destructors.push(_free,ptr)}return ptr},"argPackAdvance":8,"readValueFromPointer":simpleReadValueFromPointer,destructorFunction:function(ptr){_free(ptr)}})}function __embind_register_void(rawType,name){name=readLatin1String(name);registerType(rawType,{isVoid:true,name:name,"argPackAdvance":0,"fromWireType":function(){return undefined},"toWireType":function(destructors,o){return undefined}})}function __emval_incref(handle){if(handle>4){emval_handles.get(handle).refcount+=1}}function requireRegisteredType(rawType,humanName){var impl=registeredTypes[rawType];if(undefined===impl){throwBindingError(humanName+" has unknown type "+getTypeName(rawType))}return impl}function __emval_take_value(type,arg){type=requireRegisteredType(type,"_emval_take_value");var v=type["readValueFromPointer"](arg);return Emval.toHandle(v)}function _abort(){abort("")}function _emscripten_memcpy_big(dest,src,num){HEAPU8.copyWithin(dest,src,src+num)}function getHeapMax(){return 2147483648}function emscripten_realloc_buffer(size){var b=wasmMemory.buffer;var pages=size-b.byteLength+65535>>>16;try{wasmMemory.grow(pages);updateMemoryViews();return 1}catch(e){}}function _emscripten_resize_heap(requestedSize){var oldSize=HEAPU8.length;requestedSize=requestedSize>>>0;var maxHeapSize=getHeapMax();if(requestedSize>maxHeapSize){return false}var alignUp=(x,multiple)=>x+(multiple-x%multiple)%multiple;for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignUp(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=emscripten_realloc_buffer(newSize);if(replacement){return true}}return false}function initRandomFill(){if(typeof crypto=="object"&&typeof crypto["getRandomValues"]=="function"){return view=>crypto.getRandomValues(view)}else abort("initRandomDevice")}function randomFill(view){return(randomFill=initRandomFill())(view)}function _getentropy(buffer,size){randomFill(HEAPU8.subarray(buffer,buffer+size));return 0}embind_init_charCodes();BindingError=Module["BindingError"]=extendError(Error,"BindingError");InternalError=Module["InternalError"]=extendError(Error,"InternalError");init_ClassHandle();init_embind();init_RegisteredPointer();UnboundTypeError=Module["UnboundTypeError"]=extendError(Error,"UnboundTypeError");init_emval();var wasmImports={"g":___cxa_throw,"p":__embind_register_bigint,"l":__embind_register_bool,"f":__embind_register_class,"e":__embind_register_class_constructor,"a":__embind_register_class_function,"t":__embind_register_emval,"k":__embind_register_float,"c":__embind_register_integer,"b":__embind_register_memory_view,"j":__embind_register_std_string,"d":__embind_register_std_wstring,"m":__embind_register_void,"n":__emval_decref,"o":__emval_incref,"h":__emval_take_value,"i":_abort,"s":_emscripten_memcpy_big,"r":_emscripten_resize_heap,"q":_getentropy};var asm=createWasm();var ___wasm_call_ctors=function(){return(___wasm_call_ctors=Module["asm"]["v"]).apply(null,arguments)};var ___getTypeName=function(){return(___getTypeName=Module["asm"]["x"]).apply(null,arguments)};var __embind_initialize_bindings=Module["__embind_initialize_bindings"]=function(){return(__embind_initialize_bindings=Module["__embind_initialize_bindings"]=Module["asm"]["y"]).apply(null,arguments)};var ___errno_location=function(){return(___errno_location=Module["asm"]["__errno_location"]).apply(null,arguments)};var _malloc=function(){return(_malloc=Module["asm"]["z"]).apply(null,arguments)};var _free=function(){return(_free=Module["asm"]["A"]).apply(null,arguments)};var ___cxa_is_pointer_type=function(){return(___cxa_is_pointer_type=Module["asm"]["B"]).apply(null,arguments)};var calledRun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(){if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}run();




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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vYXNzZXRzLzE4LiBHYW1lIE92ZXIubXAzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vYXNzZXRzL1RldHJpcy5tcDMiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvLi9zcmMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy8uL3NyYy9kcmF3LmpzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy8uL3NyYy90ZXRyaXMuanMiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dhc21fdGV0cmlzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dhc21fdGV0cmlzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dhc21fdGV0cmlzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dhc21fdGV0cmlzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QcmVzcytTdGFydCsyUCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuI3Byb2plY3RDb250YWluZXIgPiAqIHtcbiAgZm9udC1mYW1pbHk6IFwiUHJlc3MgU3RhcnQgMlBcIiwgY3Vyc2l2ZTtcbn1cblxuI3Byb2plY3RDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMGR2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2dpdExpbmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYXF1YW1hcmluZTtcbiAgY29sb3I6IGFxdWFtYXJpbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbiNzdWJDb250YWluZXIge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI211dGVCdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAzcHggc29saWQgYXF1YW1hcmluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA0cHggOHB4O1xufVxuI211dGVCdXR0b24gc3ZnIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuI2hlbHBCb3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjAlO1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMTAwJSArIDEwcHgpKTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgd2lkdGg6IDMwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGFxdWFtYXJpbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmhlbHBSb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG59XG4uaGVscFJvdyBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI25leHRQaWVjZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDk1cHgpO1xuICBib3JkZXI6IDNweCBzb2xpZCBhcXVhbWFyaW5lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbiNjb3JuZXJQYXVzZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuI3Njb3JlQm9hcmQge1xuICBib3JkZXI6IDNweCBzb2xpZCBhcXVhbWFyaW5lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoLTEwMCUgLSAxMHB4KSwgMzUlKTtcbn1cblxuI2dhbWVPdmVyQ29udGFpbmVyLFxuI3N0YXJ0R2FtZUNvbnRhaW5lcixcbiNwYXVzZUdhbWVDb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDRweCBzb2xpZCBhcXVhbWFyaW5lO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiA4MSU7XG59XG4jc3RhcnRHYW1lQ29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDI1NSwgMjEyLCAwLjE3NSk7XG59XG4jZ2FtZU92ZXJDb250YWluZXIge1xuICB3aWR0aDogOTklO1xufVxuI2dhbWVPdmVyQ29udGFpbmVyIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4jcGxheUJ1dHRvbixcbiNwbGF5QWdhaW5CdXR0b24sXG4jcmVzdW1lQnV0dG9uLFxuI3F1aXRCdXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDJweCBzb2xpZCBhcXVhbWFyaW5lO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlByZXNzIFN0YXJ0IDJQXCIsIGN1cnNpdmU7XG59XG4jcGxheUFnYWluQnV0dG9uIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuI3BsYXlCdXR0b246aG92ZXIsXG4jcGxheUFnYWluQnV0dG9uOmhvdmVyLFxuI3Jlc3VtZUJ1dHRvbjpob3ZlcixcbiNxdWl0QnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDE1cHgpIHtcbiAgI2hlbHBCb3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEyNHB4O1xuICAgIHRvcDogNzclO1xuICAgIHJpZ2h0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtFQUNSLHdDQUF3QztFQUN4QyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxXQUFXO0VBQ1gsNkNBQTZDO0FBQy9DOztBQUVBOzs7RUFHRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7RUFDYixVQUFVO0FBQ1o7QUFDQTtFQUNFLDRDQUE0QztBQUM5QztBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7RUFJRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBOzs7O0VBSUUsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtJQUNSLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJlc3MrU3RhcnQrMlAmZGlzcGxheT1zd2FwXFxcIik7XFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbiNwcm9qZWN0Q29udGFpbmVyID4gKiB7XFxuICBmb250LWZhbWlseTogXFxcIlByZXNzIFN0YXJ0IDJQXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuI3Byb2plY3RDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwZHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNnaXRMaW5rIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG4gIGxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYXF1YW1hcmluZTtcXG4gIGNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI3N1YkNvbnRhaW5lciB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jbXV0ZUJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGFxdWFtYXJpbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbn1cXG4jbXV0ZUJ1dHRvbiBzdmcge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbiNoZWxwQm94IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNjAlO1xcbiAgcmlnaHQ6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygxMDAlICsgMTBweCkpO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDE2cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYXF1YW1hcmluZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmhlbHBSb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG59XFxuLmhlbHBSb3cgc3BhbjpudGgtY2hpbGQoMikge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbmV4dFBpZWNlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgOTVweCk7XFxuICBib3JkZXI6IDNweCBzb2xpZCBhcXVhbWFyaW5lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jY29ybmVyUGF1c2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4jc2NvcmVCb2FyZCB7XFxuICBib3JkZXI6IDNweCBzb2xpZCBhcXVhbWFyaW5lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYygtMTAwJSAtIDEwcHgpLCAzNSUpO1xcbn1cXG5cXG4jZ2FtZU92ZXJDb250YWluZXIsXFxuI3N0YXJ0R2FtZUNvbnRhaW5lcixcXG4jcGF1c2VHYW1lQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiA0cHggc29saWQgYXF1YW1hcmluZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDgxJTtcXG59XFxuI3N0YXJ0R2FtZUNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsIDAuMTc1KTtcXG59XFxuI2dhbWVPdmVyQ29udGFpbmVyIHtcXG4gIHdpZHRoOiA5OSU7XFxufVxcbiNnYW1lT3ZlckNvbnRhaW5lciBzcGFuOm50aC1jaGlsZCgxKSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5QnV0dG9uLFxcbiNwbGF5QWdhaW5CdXR0b24sXFxuI3Jlc3VtZUJ1dHRvbixcXG4jcXVpdEJ1dHRvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGFxdWFtYXJpbmU7XFxuICBwYWRkaW5nOiA4cHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUHJlc3MgU3RhcnQgMlBcXFwiLCBjdXJzaXZlO1xcbn1cXG4jcGxheUFnYWluQnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuI3BsYXlCdXR0b246aG92ZXIsXFxuI3BsYXlBZ2FpbkJ1dHRvbjpob3ZlcixcXG4jcmVzdW1lQnV0dG9uOmhvdmVyLFxcbiNxdWl0QnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDE1cHgpIHtcXG4gICNoZWxwQm94IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEyNHB4O1xcbiAgICB0b3A6IDc3JTtcXG4gICAgcmlnaHQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDczNTY3MDAxN2EzNDg5ZDY1NDU2MGNkMmQzZTFmNWUubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgxOWY0NDRmZGE5OTUxOTNlOWJjOTc4NjBlZTQzODkwLm1wM1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuaW1wb3J0IHsgY29tcG9uZW50cyB9IGZyb20gXCIuL2NvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgZHJhdyB9IGZyb20gXCIuL2RyYXcuanNcIlxuaW1wb3J0IHsgc2F2ZUhpZ2hTY29yZSB9IGZyb20gXCIuL2RyYXcuanNcIlxuaW1wb3J0IHsgaW5pdEV2ZW50cyB9IGZyb20gXCIuL2V2ZW50cy5qc1wiXG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tIFwiLi90ZXRyaXMuanNcIlxuaW1wb3J0IHN0YXJ0TXVzaWMgZnJvbSBcIi4uL2Fzc2V0cy9UZXRyaXMubXAzXCJcbmltcG9ydCBlbmRNdXNpYyBmcm9tIFwiLi4vYXNzZXRzLzE4LiBHYW1lIE92ZXIubXAzXCJcblxuLy9NdXNpY1xuZXhwb3J0IGNvbnN0IHRldHJpc011c2ljID0gbmV3IEF1ZGlvKHN0YXJ0TXVzaWMpXG5leHBvcnQgY29uc3QgZ2FtZU92ZXJNdXNpYyA9IG5ldyBBdWRpbyhlbmRNdXNpYylcbnRldHJpc011c2ljLnByZWxvYWQgPSBcImF1dG9cIlxuZ2FtZU92ZXJNdXNpYy5wcmVsb2FkID0gXCJhdXRvXCJcblxuTW9kdWxlLm9uUnVudGltZUluaXRpYWxpemVkID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBsZXQgZ2FtZSA9IG5ldyBNb2R1bGUuR2FtZSgpXG5cbiAgLy9HYW1lIHRpY2sgc3RhcnQgdmFyaWFibGVcbiAgZ2FtZS5sYXN0VGljayA9IERhdGUubm93KClcbiAgZ2FtZS5nYW1lTG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbm93ID0gRGF0ZS5ub3coKVxuICAgIGxldCBkZWx0YSA9IG5vdyAtIHRoaXMubGFzdFRpY2tcblxuICAgIGlmIChkZWx0YSA+PSB0aGlzLmdldERyb3BJbnRlcnZhbCgpICYmICF0aGlzLmdldEdhbWVQYXVzZWQoKSkge1xuICAgICAgdGhpcy51cGRhdGUoKSAvLyB1cGRhdGUgZ2FtZSBzdGF0ZSAodGV0cmlzLmNwcClcbiAgICAgIHRoaXMubGFzdFRpY2sgPSBub3cgLy8gdXBkYXRlIHRoZSBsYXN0IHRpY2sgdGltZVxuICAgIH1cblxuICAgIGRyYXcodGhpcykgLy8gcmVuZGVyIGdhbWUgc3RhdGVcblxuICAgIGlmICghdGhpcy5nZXRHYW1lT3ZlcigpKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpKSAvLyByZXBlYXQgbmV4dCBmcmFtZVxuICAgIH0gZWxzZSB7XG4gICAgICBzYXZlSGlnaFNjb3JlKHRoaXMpXG4gICAgICB0ZXRyaXNNdXNpYy5wYXVzZSgpXG4gICAgICBnYW1lT3Zlck11c2ljLnBsYXkoKVxuICAgICAgY29tcG9uZW50cy5kaXNwbGF5R2FtZU92ZXJQYWdlKHRoaXMpXG4gICAgfVxuICB9LmJpbmQoZ2FtZSkgLy8gYmluZCB0aGUgZ2FtZSBpbnN0YW5jZSB0byB0aGUgZnVuY3Rpb24gY29udGV4dDpcbiAgLy9iaW5kIGFsbG93cyB0aGUgZ2FtZUxvb3AgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGZyb20gZXZlbnRzLmpzIGJ5IGVuc3VyaW5nIHRoYXQgXCJ0aGlzXCJcbiAgLy9hbHdheXMgcmVmZXJzIHRvIHRoZSBcImdhbWVcIiBvYmpcblxuICBpbml0RXZlbnRzKGdhbWUpXG4gIGRyYXcoZ2FtZSkgLy9EcmF3IEJvYXJkIGp1c3QgYXMgYSBiYWNrZ3JvdW5kIGJlZm9yZSBnYW1lIHN0YXJ0c1xuICBjb21wb25lbnRzLmRpc3BsYXlTdGFydENvbXBvbmVudHMoKVxufVxuIiwiZXhwb3J0IGNvbnN0IGNvbXBvbmVudHMgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBkaXNwbGF5R2FtZU92ZXJQYWdlKGdhbWUpIHtcbiAgICBjb25zdCBnYW1lT3ZlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBzcGFuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgIGNvbnN0IHNwYW5TY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgY29uc3Qgc3BhbkhpZ2hTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgY29uc3QgcGxheUFnYWluQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGNvbnN0IHF1aXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgZ2FtZU92ZXJDb250YWluZXIuaWQgPSBcImdhbWVPdmVyQ29udGFpbmVyXCJcbiAgICBwbGF5QWdhaW5CdXR0b24uaWQgPSBcInBsYXlBZ2FpbkJ1dHRvblwiXG4gICAgcXVpdEJ1dHRvbi5pZCA9IFwicXVpdEJ1dHRvblwiXG4gICAgc3BhblRpdGxlLnRleHRDb250ZW50ID0gXCJHYW1lIE92ZXIhXCJcbiAgICBzcGFuU2NvcmUudGV4dENvbnRlbnQgPSBgU2NvcmU6ICR7Z2FtZS5nZXRTY29yZSgpLnRvU3RyaW5nKCl9YFxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpZ2hTY29yZVwiKSAhPT0gbnVsbCkge1xuICAgICAgc3BhbkhpZ2hTY29yZS50ZXh0Q29udGVudCA9IGBIaWdoIFNjb3JlOiAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaFNjb3JlXCIpfWBcbiAgICB9IGVsc2Uge1xuICAgICAgc3BhbkhpZ2hTY29yZS50ZXh0Q29udGVudCA9IGBIaWdoIFNjb3JlOiAke2dhbWUuZ2V0U2NvcmUoKS50b1N0cmluZygpfWBcbiAgICB9XG4gICAgcGxheUFnYWluQnV0dG9uLnRleHRDb250ZW50ID0gXCJQTEFZIEFHQUlOXCJcbiAgICBxdWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJRVUlUXCJcbiAgICBnYW1lT3ZlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuVGl0bGUpXG4gICAgZ2FtZU92ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhblNjb3JlKVxuICAgIGdhbWVPdmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW5IaWdoU2NvcmUpXG4gICAgZ2FtZU92ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheUFnYWluQnV0dG9uKVxuICAgIGdhbWVPdmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1aXRCdXR0b24pXG4gICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVPdmVyQ29udGFpbmVyKVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheVN0YXJ0UGFnZSgpIHtcbiAgICBjb25zdCBzdGFydEdhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3Qgc3BhblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICBjb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIHBsYXlCdXR0b24uaWQgPSBcInBsYXlCdXR0b25cIlxuICAgIHN0YXJ0R2FtZUNvbnRhaW5lci5pZCA9IFwic3RhcnRHYW1lQ29udGFpbmVyXCJcbiAgICBzcGFuVGl0bGUudGV4dENvbnRlbnQgPSBcIlRFVFJJU1wiXG4gICAgcGxheUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUExBWVwiXG4gICAgc3RhcnRHYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW5UaXRsZSlcbiAgICBzdGFydEdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheUJ1dHRvbilcbiAgICBzdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRHYW1lQ29udGFpbmVyKVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheVBhdXNlUGFnZSgpIHtcbiAgICBjb25zdCBwYXVzZUdhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3Qgc3BhblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICBjb25zdCByZXN1bWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicmVzdW1lQnV0dG9uXCIpXG4gICAgcGF1c2VHYW1lQ29udGFpbmVyLmlkID0gXCJwYXVzZUdhbWVDb250YWluZXJcIlxuICAgIHJlc3VtZUJ1dHRvbi5pZCA9IFwicmVzdW1lQnV0dG9uXCJcbiAgICBzcGFuVGl0bGUudGV4dENvbnRlbnQgPSBcIlBBVVNFRFwiXG4gICAgcmVzdW1lQnV0dG9uLnRleHRDb250ZW50ID0gXCJyZXN1bWVcIlxuICAgIHBhdXNlR2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuVGl0bGUpXG4gICAgcGF1c2VHYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3VtZUJ1dHRvbilcbiAgICBzdWJDb250YWluZXIuYXBwZW5kQ2hpbGQocGF1c2VHYW1lQ29udGFpbmVyKVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheUhlbHBCb3goKSB7XG4gICAgY29uc3QgaGVscEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBoZWxwQm94LmlkID0gXCJoZWxwQm94XCJcblxuICAgIGxldCBjb250ZW50QXJyID0gW1wiTW92ZTpcIiwgXCJSb3RhdGU6XCIsIFwiUXVpY2sgRHJvcDpcIiwgXCJQYXVzZS9QbGF5OlwiXVxuICAgIGxldCBrZXlzID0gW1wiQXJyb3dzXCIsIFwiJ3onXCIsIFwiJ1NwYWNlJ1wiLCBcIidFc2MnXCJdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnRBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGlubmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgICBjb25zdCBzcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgICBpbm5lckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVscFJvd1wiKVxuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGNvbnRlbnRBcnJbaV1cbiAgICAgIHNwYW4yLnRleHRDb250ZW50ID0ga2V5c1tpXVxuICAgICAgaW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhbilcbiAgICAgIGlubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW4yKVxuICAgICAgaGVscEJveC5hcHBlbmRDaGlsZChpbm5lckNvbnRhaW5lcilcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJDb250YWluZXJcIikuYXBwZW5kQ2hpbGQoaGVscEJveClcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZU11dGVCdXR0b24oKSB7XG4gICAgY29uc3QgdGV0cmlzTXVzaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0TXVzaWNcIilcbiAgICBjb25zdCBzb3VuZE9uID0gYDxzdmcgY2xhc3M9XCJtdXRlQ2xpY2thYmxlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48cGF0aCBjbGFzcz1cIm11dGVDbGlja2FibGVcIiBmaWxsPVwiYXF1YW1hcmluZVwiIGQ9XCJNNy41NjMgMi4wNjlBLjc1Ljc1IDAgMCAxIDggMi43NXYxMC41YS43NTEuNzUxIDAgMCAxLTEuMjM4LjU3TDMuNDcyIDExSDEuNzVBMS43NSAxLjc1IDAgMCAxIDAgOS4yNXYtMi41QzAgNS43ODQuNzg0IDUgMS43NSA1aDEuNzIzbDMuMjg5LTIuODJhLjc1Ljc1IDAgMCAxIC44MDEtLjExMVpNNi41IDQuMzhMNC4yMzggNi4zMTlhLjc0OC43NDggMCAwIDEtLjQ4OC4xODFoLTJhLjI1LjI1IDAgMCAwLS4yNS4yNXYyLjVjMCAuMTM4LjExMi4yNS4yNS4yNWgyYy4xNzkgMCAuMzUyLjA2NC40ODguMThMNi41IDExLjYyWm02LjA5Ni0yLjAzOGEuNzUuNzUgMCAwIDEgMS4wNiAwYTggOCAwIDAgMSAwIDExLjMxNGEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4YS43NTEuNzUxIDAgMCAxLS4wMTgtMS4wNDJhNi41IDYuNSAwIDAgMCAwLTkuMTkzYS43NS43NSAwIDAgMSAwLTEuMDZabS0xLjA2IDIuMTIxbC0uMDAxLjAwMWE1IDUgMCAwIDEgMCA3LjA3YS43NDkuNzQ5IDAgMCAxLTEuMjc1LS4zMjZhLjc0OS43NDkgMCAwIDEgLjIxNS0uNzM0YTMuNSAzLjUgMCAwIDAgMC00Ljk1YS43NS43NSAwIDEgMSAxLjA2MS0xLjA2MVpcIi8+PC9zdmc+YFxuICAgIGNvbnN0IHNvdW5kT2ZmID0gYDxzdmcgY2xhc3M9XCJtdXRlQ2xpY2thYmxlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBjbGFzcz1cIm11dGVDbGlja2FibGVcIiBmaWxsPVwiYXF1YW1hcmluZVwiIGQ9XCJNMTIuNDMgNC4xYTEgMSAwIDAgMC0xIC4xMkw2LjY1IDhIM2ExIDEgMCAwIDAtMSAxdjZhMSAxIDAgMCAwIDEgMWgzLjY1bDQuNzMgMy43OEExIDEgMCAwIDAgMTIgMjBhLjkxLjkxIDAgMCAwIC40My0uMUExIDEgMCAwIDAgMTMgMTlWNWExIDEgMCAwIDAtLjU3LS45Wk0xMSAxNi45MmwtMy4zOC0yLjdBMSAxIDAgMCAwIDcgMTRINHYtNGgzYTEgMSAwIDAgMCAuNjItLjIyTDExIDcuMDhaTTE5LjkxIDEybDEuOC0xLjc5YTEgMSAwIDAgMC0xLjQyLTEuNDJsLTEuNzkgMS44bC0xLjc5LTEuOGExIDEgMCAwIDAtMS40MiAxLjQybDEuOCAxLjc5bC0xLjggMS43OWExIDEgMCAwIDAgMCAxLjQyYTEgMSAwIDAgMCAxLjQyIDBsMS43OS0xLjhsMS43OSAxLjhhMSAxIDAgMCAwIDEuNDIgMGExIDEgMCAwIDAgMC0xLjQyWlwiLz48L3N2Zz5gXG4gICAgY29uc3QgbXV0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXV0ZUJ1dHRvblwiKVxuICAgIG11dGVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpXG4gICAgaWYgKG11dGVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwib25cIikpIHtcbiAgICAgIG11dGVCdXR0b24uaW5uZXJIVE1MID0gc291bmRPblxuICAgICAgdGV0cmlzTXVzaWMubXV0ZWQgPSBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICBtdXRlQnV0dG9uLmlubmVySFRNTCA9IHNvdW5kT2ZmXG4gICAgICB0ZXRyaXNNdXNpYy5tdXRlZCA9IHRydWVcbiAgICB9XG4gIH1cblxuICAvL0NPTVBPTkVOVFMgQkVMT1c6XG4gIGZ1bmN0aW9uIGRpc3BsYXlTdGFydENvbXBvbmVudHMoKSB7XG4gICAgZGlzcGxheVN0YXJ0UGFnZSgpXG4gICAgZGlzcGxheUhlbHBCb3goKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5R2FtZU92ZXJQYWdlLFxuICAgIGRpc3BsYXlQYXVzZVBhZ2UsXG4gICAgZGlzcGxheVN0YXJ0UGFnZSxcbiAgICBkaXNwbGF5SGVscEJveCxcbiAgICB0b2dnbGVNdXRlQnV0dG9uLFxuICAgIGRpc3BsYXlTdGFydENvbXBvbmVudHMsXG4gIH1cbn0pKClcbiIsImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIilcbmNvbnN0IG5leHRQaWVjZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dFBpZWNlXCIpXG5jb25zdCBzY29yZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZUJvYXJkXCIpXG4vL0NhbnZhcyBjb250ZXh0c1xudmFyIGMgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG52YXIgY24gPSBuZXh0UGllY2VDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG52YXIgY3MgPSBzY29yZUJvYXJkLmdldENvbnRleHQoXCIyZFwiKVxuXG5sZXQgYmxvY2tTaXplID0gMzAgLy9weFxuY29uc3QgbkZpZWxkV2lkdGggPSAxMlxuY29uc3QgbkZpZWxkSGVpZ2h0ID0gMjNcbmNvbnN0IG9mZnNldFggPSAyXG5jb25zdCBvZmZzZXRZID0gMlxuLy9jb2xvcnNcbmNvbnN0IHRldHJvbWlub0NvbG9ycyA9IFtcIiNmYmJmMjRcIiwgXCIjMjJjNTVlXCIsIFwiIzBlYTVlOVwiLCBcIiM2N2U4ZjlcIiwgXCIjZTExZDQ4XCIsIFwiI2Q5NDZlZlwiLCBcIiNmOGZhZmNcIl1cblxuY2FudmFzLndpZHRoID0gYmxvY2tTaXplICogbkZpZWxkV2lkdGggKyBvZmZzZXRYICogMlxuY2FudmFzLmhlaWdodCA9IGJsb2NrU2l6ZSAqIG5GaWVsZEhlaWdodCArIG9mZnNldFkgKiAyXG5uZXh0UGllY2VDYW52YXMud2lkdGggPSBibG9ja1NpemUgKiA0XG5uZXh0UGllY2VDYW52YXMuaGVpZ2h0ID0gYmxvY2tTaXplICogNFxuc2NvcmVCb2FyZC53aWR0aCA9IGJsb2NrU2l6ZSAqIDVcbnNjb3JlQm9hcmQuaGVpZ2h0ID0gYmxvY2tTaXplICogOFxuXG5sZXQgSElHSF9TQ09SRSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaFNjb3JlXCIpXG5pZiAoSElHSF9TQ09SRSA9PT0gbnVsbCkgSElHSF9TQ09SRSA9IFwiMFwiXG5cbmNvbnN0IENlbGwgPSB7XG4gIEVNUFRZOiAxMCxcbiAgQk9SREVSOiA5LFxuICBURVRST01JTk86IDgsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3KGdhbWUpIHtcbiAgcmVmcmVzaFBhZ2UoKVxuXG4gIC8vR2V0IGdhbWUgdmFyaWFibGVzXG4gIGxldCBuQ3VycmVudFggPSBnYW1lLmdldEN1cnJlbnRYKClcbiAgbGV0IG5DdXJyZW50WSA9IGdhbWUuZ2V0Q3VycmVudFkoKVxuICBsZXQgblNoYWRvd1kgPSBnYW1lLmNoYW5nZVNoYWRvd1koKVxuICBsZXQgbkN1cnJlbnRQaWVjZSA9IGdhbWUuZ2V0Q3VycmVudFBpZWNlKClcbiAgbGV0IG5OZXh0UGllY2UgPSBnYW1lLmdldE5leHRQaWVjZSgpXG4gIGxldCBuQ3VycmVudFJvdGF0aW9uID0gZ2FtZS5nZXRDdXJyZW50Um90YXRpb24oKVxuICBsZXQgdGV0cm9taW5vID0gZ2FtZS5nZXRUZXRyb21pbm8obkN1cnJlbnRQaWVjZSlcbiAgbGV0IG5leHRUZXRyb21pbm8gPSBnYW1lLmdldFRldHJvbWlubyhuTmV4dFBpZWNlKVxuXG4gIGRyYXdHYW1lRmllbGQoZ2FtZSlcblxuICAvL0RyYXcgVGV0cm9taW5vLCBzaGFkb3csIG5leHQgdGV0cm9taW5vXG4gIGZvciAobGV0IHB4ID0gMDsgcHggPCA0OyBweCsrKVxuICAgIGZvciAobGV0IHB5ID0gMDsgcHkgPCA0OyBweSsrKSB7XG4gICAgICBsZXQgcm90YXRlZEluZGV4ID0gZ2FtZS5Sb3RhdGUocHgsIHB5LCBuQ3VycmVudFJvdGF0aW9uKVxuICAgICAgaWYgKHRldHJvbWluby5nZXQocm90YXRlZEluZGV4KSA9PT0gMSkge1xuICAgICAgICBkcmF3VGV0cm9taW5vKHB4LCBweSwgbkN1cnJlbnRYLCBuQ3VycmVudFksIG5DdXJyZW50UGllY2UpXG4gICAgICAgIGRyYXdUZXRyb21pbm9TaGFkb3coZ2FtZSwgcHgsIHB5LCBuQ3VycmVudFgsIG5TaGFkb3dZLCB0ZXRyb21pbm8sIG5DdXJyZW50UGllY2UsIG5DdXJyZW50Um90YXRpb24pXG4gICAgICB9XG4gICAgICBkcmF3TmV4dFBpZWNlKHB4LCBweSwgbk5leHRQaWVjZSwgbmV4dFRldHJvbWlubylcbiAgICB9XG4gIGRyYXdTY29yZUJvYXJkKGdhbWUpXG4gIGRyYXdHYW1lRmllbGRCb3JkZXJzKClcbn1cblxuLy9VdGlsIGZ1bmN0aW9uc1xuY29uc3QgcmVmcmVzaFBhZ2UgPSAoKSA9PiB7XG4gIGMuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgY24uY2xlYXJSZWN0KDAsIDAsIG5leHRQaWVjZUNhbnZhcy53aWR0aCwgbmV4dFBpZWNlQ2FudmFzLmhlaWdodClcbiAgY3MuY2xlYXJSZWN0KDAsIDAsIHNjb3JlQm9hcmQud2lkdGgsIHNjb3JlQm9hcmQuaGVpZ2h0KVxufVxuZnVuY3Rpb24gZHJhd0xpbmUoc3gsIHN5LCBleCwgZXkpIHtcbiAgYy5iZWdpblBhdGgoKVxuICBjLm1vdmVUbyhzeCwgc3kpXG4gIGMubGluZVRvKGV4LCBleSlcbiAgYy5zdHJva2UoKVxufVxuXG4vL0RyYXcgZnVuY3Rpb25zXG5jb25zdCBkcmF3R2FtZUZpZWxkID0gZ2FtZSA9PiB7XG4gIGxldCBnYW1lQm9hcmQgPSBnYW1lLmdldEdhbWVCb2FyZCgpXG4gIC8vRHJhdyBGaWVsZFxuICBmb3IgKGxldCB4ID0gMDsgeCA8IG5GaWVsZFdpZHRoOyB4KyspIHtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG5GaWVsZEhlaWdodDsgeSsrKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHkgKiBuRmllbGRXaWR0aCArIHhcbiAgICAgIGNvbnN0IHZhbHVlID0gZ2FtZUJvYXJkLmdldChpbmRleClcblxuICAgICAgaWYgKHZhbHVlID09PSBDZWxsLkVNUFRZKSB7XG4gICAgICAgIC8vRW1wdHkgc3BhY2VcbiAgICAgICAgYy5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IENlbGwuQk9SREVSKSB7XG4gICAgICAgIC8vQm9yZGVyIGNlbGxzXG4gICAgICAgIGMuc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgYy5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgYy5maWxsUmVjdCh4ICogYmxvY2tTaXplICsgb2Zmc2V0WCwgeSAqIGJsb2NrU2l6ZSArIG9mZnNldFksIGJsb2NrU2l6ZSwgYmxvY2tTaXplKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9Ecm9wcGVkIHRldHJvbWlub3NcbiAgICAgICAgZ2FtZS5nZXRHYW1lT3ZlcigpID8gKGMuc3Ryb2tlU3R5bGUgPSBcImFxdWFtYXJpbmVcIikgOiAoYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIilcbiAgICAgICAgYy5saW5lV2lkdGggPSAyXG4gICAgICAgIGMuc3Ryb2tlUmVjdCh4ICogYmxvY2tTaXplICsgb2Zmc2V0WCwgeSAqIGJsb2NrU2l6ZSArIG9mZnNldFksIGJsb2NrU2l6ZSwgYmxvY2tTaXplKVxuICAgICAgfVxuXG4gICAgICAvLyBEcmF3IGRpYWdvbmFsc1xuICAgICAgaWYgKHZhbHVlICE9PSBDZWxsLkVNUFRZICYmIHZhbHVlICE9PSBDZWxsLkJPUkRFUikge1xuICAgICAgICAvL1BsYWNlZCB0ZXRyb21pbm9zXG4gICAgICAgIGMubGluZVdpZHRoID0gMVxuICAgICAgICAvL2Muc2hhZG93Qmx1ciA9IDEwXG4gICAgICAgIC8vYy5zaGFkb3dDb2xvciA9IFwiYXF1YW1hcmluZVwiXG4gICAgICAgIGRyYXdMaW5lKFxuICAgICAgICAgIHggKiBibG9ja1NpemUgKyBvZmZzZXRYLFxuICAgICAgICAgIHkgKiBibG9ja1NpemUgKyBvZmZzZXRZLFxuICAgICAgICAgICh4ICsgMSkgKiBibG9ja1NpemUgKyBvZmZzZXRYLFxuICAgICAgICAgICh5ICsgMSkgKiBibG9ja1NpemUgKyBvZmZzZXRZXG4gICAgICAgIClcbiAgICAgICAgZHJhd0xpbmUoXG4gICAgICAgICAgeCAqIGJsb2NrU2l6ZSArIGJsb2NrU2l6ZSArIG9mZnNldFgsXG4gICAgICAgICAgeSAqIGJsb2NrU2l6ZSArIG9mZnNldFksXG4gICAgICAgICAgeCAqIGJsb2NrU2l6ZSArIG9mZnNldFgsXG4gICAgICAgICAgeSAqIGJsb2NrU2l6ZSArIGJsb2NrU2l6ZSArIG9mZnNldFlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICAvL2tpbGwgc2hhZG93c1xuICAgICAgYy5zaGFkb3dCbHVyID0gMFxuICAgICAgYy5zaGFkb3dDb2xvciA9IFwiYmxhY2tcIlxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkcmF3VGV0cm9taW5vID0gKHB4LCBweSwgbkN1cnJlbnRYLCBuQ3VycmVudFksIG5DdXJyZW50UGllY2UpID0+IHtcbiAgLy8gU2V0IGdsb3cgZWZmZWN0XG4gIGMuc2hhZG93Qmx1ciA9IDEyXG4gIGMuc2hhZG93Q29sb3IgPSB0ZXRyb21pbm9Db2xvcnNbbkN1cnJlbnRQaWVjZV1cbiAgLy8gRHJhdyBib3JkZXJcbiAgYy5zdHJva2VTdHlsZSA9IHRldHJvbWlub0NvbG9yc1tuQ3VycmVudFBpZWNlXVxuICBjLmxpbmVXaWR0aCA9IDNcbiAgYy5zdHJva2VSZWN0KChuQ3VycmVudFggKyBweCkgKiBibG9ja1NpemUgKyBvZmZzZXRYLCAobkN1cnJlbnRZICsgcHkpICogYmxvY2tTaXplICsgb2Zmc2V0WSwgYmxvY2tTaXplLCBibG9ja1NpemUpXG4gIGMuc2hhZG93Qmx1ciA9IDBcbiAgYy5zaGFkb3dDb2xvciA9IFwiYmxhY2tcIlxufVxuXG5jb25zdCBkcmF3VGV0cm9taW5vU2hhZG93ID0gKGdhbWUsIHB4LCBweSwgbkN1cnJlbnRYLCBuU2hhZG93WSwgdGV0cm9taW5vLCBuQ3VycmVudFBpZWNlLCBuQ3VycmVudFJvdGF0aW9uKSA9PiB7XG4gIGNvbnN0IEVNUFRZX1NQQUNFID0gMFxuICBjLnN0cm9rZVN0eWxlID0gdGV0cm9taW5vQ29sb3JzW25DdXJyZW50UGllY2VdXG4gIGlmICghZ2FtZS5nZXRHYW1lUGF1c2VkKCkgJiYgIWdhbWUuZ2V0R2FtZU92ZXIoKSkge1xuICAgIC8vIENoZWNrIG5laWdoYm9yaW5nIGNlbGxzXG4gICAgY29uc3QgdG9wID0gcHkgPiAwID8gdGV0cm9taW5vLmdldChnYW1lLlJvdGF0ZShweCwgcHkgLSAxLCBuQ3VycmVudFJvdGF0aW9uKSkgOiBFTVBUWV9TUEFDRVxuICAgIGNvbnN0IHJpZ2h0ID0gcHggPCAzID8gdGV0cm9taW5vLmdldChnYW1lLlJvdGF0ZShweCArIDEsIHB5LCBuQ3VycmVudFJvdGF0aW9uKSkgOiBFTVBUWV9TUEFDRVxuICAgIGNvbnN0IGJvdHRvbSA9IHB5IDwgMyA/IHRldHJvbWluby5nZXQoZ2FtZS5Sb3RhdGUocHgsIHB5ICsgMSwgbkN1cnJlbnRSb3RhdGlvbikpIDogRU1QVFlfU1BBQ0VcbiAgICBjb25zdCBsZWZ0ID0gcHggPiAwID8gdGV0cm9taW5vLmdldChnYW1lLlJvdGF0ZShweCAtIDEsIHB5LCBuQ3VycmVudFJvdGF0aW9uKSkgOiBFTVBUWV9TUEFDRVxuXG4gICAgLy8gRHJhdyB0b3AgbGluZVxuICAgIGlmICh0b3AgPT09IEVNUFRZX1NQQUNFKSB7XG4gICAgICBkcmF3TGluZShcbiAgICAgICAgKG5DdXJyZW50WCArIHB4KSAqIGJsb2NrU2l6ZSArIG9mZnNldFgsXG4gICAgICAgIChuU2hhZG93WSArIHB5KSAqIGJsb2NrU2l6ZSArIG9mZnNldFksXG4gICAgICAgIChuQ3VycmVudFggKyBweCArIDEpICogYmxvY2tTaXplICsgb2Zmc2V0WCxcbiAgICAgICAgKG5TaGFkb3dZICsgcHkpICogYmxvY2tTaXplICsgb2Zmc2V0WVxuICAgICAgKVxuICAgIH1cbiAgICAvLyBEcmF3IHJpZ2h0IGxpbmVcbiAgICBpZiAocmlnaHQgPT09IEVNUFRZX1NQQUNFKSB7XG4gICAgICBkcmF3TGluZShcbiAgICAgICAgKG5DdXJyZW50WCArIHB4ICsgMSkgKiBibG9ja1NpemUgKyBvZmZzZXRYLFxuICAgICAgICAoblNoYWRvd1kgKyBweSkgKiBibG9ja1NpemUgKyBvZmZzZXRZLFxuICAgICAgICAobkN1cnJlbnRYICsgcHggKyAxKSAqIGJsb2NrU2l6ZSArIG9mZnNldFgsXG4gICAgICAgIChuU2hhZG93WSArIHB5ICsgMSkgKiBibG9ja1NpemUgKyBvZmZzZXRZXG4gICAgICApXG4gICAgfVxuICAgIC8vIERyYXcgYm90dG9tIGxpbmVcbiAgICBpZiAoYm90dG9tID09PSBFTVBUWV9TUEFDRSkge1xuICAgICAgZHJhd0xpbmUoXG4gICAgICAgIChuQ3VycmVudFggKyBweCArIDEpICogYmxvY2tTaXplICsgb2Zmc2V0WCxcbiAgICAgICAgKG5TaGFkb3dZICsgcHkgKyAxKSAqIGJsb2NrU2l6ZSArIG9mZnNldFksXG4gICAgICAgIChuQ3VycmVudFggKyBweCkgKiBibG9ja1NpemUgKyBvZmZzZXRYLFxuICAgICAgICAoblNoYWRvd1kgKyBweSArIDEpICogYmxvY2tTaXplICsgb2Zmc2V0WVxuICAgICAgKVxuICAgIH1cbiAgICAvLyBEcmF3IGxlZnQgbGluZVxuICAgIGlmIChsZWZ0ID09PSBFTVBUWV9TUEFDRSkge1xuICAgICAgZHJhd0xpbmUoXG4gICAgICAgIChuQ3VycmVudFggKyBweCkgKiBibG9ja1NpemUgKyBvZmZzZXRYLFxuICAgICAgICAoblNoYWRvd1kgKyBweSArIDEpICogYmxvY2tTaXplICsgb2Zmc2V0WSxcbiAgICAgICAgKG5DdXJyZW50WCArIHB4KSAqIGJsb2NrU2l6ZSArIG9mZnNldFgsXG4gICAgICAgIChuU2hhZG93WSArIHB5KSAqIGJsb2NrU2l6ZSArIG9mZnNldFlcbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZHJhd05leHRQaWVjZSA9IChweCwgcHksIG5OZXh0UGllY2UsIG5leHRUZXRyb21pbm8pID0+IHtcbiAgLy9EZWZpbmUgb2Zmc2V0IGZvciBuZXh0IHRldHJvbWlubyBkaXNwbGF5IGluIG9yZGVyIHRvIGNlbnRlciBpdCBpbnNpZGUgdGhlIGNhbnZhc1xuICBsZXQgbmV4dE9mZnNldFggPSAwXG4gIGxldCBuZXh0T2Zmc2V0WSA9IDBcbiAgaWYgKG5OZXh0UGllY2UgPT09IDApIHtcbiAgICBuZXh0T2Zmc2V0WCA9IDBcbiAgICBuZXh0T2Zmc2V0WSA9IDEyXG4gIH0gZWxzZSBpZiAobk5leHRQaWVjZSA9PT0gMSkge1xuICAgIG5leHRPZmZzZXRYID0gMjVcbiAgICBuZXh0T2Zmc2V0WSA9IDEwXG4gIH0gZWxzZSBpZiAobk5leHRQaWVjZSA9PT0gMikge1xuICAgIG5leHRPZmZzZXRYID0gMTJcbiAgICBuZXh0T2Zmc2V0WSA9IDEzXG4gIH0gZWxzZSBpZiAobk5leHRQaWVjZSA9PT0gMykge1xuICAgIG5leHRPZmZzZXRYID0gMTBcbiAgICBuZXh0T2Zmc2V0WSA9IDIzXG4gIH0gZWxzZSBpZiAobk5leHRQaWVjZSA9PT0gNCkge1xuICAgIG5leHRPZmZzZXRYID0gMTRcbiAgICBuZXh0T2Zmc2V0WSA9IDIzXG4gIH0gZWxzZSBpZiAobk5leHRQaWVjZSA9PT0gNSB8fCBuTmV4dFBpZWNlID09PSA2KSB7XG4gICAgbmV4dE9mZnNldFggPSAxMFxuICAgIG5leHRPZmZzZXRZID0gMjVcbiAgfVxuXG4gIC8vRHJhdyBOZXh0IFBpZWNlIGluIHNlcGVyYXRlIGNhbnZhcyAoY24pXG4gIGlmIChuZXh0VGV0cm9taW5vLmdldChweSAqIDQgKyBweCkgPT0gMSkge1xuICAgIGNuLnNoYWRvd0JsdXIgPSAxMlxuICAgIGNuLnNoYWRvd0NvbG9yID0gdGV0cm9taW5vQ29sb3JzW25OZXh0UGllY2VdXG4gICAgY24uc3Ryb2tlU3R5bGUgPSB0ZXRyb21pbm9Db2xvcnNbbk5leHRQaWVjZV1cbiAgICBjbi5saW5lV2lkdGggPSAyXG4gICAgLy9jaGFuZ2Ugb2Zmc2V0cyBiYXNlZCBvbiBwaWVjZVxuICAgIGNuLnN0cm9rZVJlY3QoXG4gICAgICBweCAqIChibG9ja1NpemUgLyAxLjI1KSArIG5leHRPZmZzZXRYLFxuICAgICAgcHkgKiAoYmxvY2tTaXplIC8gMS4yNSkgKyBuZXh0T2Zmc2V0WSxcbiAgICAgIGJsb2NrU2l6ZSAvIDEuMjUsXG4gICAgICBibG9ja1NpemUgLyAxLjI1XG4gICAgKVxuICB9XG4gIGNuLnNoYWRvd0JsdXIgPSAwXG4gIGNuLnNoYWRvd0NvbG9yID0gXCJibGFja1wiXG59XG5cbmNvbnN0IGRyYXdTY29yZUJvYXJkID0gZ2FtZSA9PiB7XG4gIC8vRHJhdyBzY29yZUJvYXJkIGluIHNlcGVyYXRlIGNhbnZhcyAoY3MpXG4gIGNzLmZvbnQgPSAnMjJweCBcIlByZXNzIFN0YXJ0IDJQXCInXG4gIGNzLmZpbGxTdHlsZSA9IFwiYXF1YW1hcmluZVwiXG4gIGNzLmZpbGxUZXh0KGBUT1BgLCAxNiwgc2NvcmVCb2FyZC5oZWlnaHQgLyAyIC0gNDApXG4gIGNzLmZpbGxUZXh0KGAke0hJR0hfU0NPUkV9YCwgMTYsIHNjb3JlQm9hcmQuaGVpZ2h0IC8gMiAtIDE0KVxuICBjcy5maWxsVGV4dChgU0NPUkVgLCAxNiwgc2NvcmVCb2FyZC5oZWlnaHQgLyAyICsgMjApXG4gIGNzLmZpbGxUZXh0KGAke2dhbWUuZ2V0U2NvcmUoKX1gLCAxNiwgc2NvcmVCb2FyZC5oZWlnaHQgLyAyICsgNDYpXG59XG5cbmNvbnN0IGRyYXdHYW1lRmllbGRCb3JkZXJzID0gKCkgPT4ge1xuICBjLnN0cm9rZVN0eWxlID0gXCJhcXVhbWFyaW5lXCJcbiAgY29uc3QgbGluZXMgPSBbXG4gICAgLy8gVG9wIGJvcmRlclxuICAgIFtvZmZzZXRYLCBvZmZzZXRZLCBvZmZzZXRYLCBuRmllbGRIZWlnaHQgKiBibG9ja1NpemUgKyBvZmZzZXRZXSxcblxuICAgIC8vIFRvcCBpbm5lciBib3JkZXJcbiAgICBbb2Zmc2V0WCArIGJsb2NrU2l6ZSwgb2Zmc2V0WSwgb2Zmc2V0WCArIGJsb2NrU2l6ZSwgbkZpZWxkSGVpZ2h0ICogYmxvY2tTaXplICsgb2Zmc2V0WSAtIGJsb2NrU2l6ZV0sXG5cbiAgICAvLyBSaWdodCBib3JkZXJcbiAgICBbbkZpZWxkV2lkdGggKiBibG9ja1NpemUgKyBvZmZzZXRYLCBvZmZzZXRZLCBuRmllbGRXaWR0aCAqIGJsb2NrU2l6ZSArIG9mZnNldFgsIG5GaWVsZEhlaWdodCAqIGJsb2NrU2l6ZSArIG9mZnNldFldLFxuXG4gICAgLy8gUmlnaHQgaW5uZXIgYm9yZGVyXG4gICAgW1xuICAgICAgbkZpZWxkV2lkdGggKiBibG9ja1NpemUgKyBvZmZzZXRYIC0gYmxvY2tTaXplLFxuICAgICAgb2Zmc2V0WSxcbiAgICAgIG5GaWVsZFdpZHRoICogYmxvY2tTaXplICsgb2Zmc2V0WCAtIGJsb2NrU2l6ZSxcbiAgICAgIG5GaWVsZEhlaWdodCAqIGJsb2NrU2l6ZSArIG9mZnNldFkgLSBibG9ja1NpemUsXG4gICAgXSxcblxuICAgIC8vIEJvdHRvbSBib3JkZXJcbiAgICBbXG4gICAgICBvZmZzZXRYLFxuICAgICAgbkZpZWxkSGVpZ2h0ICogYmxvY2tTaXplICsgb2Zmc2V0WSxcbiAgICAgIG5GaWVsZFdpZHRoICogYmxvY2tTaXplICsgb2Zmc2V0WCxcbiAgICAgIG5GaWVsZEhlaWdodCAqIGJsb2NrU2l6ZSArIG9mZnNldFksXG4gICAgXSxcblxuICAgIC8vIEJvdHRvbSBpbm5lciBib3JkZXJcbiAgICBbXG4gICAgICBvZmZzZXRYICsgYmxvY2tTaXplLFxuICAgICAgbkZpZWxkSGVpZ2h0ICogYmxvY2tTaXplICsgb2Zmc2V0WSAtIGJsb2NrU2l6ZSxcbiAgICAgIG5GaWVsZFdpZHRoICogYmxvY2tTaXplICsgb2Zmc2V0WCAtIGJsb2NrU2l6ZSxcbiAgICAgIG5GaWVsZEhlaWdodCAqIGJsb2NrU2l6ZSArIG9mZnNldFkgLSBibG9ja1NpemUsXG4gICAgXSxcbiAgXVxuICBsaW5lcy5mb3JFYWNoKGFyZ3MgPT4gZHJhd0xpbmUoLi4uYXJncykpXG59XG5cbi8vTE9DQUwgU1RPUkFHRSBTVFVGRjpcbmV4cG9ydCBmdW5jdGlvbiBzYXZlSGlnaFNjb3JlKGdhbWUpIHtcbiAgaWYgKGdhbWUuZ2V0U2NvcmUoKSA+IEhJR0hfU0NPUkUpIHtcbiAgICBISUdIX1NDT1JFID0gZ2FtZS5nZXRTY29yZSgpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoU2NvcmVcIiwgSElHSF9TQ09SRSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tcG9uZW50cyB9IGZyb20gXCIuL2NvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgZHJhdyB9IGZyb20gXCIuL2RyYXcuanNcIlxuXG4vL0lNUE9SVCBNVVNJQyBIRVJFXG5pbXBvcnQgeyB0ZXRyaXNNdXNpYyB9IGZyb20gXCIuL2FwcC5qc1wiXG5cbmV4cG9ydCBjb25zdCBpbml0RXZlbnRzID0gZ2FtZSA9PiB7XG4gIC8vTWFpbiBjb250YWluZXJzXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RDb250YWluZXJcIilcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmNvZGUgPT09IFwiS2V5WlwiKSB7XG4gICAgICBnYW1lLnJvdGF0ZVRldHJvbWlubygtMSlcbiAgICB9XG4gIH0pXG5cbiAgLy9MZWZ0LCByaWdodCBhbmQgZG93blxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgZ2FtZS5tb3ZlVGV0cm9taW5vKDApXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgIGdhbWUubW92ZVRldHJvbWlubygxKVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgIGdhbWUubW92ZVRldHJvbWlubygyKVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIFwiU3BhY2VcIjpcbiAgICAgICAgZ2FtZS5tb3ZlVGV0cm9taW5vKDMpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0R2FtZUNvbnRhaW5lclwiKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVPdmVyQ29udGFpbmVyXCIpKSByZXR1cm5cbiAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdXNlR2FtZUNvbnRhaW5lclwiKSkge1xuICAgICAgICAgIGdhbWUucGF1c2VHYW1lKClcbiAgICAgICAgICB0ZXRyaXNNdXNpYy5wYXVzZSgpXG4gICAgICAgICAgY29tcG9uZW50cy5kaXNwbGF5UGF1c2VQYWdlKClcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdXNlR2FtZUNvbnRhaW5lclwiKSkge1xuICAgICAgICAgIGdhbWUucmVzdW1lR2FtZSgpXG4gICAgICAgICAgdGV0cmlzTXVzaWMucGxheSgpXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXVzZUdhbWVDb250YWluZXJcIikucmVtb3ZlKClcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfSlcblxuICBwcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT0gXCJwbGF5QnV0dG9uXCIpIHtcbiAgICAgIGdhbWUucmVzdW1lR2FtZSgpIC8vU3RvcCB1c2VyIGlucHV0IHVudGlsIGdhbWUgc3RhcnRzXG4gICAgICBnYW1lLmdhbWVMb29wKClcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRHYW1lQ29udGFpbmVyXCIpLnJlbW92ZSgpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlbHBCb3hcIikucmVtb3ZlKClcbiAgICAgIC8vUGxheSBnYW1lIGF1ZGlvOlxuICAgICAgdGV0cmlzTXVzaWMub25jYW5wbGF5dGhyb3VnaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGV0cmlzTXVzaWMucGxheSgpLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gcGxheSBhdWRpbzpcIiwgZXJyb3IpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0ZXRyaXNNdXNpYy5jdXJyZW50VGltZSA9IDBcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0LmlkID09IFwicGxheUFnYWluQnV0dG9uXCIpIHtcbiAgICAgIGdhbWUucmVzdGFydEdhbWUoKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lT3ZlckNvbnRhaW5lclwiKS5yZW1vdmUoKVxuICAgICAgdGV0cmlzTXVzaWMuY3VycmVudFRpbWUgPSAwXG4gICAgICB0ZXRyaXNNdXNpYy5wbGF5KClcbiAgICAgIGdhbWUuZ2FtZUxvb3AoKVxuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwicXVpdEJ1dHRvblwiKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVPdmVyQ29udGFpbmVyXCIpLnJlbW92ZSgpXG4gICAgICBjb21wb25lbnRzLmRpc3BsYXlTdGFydFBhZ2UoKVxuICAgICAgY29tcG9uZW50cy5kaXNwbGF5SGVscEJveCgpXG4gICAgICBnYW1lLnJlc3RhcnRHYW1lKClcbiAgICAgIGdhbWUucGF1c2VHYW1lKClcbiAgICAgIGRyYXcoZ2FtZSlcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0LmlkID09IFwicmVzdW1lQnV0dG9uXCIpIHtcbiAgICAgIGdhbWUucmVzdW1lR2FtZSgpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdXNlR2FtZUNvbnRhaW5lclwiKS5yZW1vdmUoKVxuICAgICAgdGV0cmlzTXVzaWMucGxheSgpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IG11dGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm11dGVCdXR0b25cIilcbiAgbXV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSBcIm11dGVCdXR0b25cIiB8fCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtdXRlQ2xpY2thYmxlXCIpKSB7XG4gICAgICBjb21wb25lbnRzLnRvZ2dsZU11dGVCdXR0b24oKVxuICAgICAgbXV0ZUJ1dHRvbi5ibHVyKClcbiAgICB9XG4gIH0pXG59XG4iLCJ2YXIgTW9kdWxlPXR5cGVvZiBNb2R1bGUhPVwidW5kZWZpbmVkXCI/TW9kdWxlOnt9O3ZhciBtb2R1bGVPdmVycmlkZXM9T2JqZWN0LmFzc2lnbih7fSxNb2R1bGUpO3ZhciBhcmd1bWVudHNfPVtdO3ZhciB0aGlzUHJvZ3JhbT1cIi4vdGhpcy5wcm9ncmFtXCI7dmFyIHF1aXRfPShzdGF0dXMsdG9UaHJvdyk9Pnt0aHJvdyB0b1Rocm93fTt2YXIgRU5WSVJPTk1FTlRfSVNfV0VCPXRydWU7dmFyIEVOVklST05NRU5UX0lTX1dPUktFUj1mYWxzZTt2YXIgc2NyaXB0RGlyZWN0b3J5PVwiXCI7ZnVuY3Rpb24gbG9jYXRlRmlsZShwYXRoKXtpZihNb2R1bGVbXCJsb2NhdGVGaWxlXCJdKXtyZXR1cm4gTW9kdWxlW1wibG9jYXRlRmlsZVwiXShwYXRoLHNjcmlwdERpcmVjdG9yeSl9cmV0dXJuIHNjcmlwdERpcmVjdG9yeStwYXRofXZhciByZWFkXyxyZWFkQXN5bmMscmVhZEJpbmFyeSxzZXRXaW5kb3dUaXRsZTtpZihFTlZJUk9OTUVOVF9JU19XRUJ8fEVOVklST05NRU5UX0lTX1dPUktFUil7aWYoRU5WSVJPTk1FTlRfSVNfV09SS0VSKXtzY3JpcHREaXJlY3Rvcnk9c2VsZi5sb2NhdGlvbi5ocmVmfWVsc2UgaWYodHlwZW9mIGRvY3VtZW50IT1cInVuZGVmaW5lZFwiJiZkb2N1bWVudC5jdXJyZW50U2NyaXB0KXtzY3JpcHREaXJlY3Rvcnk9ZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmN9aWYoc2NyaXB0RGlyZWN0b3J5LmluZGV4T2YoXCJibG9iOlwiKSE9PTApe3NjcmlwdERpcmVjdG9yeT1zY3JpcHREaXJlY3Rvcnkuc3Vic3RyKDAsc2NyaXB0RGlyZWN0b3J5LnJlcGxhY2UoL1s/I10uKi8sXCJcIikubGFzdEluZGV4T2YoXCIvXCIpKzEpfWVsc2V7c2NyaXB0RGlyZWN0b3J5PVwiXCJ9e3JlYWRfPXVybD0+e3ZhciB4aHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3hoci5vcGVuKFwiR0VUXCIsdXJsLGZhbHNlKTt4aHIuc2VuZChudWxsKTtyZXR1cm4geGhyLnJlc3BvbnNlVGV4dH07aWYoRU5WSVJPTk1FTlRfSVNfV09SS0VSKXtyZWFkQmluYXJ5PXVybD0+e3ZhciB4aHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3hoci5vcGVuKFwiR0VUXCIsdXJsLGZhbHNlKTt4aHIucmVzcG9uc2VUeXBlPVwiYXJyYXlidWZmZXJcIjt4aHIuc2VuZChudWxsKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoeGhyLnJlc3BvbnNlKX19cmVhZEFzeW5jPSh1cmwsb25sb2FkLG9uZXJyb3IpPT57dmFyIHhocj1uZXcgWE1MSHR0cFJlcXVlc3Q7eGhyLm9wZW4oXCJHRVRcIix1cmwsdHJ1ZSk7eGhyLnJlc3BvbnNlVHlwZT1cImFycmF5YnVmZmVyXCI7eGhyLm9ubG9hZD0oKT0+e2lmKHhoci5zdGF0dXM9PTIwMHx8eGhyLnN0YXR1cz09MCYmeGhyLnJlc3BvbnNlKXtvbmxvYWQoeGhyLnJlc3BvbnNlKTtyZXR1cm59b25lcnJvcigpfTt4aHIub25lcnJvcj1vbmVycm9yO3hoci5zZW5kKG51bGwpfX1zZXRXaW5kb3dUaXRsZT10aXRsZT0+ZG9jdW1lbnQudGl0bGU9dGl0bGV9ZWxzZXt9dmFyIG91dD1Nb2R1bGVbXCJwcmludFwiXXx8Y29uc29sZS5sb2cuYmluZChjb25zb2xlKTt2YXIgZXJyPU1vZHVsZVtcInByaW50RXJyXCJdfHxjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSk7T2JqZWN0LmFzc2lnbihNb2R1bGUsbW9kdWxlT3ZlcnJpZGVzKTttb2R1bGVPdmVycmlkZXM9bnVsbDtpZihNb2R1bGVbXCJhcmd1bWVudHNcIl0pYXJndW1lbnRzXz1Nb2R1bGVbXCJhcmd1bWVudHNcIl07aWYoTW9kdWxlW1widGhpc1Byb2dyYW1cIl0pdGhpc1Byb2dyYW09TW9kdWxlW1widGhpc1Byb2dyYW1cIl07aWYoTW9kdWxlW1wicXVpdFwiXSlxdWl0Xz1Nb2R1bGVbXCJxdWl0XCJdO3ZhciB3YXNtQmluYXJ5O2lmKE1vZHVsZVtcIndhc21CaW5hcnlcIl0pd2FzbUJpbmFyeT1Nb2R1bGVbXCJ3YXNtQmluYXJ5XCJdO3ZhciBub0V4aXRSdW50aW1lPU1vZHVsZVtcIm5vRXhpdFJ1bnRpbWVcIl18fHRydWU7aWYodHlwZW9mIFdlYkFzc2VtYmx5IT1cIm9iamVjdFwiKXthYm9ydChcIm5vIG5hdGl2ZSB3YXNtIHN1cHBvcnQgZGV0ZWN0ZWRcIil9dmFyIHdhc21NZW1vcnk7dmFyIEFCT1JUPWZhbHNlO3ZhciBFWElUU1RBVFVTO2Z1bmN0aW9uIGFzc2VydChjb25kaXRpb24sdGV4dCl7aWYoIWNvbmRpdGlvbil7YWJvcnQodGV4dCl9fXZhciBIRUFQOCxIRUFQVTgsSEVBUDE2LEhFQVBVMTYsSEVBUDMyLEhFQVBVMzIsSEVBUEYzMixIRUFQRjY0O2Z1bmN0aW9uIHVwZGF0ZU1lbW9yeVZpZXdzKCl7dmFyIGI9d2FzbU1lbW9yeS5idWZmZXI7TW9kdWxlW1wiSEVBUDhcIl09SEVBUDg9bmV3IEludDhBcnJheShiKTtNb2R1bGVbXCJIRUFQMTZcIl09SEVBUDE2PW5ldyBJbnQxNkFycmF5KGIpO01vZHVsZVtcIkhFQVAzMlwiXT1IRUFQMzI9bmV3IEludDMyQXJyYXkoYik7TW9kdWxlW1wiSEVBUFU4XCJdPUhFQVBVOD1uZXcgVWludDhBcnJheShiKTtNb2R1bGVbXCJIRUFQVTE2XCJdPUhFQVBVMTY9bmV3IFVpbnQxNkFycmF5KGIpO01vZHVsZVtcIkhFQVBVMzJcIl09SEVBUFUzMj1uZXcgVWludDMyQXJyYXkoYik7TW9kdWxlW1wiSEVBUEYzMlwiXT1IRUFQRjMyPW5ldyBGbG9hdDMyQXJyYXkoYik7TW9kdWxlW1wiSEVBUEY2NFwiXT1IRUFQRjY0PW5ldyBGbG9hdDY0QXJyYXkoYil9dmFyIHdhc21UYWJsZTt2YXIgX19BVFBSRVJVTl9fPVtdO3ZhciBfX0FUSU5JVF9fPVtdO3ZhciBfX0FUUE9TVFJVTl9fPVtdO3ZhciBydW50aW1lSW5pdGlhbGl6ZWQ9ZmFsc2U7ZnVuY3Rpb24gcHJlUnVuKCl7aWYoTW9kdWxlW1wicHJlUnVuXCJdKXtpZih0eXBlb2YgTW9kdWxlW1wicHJlUnVuXCJdPT1cImZ1bmN0aW9uXCIpTW9kdWxlW1wicHJlUnVuXCJdPVtNb2R1bGVbXCJwcmVSdW5cIl1dO3doaWxlKE1vZHVsZVtcInByZVJ1blwiXS5sZW5ndGgpe2FkZE9uUHJlUnVuKE1vZHVsZVtcInByZVJ1blwiXS5zaGlmdCgpKX19Y2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVFBSRVJVTl9fKX1mdW5jdGlvbiBpbml0UnVudGltZSgpe3J1bnRpbWVJbml0aWFsaXplZD10cnVlO2NhbGxSdW50aW1lQ2FsbGJhY2tzKF9fQVRJTklUX18pfWZ1bmN0aW9uIHBvc3RSdW4oKXtpZihNb2R1bGVbXCJwb3N0UnVuXCJdKXtpZih0eXBlb2YgTW9kdWxlW1wicG9zdFJ1blwiXT09XCJmdW5jdGlvblwiKU1vZHVsZVtcInBvc3RSdW5cIl09W01vZHVsZVtcInBvc3RSdW5cIl1dO3doaWxlKE1vZHVsZVtcInBvc3RSdW5cIl0ubGVuZ3RoKXthZGRPblBvc3RSdW4oTW9kdWxlW1wicG9zdFJ1blwiXS5zaGlmdCgpKX19Y2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVFBPU1RSVU5fXyl9ZnVuY3Rpb24gYWRkT25QcmVSdW4oY2Ipe19fQVRQUkVSVU5fXy51bnNoaWZ0KGNiKX1mdW5jdGlvbiBhZGRPbkluaXQoY2Ipe19fQVRJTklUX18udW5zaGlmdChjYil9ZnVuY3Rpb24gYWRkT25Qb3N0UnVuKGNiKXtfX0FUUE9TVFJVTl9fLnVuc2hpZnQoY2IpfXZhciBydW5EZXBlbmRlbmNpZXM9MDt2YXIgcnVuRGVwZW5kZW5jeVdhdGNoZXI9bnVsbDt2YXIgZGVwZW5kZW5jaWVzRnVsZmlsbGVkPW51bGw7ZnVuY3Rpb24gYWRkUnVuRGVwZW5kZW5jeShpZCl7cnVuRGVwZW5kZW5jaWVzKys7aWYoTW9kdWxlW1wibW9uaXRvclJ1bkRlcGVuZGVuY2llc1wiXSl7TW9kdWxlW1wibW9uaXRvclJ1bkRlcGVuZGVuY2llc1wiXShydW5EZXBlbmRlbmNpZXMpfX1mdW5jdGlvbiByZW1vdmVSdW5EZXBlbmRlbmN5KGlkKXtydW5EZXBlbmRlbmNpZXMtLTtpZihNb2R1bGVbXCJtb25pdG9yUnVuRGVwZW5kZW5jaWVzXCJdKXtNb2R1bGVbXCJtb25pdG9yUnVuRGVwZW5kZW5jaWVzXCJdKHJ1bkRlcGVuZGVuY2llcyl9aWYocnVuRGVwZW5kZW5jaWVzPT0wKXtpZihydW5EZXBlbmRlbmN5V2F0Y2hlciE9PW51bGwpe2NsZWFySW50ZXJ2YWwocnVuRGVwZW5kZW5jeVdhdGNoZXIpO3J1bkRlcGVuZGVuY3lXYXRjaGVyPW51bGx9aWYoZGVwZW5kZW5jaWVzRnVsZmlsbGVkKXt2YXIgY2FsbGJhY2s9ZGVwZW5kZW5jaWVzRnVsZmlsbGVkO2RlcGVuZGVuY2llc0Z1bGZpbGxlZD1udWxsO2NhbGxiYWNrKCl9fX1mdW5jdGlvbiBhYm9ydCh3aGF0KXtpZihNb2R1bGVbXCJvbkFib3J0XCJdKXtNb2R1bGVbXCJvbkFib3J0XCJdKHdoYXQpfXdoYXQ9XCJBYm9ydGVkKFwiK3doYXQrXCIpXCI7ZXJyKHdoYXQpO0FCT1JUPXRydWU7RVhJVFNUQVRVUz0xO3doYXQrPVwiLiBCdWlsZCB3aXRoIC1zQVNTRVJUSU9OUyBmb3IgbW9yZSBpbmZvLlwiO3ZhciBlPW5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3Iod2hhdCk7dGhyb3cgZX12YXIgZGF0YVVSSVByZWZpeD1cImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxcIjtmdW5jdGlvbiBpc0RhdGFVUkkoZmlsZW5hbWUpe3JldHVybiBmaWxlbmFtZS5zdGFydHNXaXRoKGRhdGFVUklQcmVmaXgpfXZhciB3YXNtQmluYXJ5RmlsZTt3YXNtQmluYXJ5RmlsZT1cInRldHJpcy53YXNtXCI7aWYoIWlzRGF0YVVSSSh3YXNtQmluYXJ5RmlsZSkpe3dhc21CaW5hcnlGaWxlPWxvY2F0ZUZpbGUod2FzbUJpbmFyeUZpbGUpfWZ1bmN0aW9uIGdldEJpbmFyeShmaWxlKXt0cnl7aWYoZmlsZT09d2FzbUJpbmFyeUZpbGUmJndhc21CaW5hcnkpe3JldHVybiBuZXcgVWludDhBcnJheSh3YXNtQmluYXJ5KX1pZihyZWFkQmluYXJ5KXtyZXR1cm4gcmVhZEJpbmFyeShmaWxlKX10aHJvd1wiYm90aCBhc3luYyBhbmQgc3luYyBmZXRjaGluZyBvZiB0aGUgd2FzbSBmYWlsZWRcIn1jYXRjaChlcnIpe2Fib3J0KGVycil9fWZ1bmN0aW9uIGdldEJpbmFyeVByb21pc2UoYmluYXJ5RmlsZSl7aWYoIXdhc21CaW5hcnkmJihFTlZJUk9OTUVOVF9JU19XRUJ8fEVOVklST05NRU5UX0lTX1dPUktFUikpe2lmKHR5cGVvZiBmZXRjaD09XCJmdW5jdGlvblwiKXtyZXR1cm4gZmV0Y2goYmluYXJ5RmlsZSx7Y3JlZGVudGlhbHM6XCJzYW1lLW9yaWdpblwifSkudGhlbihyZXNwb25zZT0+e2lmKCFyZXNwb25zZVtcIm9rXCJdKXt0aHJvd1wiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnXCIrYmluYXJ5RmlsZStcIidcIn1yZXR1cm4gcmVzcG9uc2VbXCJhcnJheUJ1ZmZlclwiXSgpfSkuY2F0Y2goKCk9PmdldEJpbmFyeShiaW5hcnlGaWxlKSl9fXJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5nZXRCaW5hcnkoYmluYXJ5RmlsZSkpfWZ1bmN0aW9uIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIoYmluYXJ5RmlsZSxpbXBvcnRzLHJlY2VpdmVyKXtyZXR1cm4gZ2V0QmluYXJ5UHJvbWlzZShiaW5hcnlGaWxlKS50aGVuKGJpbmFyeT0+e3JldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShiaW5hcnksaW1wb3J0cyl9KS50aGVuKGluc3RhbmNlPT57cmV0dXJuIGluc3RhbmNlfSkudGhlbihyZWNlaXZlcixyZWFzb249PntlcnIoXCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiBcIityZWFzb24pO2Fib3J0KHJlYXNvbil9KX1mdW5jdGlvbiBpbnN0YW50aWF0ZUFzeW5jKGJpbmFyeSxiaW5hcnlGaWxlLGltcG9ydHMsY2FsbGJhY2spe2lmKCFiaW5hcnkmJnR5cGVvZiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZz09XCJmdW5jdGlvblwiJiYhaXNEYXRhVVJJKGJpbmFyeUZpbGUpJiZ0eXBlb2YgZmV0Y2g9PVwiZnVuY3Rpb25cIil7cmV0dXJuIGZldGNoKGJpbmFyeUZpbGUse2NyZWRlbnRpYWxzOlwic2FtZS1vcmlnaW5cIn0pLnRoZW4ocmVzcG9uc2U9Pnt2YXIgcmVzdWx0PVdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHJlc3BvbnNlLGltcG9ydHMpO3JldHVybiByZXN1bHQudGhlbihjYWxsYmFjayxmdW5jdGlvbihyZWFzb24pe2VycihcIndhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiBcIityZWFzb24pO2VycihcImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uXCIpO3JldHVybiBpbnN0YW50aWF0ZUFycmF5QnVmZmVyKGJpbmFyeUZpbGUsaW1wb3J0cyxjYWxsYmFjayl9KX0pfWVsc2V7cmV0dXJuIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIoYmluYXJ5RmlsZSxpbXBvcnRzLGNhbGxiYWNrKX19ZnVuY3Rpb24gY3JlYXRlV2FzbSgpe3ZhciBpbmZvPXtcImFcIjp3YXNtSW1wb3J0c307ZnVuY3Rpb24gcmVjZWl2ZUluc3RhbmNlKGluc3RhbmNlLG1vZHVsZSl7dmFyIGV4cG9ydHM9aW5zdGFuY2UuZXhwb3J0cztNb2R1bGVbXCJhc21cIl09ZXhwb3J0czt3YXNtTWVtb3J5PU1vZHVsZVtcImFzbVwiXVtcInVcIl07dXBkYXRlTWVtb3J5Vmlld3MoKTt3YXNtVGFibGU9TW9kdWxlW1wiYXNtXCJdW1wid1wiXTthZGRPbkluaXQoTW9kdWxlW1wiYXNtXCJdW1widlwiXSk7cmVtb3ZlUnVuRGVwZW5kZW5jeShcIndhc20taW5zdGFudGlhdGVcIik7cmV0dXJuIGV4cG9ydHN9YWRkUnVuRGVwZW5kZW5jeShcIndhc20taW5zdGFudGlhdGVcIik7ZnVuY3Rpb24gcmVjZWl2ZUluc3RhbnRpYXRpb25SZXN1bHQocmVzdWx0KXtyZWNlaXZlSW5zdGFuY2UocmVzdWx0W1wiaW5zdGFuY2VcIl0pfWlmKE1vZHVsZVtcImluc3RhbnRpYXRlV2FzbVwiXSl7dHJ5e3JldHVybiBNb2R1bGVbXCJpbnN0YW50aWF0ZVdhc21cIl0oaW5mbyxyZWNlaXZlSW5zdGFuY2UpfWNhdGNoKGUpe2VycihcIk1vZHVsZS5pbnN0YW50aWF0ZVdhc20gY2FsbGJhY2sgZmFpbGVkIHdpdGggZXJyb3I6IFwiK2UpO3JldHVybiBmYWxzZX19aW5zdGFudGlhdGVBc3luYyh3YXNtQmluYXJ5LHdhc21CaW5hcnlGaWxlLGluZm8scmVjZWl2ZUluc3RhbnRpYXRpb25SZXN1bHQpO3JldHVybnt9fWZ1bmN0aW9uIGNhbGxSdW50aW1lQ2FsbGJhY2tzKGNhbGxiYWNrcyl7d2hpbGUoY2FsbGJhY2tzLmxlbmd0aD4wKXtjYWxsYmFja3Muc2hpZnQoKShNb2R1bGUpfX1mdW5jdGlvbiBFeGNlcHRpb25JbmZvKGV4Y1B0cil7dGhpcy5leGNQdHI9ZXhjUHRyO3RoaXMucHRyPWV4Y1B0ci0yNDt0aGlzLnNldF90eXBlPWZ1bmN0aW9uKHR5cGUpe0hFQVBVMzJbdGhpcy5wdHIrND4+Ml09dHlwZX07dGhpcy5nZXRfdHlwZT1mdW5jdGlvbigpe3JldHVybiBIRUFQVTMyW3RoaXMucHRyKzQ+PjJdfTt0aGlzLnNldF9kZXN0cnVjdG9yPWZ1bmN0aW9uKGRlc3RydWN0b3Ipe0hFQVBVMzJbdGhpcy5wdHIrOD4+Ml09ZGVzdHJ1Y3Rvcn07dGhpcy5nZXRfZGVzdHJ1Y3Rvcj1mdW5jdGlvbigpe3JldHVybiBIRUFQVTMyW3RoaXMucHRyKzg+PjJdfTt0aGlzLnNldF9jYXVnaHQ9ZnVuY3Rpb24oY2F1Z2h0KXtjYXVnaHQ9Y2F1Z2h0PzE6MDtIRUFQOFt0aGlzLnB0cisxMj4+MF09Y2F1Z2h0fTt0aGlzLmdldF9jYXVnaHQ9ZnVuY3Rpb24oKXtyZXR1cm4gSEVBUDhbdGhpcy5wdHIrMTI+PjBdIT0wfTt0aGlzLnNldF9yZXRocm93bj1mdW5jdGlvbihyZXRocm93bil7cmV0aHJvd249cmV0aHJvd24/MTowO0hFQVA4W3RoaXMucHRyKzEzPj4wXT1yZXRocm93bn07dGhpcy5nZXRfcmV0aHJvd249ZnVuY3Rpb24oKXtyZXR1cm4gSEVBUDhbdGhpcy5wdHIrMTM+PjBdIT0wfTt0aGlzLmluaXQ9ZnVuY3Rpb24odHlwZSxkZXN0cnVjdG9yKXt0aGlzLnNldF9hZGp1c3RlZF9wdHIoMCk7dGhpcy5zZXRfdHlwZSh0eXBlKTt0aGlzLnNldF9kZXN0cnVjdG9yKGRlc3RydWN0b3IpfTt0aGlzLnNldF9hZGp1c3RlZF9wdHI9ZnVuY3Rpb24oYWRqdXN0ZWRQdHIpe0hFQVBVMzJbdGhpcy5wdHIrMTY+PjJdPWFkanVzdGVkUHRyfTt0aGlzLmdldF9hZGp1c3RlZF9wdHI9ZnVuY3Rpb24oKXtyZXR1cm4gSEVBUFUzMlt0aGlzLnB0cisxNj4+Ml19O3RoaXMuZ2V0X2V4Y2VwdGlvbl9wdHI9ZnVuY3Rpb24oKXt2YXIgaXNQb2ludGVyPV9fX2N4YV9pc19wb2ludGVyX3R5cGUodGhpcy5nZXRfdHlwZSgpKTtpZihpc1BvaW50ZXIpe3JldHVybiBIRUFQVTMyW3RoaXMuZXhjUHRyPj4yXX12YXIgYWRqdXN0ZWQ9dGhpcy5nZXRfYWRqdXN0ZWRfcHRyKCk7aWYoYWRqdXN0ZWQhPT0wKXJldHVybiBhZGp1c3RlZDtyZXR1cm4gdGhpcy5leGNQdHJ9fXZhciBleGNlcHRpb25MYXN0PTA7dmFyIHVuY2F1Z2h0RXhjZXB0aW9uQ291bnQ9MDtmdW5jdGlvbiBfX19jeGFfdGhyb3cocHRyLHR5cGUsZGVzdHJ1Y3Rvcil7dmFyIGluZm89bmV3IEV4Y2VwdGlvbkluZm8ocHRyKTtpbmZvLmluaXQodHlwZSxkZXN0cnVjdG9yKTtleGNlcHRpb25MYXN0PXB0cjt1bmNhdWdodEV4Y2VwdGlvbkNvdW50Kys7dGhyb3cgZXhjZXB0aW9uTGFzdH1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9iaWdpbnQocHJpbWl0aXZlVHlwZSxuYW1lLHNpemUsbWluUmFuZ2UsbWF4UmFuZ2Upe31mdW5jdGlvbiBnZXRTaGlmdEZyb21TaXplKHNpemUpe3N3aXRjaChzaXplKXtjYXNlIDE6cmV0dXJuIDA7Y2FzZSAyOnJldHVybiAxO2Nhc2UgNDpyZXR1cm4gMjtjYXNlIDg6cmV0dXJuIDM7ZGVmYXVsdDp0aHJvdyBuZXcgVHlwZUVycm9yKGBVbmtub3duIHR5cGUgc2l6ZTogJHtzaXplfWApfX1mdW5jdGlvbiBlbWJpbmRfaW5pdF9jaGFyQ29kZXMoKXt2YXIgY29kZXM9bmV3IEFycmF5KDI1Nik7Zm9yKHZhciBpPTA7aTwyNTY7KytpKXtjb2Rlc1tpXT1TdHJpbmcuZnJvbUNoYXJDb2RlKGkpfWVtYmluZF9jaGFyQ29kZXM9Y29kZXN9dmFyIGVtYmluZF9jaGFyQ29kZXM9dW5kZWZpbmVkO2Z1bmN0aW9uIHJlYWRMYXRpbjFTdHJpbmcocHRyKXt2YXIgcmV0PVwiXCI7dmFyIGM9cHRyO3doaWxlKEhFQVBVOFtjXSl7cmV0Kz1lbWJpbmRfY2hhckNvZGVzW0hFQVBVOFtjKytdXX1yZXR1cm4gcmV0fXZhciBhd2FpdGluZ0RlcGVuZGVuY2llcz17fTt2YXIgcmVnaXN0ZXJlZFR5cGVzPXt9O3ZhciB0eXBlRGVwZW5kZW5jaWVzPXt9O3ZhciBjaGFyXzA9NDg7dmFyIGNoYXJfOT01NztmdW5jdGlvbiBtYWtlTGVnYWxGdW5jdGlvbk5hbWUobmFtZSl7aWYodW5kZWZpbmVkPT09bmFtZSl7cmV0dXJuXCJfdW5rbm93blwifW5hbWU9bmFtZS5yZXBsYWNlKC9bXmEtekEtWjAtOV9dL2csXCIkXCIpO3ZhciBmPW5hbWUuY2hhckNvZGVBdCgwKTtpZihmPj1jaGFyXzAmJmY8PWNoYXJfOSl7cmV0dXJuYF8ke25hbWV9YH1yZXR1cm4gbmFtZX1mdW5jdGlvbiBjcmVhdGVOYW1lZEZ1bmN0aW9uKG5hbWUsYm9keSl7bmFtZT1tYWtlTGVnYWxGdW5jdGlvbk5hbWUobmFtZSk7cmV0dXJue1tuYW1lXTpmdW5jdGlvbigpe3JldHVybiBib2R5LmFwcGx5KHRoaXMsYXJndW1lbnRzKX19W25hbWVdfWZ1bmN0aW9uIGV4dGVuZEVycm9yKGJhc2VFcnJvclR5cGUsZXJyb3JOYW1lKXt2YXIgZXJyb3JDbGFzcz1jcmVhdGVOYW1lZEZ1bmN0aW9uKGVycm9yTmFtZSxmdW5jdGlvbihtZXNzYWdlKXt0aGlzLm5hbWU9ZXJyb3JOYW1lO3RoaXMubWVzc2FnZT1tZXNzYWdlO3ZhciBzdGFjaz1uZXcgRXJyb3IobWVzc2FnZSkuc3RhY2s7aWYoc3RhY2shPT11bmRlZmluZWQpe3RoaXMuc3RhY2s9dGhpcy50b1N0cmluZygpK1wiXFxuXCIrc3RhY2sucmVwbGFjZSgvXkVycm9yKDpbXlxcbl0qKT9cXG4vLFwiXCIpfX0pO2Vycm9yQ2xhc3MucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoYmFzZUVycm9yVHlwZS5wcm90b3R5cGUpO2Vycm9yQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yPWVycm9yQ2xhc3M7ZXJyb3JDbGFzcy5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtpZih0aGlzLm1lc3NhZ2U9PT11bmRlZmluZWQpe3JldHVybiB0aGlzLm5hbWV9ZWxzZXtyZXR1cm5gJHt0aGlzLm5hbWV9OiAke3RoaXMubWVzc2FnZX1gfX07cmV0dXJuIGVycm9yQ2xhc3N9dmFyIEJpbmRpbmdFcnJvcj11bmRlZmluZWQ7ZnVuY3Rpb24gdGhyb3dCaW5kaW5nRXJyb3IobWVzc2FnZSl7dGhyb3cgbmV3IEJpbmRpbmdFcnJvcihtZXNzYWdlKX12YXIgSW50ZXJuYWxFcnJvcj11bmRlZmluZWQ7ZnVuY3Rpb24gdGhyb3dJbnRlcm5hbEVycm9yKG1lc3NhZ2Upe3Rocm93IG5ldyBJbnRlcm5hbEVycm9yKG1lc3NhZ2UpfWZ1bmN0aW9uIHdoZW5EZXBlbmRlbnRUeXBlc0FyZVJlc29sdmVkKG15VHlwZXMsZGVwZW5kZW50VHlwZXMsZ2V0VHlwZUNvbnZlcnRlcnMpe215VHlwZXMuZm9yRWFjaChmdW5jdGlvbih0eXBlKXt0eXBlRGVwZW5kZW5jaWVzW3R5cGVdPWRlcGVuZGVudFR5cGVzfSk7ZnVuY3Rpb24gb25Db21wbGV0ZSh0eXBlQ29udmVydGVycyl7dmFyIG15VHlwZUNvbnZlcnRlcnM9Z2V0VHlwZUNvbnZlcnRlcnModHlwZUNvbnZlcnRlcnMpO2lmKG15VHlwZUNvbnZlcnRlcnMubGVuZ3RoIT09bXlUeXBlcy5sZW5ndGgpe3Rocm93SW50ZXJuYWxFcnJvcihcIk1pc21hdGNoZWQgdHlwZSBjb252ZXJ0ZXIgY291bnRcIil9Zm9yKHZhciBpPTA7aTxteVR5cGVzLmxlbmd0aDsrK2kpe3JlZ2lzdGVyVHlwZShteVR5cGVzW2ldLG15VHlwZUNvbnZlcnRlcnNbaV0pfX12YXIgdHlwZUNvbnZlcnRlcnM9bmV3IEFycmF5KGRlcGVuZGVudFR5cGVzLmxlbmd0aCk7dmFyIHVucmVnaXN0ZXJlZFR5cGVzPVtdO3ZhciByZWdpc3RlcmVkPTA7ZGVwZW5kZW50VHlwZXMuZm9yRWFjaCgoZHQsaSk9PntpZihyZWdpc3RlcmVkVHlwZXMuaGFzT3duUHJvcGVydHkoZHQpKXt0eXBlQ29udmVydGVyc1tpXT1yZWdpc3RlcmVkVHlwZXNbZHRdfWVsc2V7dW5yZWdpc3RlcmVkVHlwZXMucHVzaChkdCk7aWYoIWF3YWl0aW5nRGVwZW5kZW5jaWVzLmhhc093blByb3BlcnR5KGR0KSl7YXdhaXRpbmdEZXBlbmRlbmNpZXNbZHRdPVtdfWF3YWl0aW5nRGVwZW5kZW5jaWVzW2R0XS5wdXNoKCgpPT57dHlwZUNvbnZlcnRlcnNbaV09cmVnaXN0ZXJlZFR5cGVzW2R0XTsrK3JlZ2lzdGVyZWQ7aWYocmVnaXN0ZXJlZD09PXVucmVnaXN0ZXJlZFR5cGVzLmxlbmd0aCl7b25Db21wbGV0ZSh0eXBlQ29udmVydGVycyl9fSl9fSk7aWYoMD09PXVucmVnaXN0ZXJlZFR5cGVzLmxlbmd0aCl7b25Db21wbGV0ZSh0eXBlQ29udmVydGVycyl9fWZ1bmN0aW9uIHJlZ2lzdGVyVHlwZShyYXdUeXBlLHJlZ2lzdGVyZWRJbnN0YW5jZSxvcHRpb25zPXt9KXtpZighKFwiYXJnUGFja0FkdmFuY2VcImluIHJlZ2lzdGVyZWRJbnN0YW5jZSkpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlXCIpfXZhciBuYW1lPXJlZ2lzdGVyZWRJbnN0YW5jZS5uYW1lO2lmKCFyYXdUeXBlKXt0aHJvd0JpbmRpbmdFcnJvcihgdHlwZSBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgYSBwb3NpdGl2ZSBpbnRlZ2VyIHR5cGVpZCBwb2ludGVyYCl9aWYocmVnaXN0ZXJlZFR5cGVzLmhhc093blByb3BlcnR5KHJhd1R5cGUpKXtpZihvcHRpb25zLmlnbm9yZUR1cGxpY2F0ZVJlZ2lzdHJhdGlvbnMpe3JldHVybn1lbHNle3Rocm93QmluZGluZ0Vycm9yKGBDYW5ub3QgcmVnaXN0ZXIgdHlwZSAnJHtuYW1lfScgdHdpY2VgKX19cmVnaXN0ZXJlZFR5cGVzW3Jhd1R5cGVdPXJlZ2lzdGVyZWRJbnN0YW5jZTtkZWxldGUgdHlwZURlcGVuZGVuY2llc1tyYXdUeXBlXTtpZihhd2FpdGluZ0RlcGVuZGVuY2llcy5oYXNPd25Qcm9wZXJ0eShyYXdUeXBlKSl7dmFyIGNhbGxiYWNrcz1hd2FpdGluZ0RlcGVuZGVuY2llc1tyYXdUeXBlXTtkZWxldGUgYXdhaXRpbmdEZXBlbmRlbmNpZXNbcmF3VHlwZV07Y2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpfX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9ib29sKHJhd1R5cGUsbmFtZSxzaXplLHRydWVWYWx1ZSxmYWxzZVZhbHVlKXt2YXIgc2hpZnQ9Z2V0U2hpZnRGcm9tU2l6ZShzaXplKTtuYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSxcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKHd0KXtyZXR1cm4hIXd0fSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyxvKXtyZXR1cm4gbz90cnVlVmFsdWU6ZmFsc2VWYWx1ZX0sXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOmZ1bmN0aW9uKHBvaW50ZXIpe3ZhciBoZWFwO2lmKHNpemU9PT0xKXtoZWFwPUhFQVA4fWVsc2UgaWYoc2l6ZT09PTIpe2hlYXA9SEVBUDE2fWVsc2UgaWYoc2l6ZT09PTQpe2hlYXA9SEVBUDMyfWVsc2V7dGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gYm9vbGVhbiB0eXBlIHNpemU6IFwiK25hbWUpfXJldHVybiB0aGlzW1wiZnJvbVdpcmVUeXBlXCJdKGhlYXBbcG9pbnRlcj4+c2hpZnRdKX0sZGVzdHJ1Y3RvckZ1bmN0aW9uOm51bGx9KX1mdW5jdGlvbiBDbGFzc0hhbmRsZV9pc0FsaWFzT2Yob3RoZXIpe2lmKCEodGhpcyBpbnN0YW5jZW9mIENsYXNzSGFuZGxlKSl7cmV0dXJuIGZhbHNlfWlmKCEob3RoZXIgaW5zdGFuY2VvZiBDbGFzc0hhbmRsZSkpe3JldHVybiBmYWxzZX12YXIgbGVmdENsYXNzPXRoaXMuJCQucHRyVHlwZS5yZWdpc3RlcmVkQ2xhc3M7dmFyIGxlZnQ9dGhpcy4kJC5wdHI7dmFyIHJpZ2h0Q2xhc3M9b3RoZXIuJCQucHRyVHlwZS5yZWdpc3RlcmVkQ2xhc3M7dmFyIHJpZ2h0PW90aGVyLiQkLnB0cjt3aGlsZShsZWZ0Q2xhc3MuYmFzZUNsYXNzKXtsZWZ0PWxlZnRDbGFzcy51cGNhc3QobGVmdCk7bGVmdENsYXNzPWxlZnRDbGFzcy5iYXNlQ2xhc3N9d2hpbGUocmlnaHRDbGFzcy5iYXNlQ2xhc3Mpe3JpZ2h0PXJpZ2h0Q2xhc3MudXBjYXN0KHJpZ2h0KTtyaWdodENsYXNzPXJpZ2h0Q2xhc3MuYmFzZUNsYXNzfXJldHVybiBsZWZ0Q2xhc3M9PT1yaWdodENsYXNzJiZsZWZ0PT09cmlnaHR9ZnVuY3Rpb24gc2hhbGxvd0NvcHlJbnRlcm5hbFBvaW50ZXIobyl7cmV0dXJue2NvdW50Om8uY291bnQsZGVsZXRlU2NoZWR1bGVkOm8uZGVsZXRlU2NoZWR1bGVkLHByZXNlcnZlUG9pbnRlck9uRGVsZXRlOm8ucHJlc2VydmVQb2ludGVyT25EZWxldGUscHRyOm8ucHRyLHB0clR5cGU6by5wdHJUeXBlLHNtYXJ0UHRyOm8uc21hcnRQdHIsc21hcnRQdHJUeXBlOm8uc21hcnRQdHJUeXBlfX1mdW5jdGlvbiB0aHJvd0luc3RhbmNlQWxyZWFkeURlbGV0ZWQob2JqKXtmdW5jdGlvbiBnZXRJbnN0YW5jZVR5cGVOYW1lKGhhbmRsZSl7cmV0dXJuIGhhbmRsZS4kJC5wdHJUeXBlLnJlZ2lzdGVyZWRDbGFzcy5uYW1lfXRocm93QmluZGluZ0Vycm9yKGdldEluc3RhbmNlVHlwZU5hbWUob2JqKStcIiBpbnN0YW5jZSBhbHJlYWR5IGRlbGV0ZWRcIil9dmFyIGZpbmFsaXphdGlvblJlZ2lzdHJ5PWZhbHNlO2Z1bmN0aW9uIGRldGFjaEZpbmFsaXplcihoYW5kbGUpe31mdW5jdGlvbiBydW5EZXN0cnVjdG9yKCQkKXtpZigkJC5zbWFydFB0cil7JCQuc21hcnRQdHJUeXBlLnJhd0Rlc3RydWN0b3IoJCQuc21hcnRQdHIpfWVsc2V7JCQucHRyVHlwZS5yZWdpc3RlcmVkQ2xhc3MucmF3RGVzdHJ1Y3RvcigkJC5wdHIpfX1mdW5jdGlvbiByZWxlYXNlQ2xhc3NIYW5kbGUoJCQpeyQkLmNvdW50LnZhbHVlLT0xO3ZhciB0b0RlbGV0ZT0wPT09JCQuY291bnQudmFsdWU7aWYodG9EZWxldGUpe3J1bkRlc3RydWN0b3IoJCQpfX1mdW5jdGlvbiBkb3duY2FzdFBvaW50ZXIocHRyLHB0ckNsYXNzLGRlc2lyZWRDbGFzcyl7aWYocHRyQ2xhc3M9PT1kZXNpcmVkQ2xhc3Mpe3JldHVybiBwdHJ9aWYodW5kZWZpbmVkPT09ZGVzaXJlZENsYXNzLmJhc2VDbGFzcyl7cmV0dXJuIG51bGx9dmFyIHJ2PWRvd25jYXN0UG9pbnRlcihwdHIscHRyQ2xhc3MsZGVzaXJlZENsYXNzLmJhc2VDbGFzcyk7aWYocnY9PT1udWxsKXtyZXR1cm4gbnVsbH1yZXR1cm4gZGVzaXJlZENsYXNzLmRvd25jYXN0KHJ2KX12YXIgcmVnaXN0ZXJlZFBvaW50ZXJzPXt9O2Z1bmN0aW9uIGdldEluaGVyaXRlZEluc3RhbmNlQ291bnQoKXtyZXR1cm4gT2JqZWN0LmtleXMocmVnaXN0ZXJlZEluc3RhbmNlcykubGVuZ3RofWZ1bmN0aW9uIGdldExpdmVJbmhlcml0ZWRJbnN0YW5jZXMoKXt2YXIgcnY9W107Zm9yKHZhciBrIGluIHJlZ2lzdGVyZWRJbnN0YW5jZXMpe2lmKHJlZ2lzdGVyZWRJbnN0YW5jZXMuaGFzT3duUHJvcGVydHkoaykpe3J2LnB1c2gocmVnaXN0ZXJlZEluc3RhbmNlc1trXSl9fXJldHVybiBydn12YXIgZGVsZXRpb25RdWV1ZT1bXTtmdW5jdGlvbiBmbHVzaFBlbmRpbmdEZWxldGVzKCl7d2hpbGUoZGVsZXRpb25RdWV1ZS5sZW5ndGgpe3ZhciBvYmo9ZGVsZXRpb25RdWV1ZS5wb3AoKTtvYmouJCQuZGVsZXRlU2NoZWR1bGVkPWZhbHNlO29ialtcImRlbGV0ZVwiXSgpfX12YXIgZGVsYXlGdW5jdGlvbj11bmRlZmluZWQ7ZnVuY3Rpb24gc2V0RGVsYXlGdW5jdGlvbihmbil7ZGVsYXlGdW5jdGlvbj1mbjtpZihkZWxldGlvblF1ZXVlLmxlbmd0aCYmZGVsYXlGdW5jdGlvbil7ZGVsYXlGdW5jdGlvbihmbHVzaFBlbmRpbmdEZWxldGVzKX19ZnVuY3Rpb24gaW5pdF9lbWJpbmQoKXtNb2R1bGVbXCJnZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50XCJdPWdldEluaGVyaXRlZEluc3RhbmNlQ291bnQ7TW9kdWxlW1wiZ2V0TGl2ZUluaGVyaXRlZEluc3RhbmNlc1wiXT1nZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzO01vZHVsZVtcImZsdXNoUGVuZGluZ0RlbGV0ZXNcIl09Zmx1c2hQZW5kaW5nRGVsZXRlcztNb2R1bGVbXCJzZXREZWxheUZ1bmN0aW9uXCJdPXNldERlbGF5RnVuY3Rpb259dmFyIHJlZ2lzdGVyZWRJbnN0YW5jZXM9e307ZnVuY3Rpb24gZ2V0QmFzZXN0UG9pbnRlcihjbGFzc18scHRyKXtpZihwdHI9PT11bmRlZmluZWQpe3Rocm93QmluZGluZ0Vycm9yKFwicHRyIHNob3VsZCBub3QgYmUgdW5kZWZpbmVkXCIpfXdoaWxlKGNsYXNzXy5iYXNlQ2xhc3Mpe3B0cj1jbGFzc18udXBjYXN0KHB0cik7Y2xhc3NfPWNsYXNzXy5iYXNlQ2xhc3N9cmV0dXJuIHB0cn1mdW5jdGlvbiBnZXRJbmhlcml0ZWRJbnN0YW5jZShjbGFzc18scHRyKXtwdHI9Z2V0QmFzZXN0UG9pbnRlcihjbGFzc18scHRyKTtyZXR1cm4gcmVnaXN0ZXJlZEluc3RhbmNlc1twdHJdfWZ1bmN0aW9uIG1ha2VDbGFzc0hhbmRsZShwcm90b3R5cGUscmVjb3JkKXtpZighcmVjb3JkLnB0clR5cGV8fCFyZWNvcmQucHRyKXt0aHJvd0ludGVybmFsRXJyb3IoXCJtYWtlQ2xhc3NIYW5kbGUgcmVxdWlyZXMgcHRyIGFuZCBwdHJUeXBlXCIpfXZhciBoYXNTbWFydFB0clR5cGU9ISFyZWNvcmQuc21hcnRQdHJUeXBlO3ZhciBoYXNTbWFydFB0cj0hIXJlY29yZC5zbWFydFB0cjtpZihoYXNTbWFydFB0clR5cGUhPT1oYXNTbWFydFB0cil7dGhyb3dJbnRlcm5hbEVycm9yKFwiQm90aCBzbWFydFB0clR5cGUgYW5kIHNtYXJ0UHRyIG11c3QgYmUgc3BlY2lmaWVkXCIpfXJlY29yZC5jb3VudD17dmFsdWU6MX07cmV0dXJuIGF0dGFjaEZpbmFsaXplcihPYmplY3QuY3JlYXRlKHByb3RvdHlwZSx7JCQ6e3ZhbHVlOnJlY29yZH19KSl9ZnVuY3Rpb24gUmVnaXN0ZXJlZFBvaW50ZXJfZnJvbVdpcmVUeXBlKHB0cil7dmFyIHJhd1BvaW50ZXI9dGhpcy5nZXRQb2ludGVlKHB0cik7aWYoIXJhd1BvaW50ZXIpe3RoaXMuZGVzdHJ1Y3RvcihwdHIpO3JldHVybiBudWxsfXZhciByZWdpc3RlcmVkSW5zdGFuY2U9Z2V0SW5oZXJpdGVkSW5zdGFuY2UodGhpcy5yZWdpc3RlcmVkQ2xhc3MscmF3UG9pbnRlcik7aWYodW5kZWZpbmVkIT09cmVnaXN0ZXJlZEluc3RhbmNlKXtpZigwPT09cmVnaXN0ZXJlZEluc3RhbmNlLiQkLmNvdW50LnZhbHVlKXtyZWdpc3RlcmVkSW5zdGFuY2UuJCQucHRyPXJhd1BvaW50ZXI7cmVnaXN0ZXJlZEluc3RhbmNlLiQkLnNtYXJ0UHRyPXB0cjtyZXR1cm4gcmVnaXN0ZXJlZEluc3RhbmNlW1wiY2xvbmVcIl0oKX1lbHNle3ZhciBydj1yZWdpc3RlcmVkSW5zdGFuY2VbXCJjbG9uZVwiXSgpO3RoaXMuZGVzdHJ1Y3RvcihwdHIpO3JldHVybiBydn19ZnVuY3Rpb24gbWFrZURlZmF1bHRIYW5kbGUoKXtpZih0aGlzLmlzU21hcnRQb2ludGVyKXtyZXR1cm4gbWFrZUNsYXNzSGFuZGxlKHRoaXMucmVnaXN0ZXJlZENsYXNzLmluc3RhbmNlUHJvdG90eXBlLHtwdHJUeXBlOnRoaXMucG9pbnRlZVR5cGUscHRyOnJhd1BvaW50ZXIsc21hcnRQdHJUeXBlOnRoaXMsc21hcnRQdHI6cHRyfSl9ZWxzZXtyZXR1cm4gbWFrZUNsYXNzSGFuZGxlKHRoaXMucmVnaXN0ZXJlZENsYXNzLmluc3RhbmNlUHJvdG90eXBlLHtwdHJUeXBlOnRoaXMscHRyOnB0cn0pfX12YXIgYWN0dWFsVHlwZT10aGlzLnJlZ2lzdGVyZWRDbGFzcy5nZXRBY3R1YWxUeXBlKHJhd1BvaW50ZXIpO3ZhciByZWdpc3RlcmVkUG9pbnRlclJlY29yZD1yZWdpc3RlcmVkUG9pbnRlcnNbYWN0dWFsVHlwZV07aWYoIXJlZ2lzdGVyZWRQb2ludGVyUmVjb3JkKXtyZXR1cm4gbWFrZURlZmF1bHRIYW5kbGUuY2FsbCh0aGlzKX12YXIgdG9UeXBlO2lmKHRoaXMuaXNDb25zdCl7dG9UeXBlPXJlZ2lzdGVyZWRQb2ludGVyUmVjb3JkLmNvbnN0UG9pbnRlclR5cGV9ZWxzZXt0b1R5cGU9cmVnaXN0ZXJlZFBvaW50ZXJSZWNvcmQucG9pbnRlclR5cGV9dmFyIGRwPWRvd25jYXN0UG9pbnRlcihyYXdQb2ludGVyLHRoaXMucmVnaXN0ZXJlZENsYXNzLHRvVHlwZS5yZWdpc3RlcmVkQ2xhc3MpO2lmKGRwPT09bnVsbCl7cmV0dXJuIG1ha2VEZWZhdWx0SGFuZGxlLmNhbGwodGhpcyl9aWYodGhpcy5pc1NtYXJ0UG9pbnRlcil7cmV0dXJuIG1ha2VDbGFzc0hhbmRsZSh0b1R5cGUucmVnaXN0ZXJlZENsYXNzLmluc3RhbmNlUHJvdG90eXBlLHtwdHJUeXBlOnRvVHlwZSxwdHI6ZHAsc21hcnRQdHJUeXBlOnRoaXMsc21hcnRQdHI6cHRyfSl9ZWxzZXtyZXR1cm4gbWFrZUNsYXNzSGFuZGxlKHRvVHlwZS5yZWdpc3RlcmVkQ2xhc3MuaW5zdGFuY2VQcm90b3R5cGUse3B0clR5cGU6dG9UeXBlLHB0cjpkcH0pfX1mdW5jdGlvbiBhdHRhY2hGaW5hbGl6ZXIoaGFuZGxlKXtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIEZpbmFsaXphdGlvblJlZ2lzdHJ5KXthdHRhY2hGaW5hbGl6ZXI9aGFuZGxlPT5oYW5kbGU7cmV0dXJuIGhhbmRsZX1maW5hbGl6YXRpb25SZWdpc3RyeT1uZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoaW5mbz0+e3JlbGVhc2VDbGFzc0hhbmRsZShpbmZvLiQkKX0pO2F0dGFjaEZpbmFsaXplcj1oYW5kbGU9Pnt2YXIgJCQ9aGFuZGxlLiQkO3ZhciBoYXNTbWFydFB0cj0hISQkLnNtYXJ0UHRyO2lmKGhhc1NtYXJ0UHRyKXt2YXIgaW5mbz17JCQ6JCR9O2ZpbmFsaXphdGlvblJlZ2lzdHJ5LnJlZ2lzdGVyKGhhbmRsZSxpbmZvLGhhbmRsZSl9cmV0dXJuIGhhbmRsZX07ZGV0YWNoRmluYWxpemVyPWhhbmRsZT0+ZmluYWxpemF0aW9uUmVnaXN0cnkudW5yZWdpc3RlcihoYW5kbGUpO3JldHVybiBhdHRhY2hGaW5hbGl6ZXIoaGFuZGxlKX1mdW5jdGlvbiBDbGFzc0hhbmRsZV9jbG9uZSgpe2lmKCF0aGlzLiQkLnB0cil7dGhyb3dJbnN0YW5jZUFscmVhZHlEZWxldGVkKHRoaXMpfWlmKHRoaXMuJCQucHJlc2VydmVQb2ludGVyT25EZWxldGUpe3RoaXMuJCQuY291bnQudmFsdWUrPTE7cmV0dXJuIHRoaXN9ZWxzZXt2YXIgY2xvbmU9YXR0YWNoRmluYWxpemVyKE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLHskJDp7dmFsdWU6c2hhbGxvd0NvcHlJbnRlcm5hbFBvaW50ZXIodGhpcy4kJCl9fSkpO2Nsb25lLiQkLmNvdW50LnZhbHVlKz0xO2Nsb25lLiQkLmRlbGV0ZVNjaGVkdWxlZD1mYWxzZTtyZXR1cm4gY2xvbmV9fWZ1bmN0aW9uIENsYXNzSGFuZGxlX2RlbGV0ZSgpe2lmKCF0aGlzLiQkLnB0cil7dGhyb3dJbnN0YW5jZUFscmVhZHlEZWxldGVkKHRoaXMpfWlmKHRoaXMuJCQuZGVsZXRlU2NoZWR1bGVkJiYhdGhpcy4kJC5wcmVzZXJ2ZVBvaW50ZXJPbkRlbGV0ZSl7dGhyb3dCaW5kaW5nRXJyb3IoXCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uXCIpfWRldGFjaEZpbmFsaXplcih0aGlzKTtyZWxlYXNlQ2xhc3NIYW5kbGUodGhpcy4kJCk7aWYoIXRoaXMuJCQucHJlc2VydmVQb2ludGVyT25EZWxldGUpe3RoaXMuJCQuc21hcnRQdHI9dW5kZWZpbmVkO3RoaXMuJCQucHRyPXVuZGVmaW5lZH19ZnVuY3Rpb24gQ2xhc3NIYW5kbGVfaXNEZWxldGVkKCl7cmV0dXJuIXRoaXMuJCQucHRyfWZ1bmN0aW9uIENsYXNzSGFuZGxlX2RlbGV0ZUxhdGVyKCl7aWYoIXRoaXMuJCQucHRyKXt0aHJvd0luc3RhbmNlQWxyZWFkeURlbGV0ZWQodGhpcyl9aWYodGhpcy4kJC5kZWxldGVTY2hlZHVsZWQmJiF0aGlzLiQkLnByZXNlcnZlUG9pbnRlck9uRGVsZXRlKXt0aHJvd0JpbmRpbmdFcnJvcihcIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb25cIil9ZGVsZXRpb25RdWV1ZS5wdXNoKHRoaXMpO2lmKGRlbGV0aW9uUXVldWUubGVuZ3RoPT09MSYmZGVsYXlGdW5jdGlvbil7ZGVsYXlGdW5jdGlvbihmbHVzaFBlbmRpbmdEZWxldGVzKX10aGlzLiQkLmRlbGV0ZVNjaGVkdWxlZD10cnVlO3JldHVybiB0aGlzfWZ1bmN0aW9uIGluaXRfQ2xhc3NIYW5kbGUoKXtDbGFzc0hhbmRsZS5wcm90b3R5cGVbXCJpc0FsaWFzT2ZcIl09Q2xhc3NIYW5kbGVfaXNBbGlhc09mO0NsYXNzSGFuZGxlLnByb3RvdHlwZVtcImNsb25lXCJdPUNsYXNzSGFuZGxlX2Nsb25lO0NsYXNzSGFuZGxlLnByb3RvdHlwZVtcImRlbGV0ZVwiXT1DbGFzc0hhbmRsZV9kZWxldGU7Q2xhc3NIYW5kbGUucHJvdG90eXBlW1wiaXNEZWxldGVkXCJdPUNsYXNzSGFuZGxlX2lzRGVsZXRlZDtDbGFzc0hhbmRsZS5wcm90b3R5cGVbXCJkZWxldGVMYXRlclwiXT1DbGFzc0hhbmRsZV9kZWxldGVMYXRlcn1mdW5jdGlvbiBDbGFzc0hhbmRsZSgpe31mdW5jdGlvbiBlbnN1cmVPdmVybG9hZFRhYmxlKHByb3RvLG1ldGhvZE5hbWUsaHVtYW5OYW1lKXtpZih1bmRlZmluZWQ9PT1wcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlKXt2YXIgcHJldkZ1bmM9cHJvdG9bbWV0aG9kTmFtZV07cHJvdG9bbWV0aG9kTmFtZV09ZnVuY3Rpb24oKXtpZighcHJvdG9bbWV0aG9kTmFtZV0ub3ZlcmxvYWRUYWJsZS5oYXNPd25Qcm9wZXJ0eShhcmd1bWVudHMubGVuZ3RoKSl7dGhyb3dCaW5kaW5nRXJyb3IoYEZ1bmN0aW9uICcke2h1bWFuTmFtZX0nIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoJHthcmd1bWVudHMubGVuZ3RofSkgLSBleHBlY3RzIG9uZSBvZiAoJHtwcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlfSkhYCl9cmV0dXJuIHByb3RvW21ldGhvZE5hbWVdLm92ZXJsb2FkVGFibGVbYXJndW1lbnRzLmxlbmd0aF0uYXBwbHkodGhpcyxhcmd1bWVudHMpfTtwcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlPVtdO3Byb3RvW21ldGhvZE5hbWVdLm92ZXJsb2FkVGFibGVbcHJldkZ1bmMuYXJnQ291bnRdPXByZXZGdW5jfX1mdW5jdGlvbiBleHBvc2VQdWJsaWNTeW1ib2wobmFtZSx2YWx1ZSxudW1Bcmd1bWVudHMpe2lmKE1vZHVsZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSl7aWYodW5kZWZpbmVkPT09bnVtQXJndW1lbnRzfHx1bmRlZmluZWQhPT1Nb2R1bGVbbmFtZV0ub3ZlcmxvYWRUYWJsZSYmdW5kZWZpbmVkIT09TW9kdWxlW25hbWVdLm92ZXJsb2FkVGFibGVbbnVtQXJndW1lbnRzXSl7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCByZWdpc3RlciBwdWJsaWMgbmFtZSAnJHtuYW1lfScgdHdpY2VgKX1lbnN1cmVPdmVybG9hZFRhYmxlKE1vZHVsZSxuYW1lLG5hbWUpO2lmKE1vZHVsZS5oYXNPd25Qcm9wZXJ0eShudW1Bcmd1bWVudHMpKXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIG92ZXJsb2FkcyBvZiBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyAoJHtudW1Bcmd1bWVudHN9KSFgKX1Nb2R1bGVbbmFtZV0ub3ZlcmxvYWRUYWJsZVtudW1Bcmd1bWVudHNdPXZhbHVlfWVsc2V7TW9kdWxlW25hbWVdPXZhbHVlO2lmKHVuZGVmaW5lZCE9PW51bUFyZ3VtZW50cyl7TW9kdWxlW25hbWVdLm51bUFyZ3VtZW50cz1udW1Bcmd1bWVudHN9fX1mdW5jdGlvbiBSZWdpc3RlcmVkQ2xhc3MobmFtZSxjb25zdHJ1Y3RvcixpbnN0YW5jZVByb3RvdHlwZSxyYXdEZXN0cnVjdG9yLGJhc2VDbGFzcyxnZXRBY3R1YWxUeXBlLHVwY2FzdCxkb3duY2FzdCl7dGhpcy5uYW1lPW5hbWU7dGhpcy5jb25zdHJ1Y3Rvcj1jb25zdHJ1Y3Rvcjt0aGlzLmluc3RhbmNlUHJvdG90eXBlPWluc3RhbmNlUHJvdG90eXBlO3RoaXMucmF3RGVzdHJ1Y3Rvcj1yYXdEZXN0cnVjdG9yO3RoaXMuYmFzZUNsYXNzPWJhc2VDbGFzczt0aGlzLmdldEFjdHVhbFR5cGU9Z2V0QWN0dWFsVHlwZTt0aGlzLnVwY2FzdD11cGNhc3Q7dGhpcy5kb3duY2FzdD1kb3duY2FzdDt0aGlzLnB1cmVWaXJ0dWFsRnVuY3Rpb25zPVtdfWZ1bmN0aW9uIHVwY2FzdFBvaW50ZXIocHRyLHB0ckNsYXNzLGRlc2lyZWRDbGFzcyl7d2hpbGUocHRyQ2xhc3MhPT1kZXNpcmVkQ2xhc3Mpe2lmKCFwdHJDbGFzcy51cGNhc3Qpe3Rocm93QmluZGluZ0Vycm9yKGBFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICR7ZGVzaXJlZENsYXNzLm5hbWV9LCBnb3QgYW4gaW5zdGFuY2Ugb2YgJHtwdHJDbGFzcy5uYW1lfWApfXB0cj1wdHJDbGFzcy51cGNhc3QocHRyKTtwdHJDbGFzcz1wdHJDbGFzcy5iYXNlQ2xhc3N9cmV0dXJuIHB0cn1mdW5jdGlvbiBjb25zdE5vU21hcnRQdHJSYXdQb2ludGVyVG9XaXJlVHlwZShkZXN0cnVjdG9ycyxoYW5kbGUpe2lmKGhhbmRsZT09PW51bGwpe2lmKHRoaXMuaXNSZWZlcmVuY2Upe3Rocm93QmluZGluZ0Vycm9yKGBudWxsIGlzIG5vdCBhIHZhbGlkICR7dGhpcy5uYW1lfWApfXJldHVybiAwfWlmKCFoYW5kbGUuJCQpe3Rocm93QmluZGluZ0Vycm9yKGBDYW5ub3QgcGFzcyBcIiR7ZW1iaW5kUmVwcihoYW5kbGUpfVwiIGFzIGEgJHt0aGlzLm5hbWV9YCl9aWYoIWhhbmRsZS4kJC5wdHIpe3Rocm93QmluZGluZ0Vycm9yKGBDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAke3RoaXMubmFtZX1gKX12YXIgaGFuZGxlQ2xhc3M9aGFuZGxlLiQkLnB0clR5cGUucmVnaXN0ZXJlZENsYXNzO3ZhciBwdHI9dXBjYXN0UG9pbnRlcihoYW5kbGUuJCQucHRyLGhhbmRsZUNsYXNzLHRoaXMucmVnaXN0ZXJlZENsYXNzKTtyZXR1cm4gcHRyfWZ1bmN0aW9uIGdlbmVyaWNQb2ludGVyVG9XaXJlVHlwZShkZXN0cnVjdG9ycyxoYW5kbGUpe3ZhciBwdHI7aWYoaGFuZGxlPT09bnVsbCl7aWYodGhpcy5pc1JlZmVyZW5jZSl7dGhyb3dCaW5kaW5nRXJyb3IoYG51bGwgaXMgbm90IGEgdmFsaWQgJHt0aGlzLm5hbWV9YCl9aWYodGhpcy5pc1NtYXJ0UG9pbnRlcil7cHRyPXRoaXMucmF3Q29uc3RydWN0b3IoKTtpZihkZXN0cnVjdG9ycyE9PW51bGwpe2Rlc3RydWN0b3JzLnB1c2godGhpcy5yYXdEZXN0cnVjdG9yLHB0cil9cmV0dXJuIHB0cn1lbHNle3JldHVybiAwfX1pZighaGFuZGxlLiQkKXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHBhc3MgXCIke2VtYmluZFJlcHIoaGFuZGxlKX1cIiBhcyBhICR7dGhpcy5uYW1lfWApfWlmKCFoYW5kbGUuJCQucHRyKXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgJHt0aGlzLm5hbWV9YCl9aWYoIXRoaXMuaXNDb25zdCYmaGFuZGxlLiQkLnB0clR5cGUuaXNDb25zdCl7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgJHtoYW5kbGUuJCQuc21hcnRQdHJUeXBlP2hhbmRsZS4kJC5zbWFydFB0clR5cGUubmFtZTpoYW5kbGUuJCQucHRyVHlwZS5uYW1lfSB0byBwYXJhbWV0ZXIgdHlwZSAke3RoaXMubmFtZX1gKX12YXIgaGFuZGxlQ2xhc3M9aGFuZGxlLiQkLnB0clR5cGUucmVnaXN0ZXJlZENsYXNzO3B0cj11cGNhc3RQb2ludGVyKGhhbmRsZS4kJC5wdHIsaGFuZGxlQ2xhc3MsdGhpcy5yZWdpc3RlcmVkQ2xhc3MpO2lmKHRoaXMuaXNTbWFydFBvaW50ZXIpe2lmKHVuZGVmaW5lZD09PWhhbmRsZS4kJC5zbWFydFB0cil7dGhyb3dCaW5kaW5nRXJyb3IoXCJQYXNzaW5nIHJhdyBwb2ludGVyIHRvIHNtYXJ0IHBvaW50ZXIgaXMgaWxsZWdhbFwiKX1zd2l0Y2godGhpcy5zaGFyaW5nUG9saWN5KXtjYXNlIDA6aWYoaGFuZGxlLiQkLnNtYXJ0UHRyVHlwZT09PXRoaXMpe3B0cj1oYW5kbGUuJCQuc21hcnRQdHJ9ZWxzZXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IGNvbnZlcnQgYXJndW1lbnQgb2YgdHlwZSAke2hhbmRsZS4kJC5zbWFydFB0clR5cGU/aGFuZGxlLiQkLnNtYXJ0UHRyVHlwZS5uYW1lOmhhbmRsZS4kJC5wdHJUeXBlLm5hbWV9IHRvIHBhcmFtZXRlciB0eXBlICR7dGhpcy5uYW1lfWApfWJyZWFrO2Nhc2UgMTpwdHI9aGFuZGxlLiQkLnNtYXJ0UHRyO2JyZWFrO2Nhc2UgMjppZihoYW5kbGUuJCQuc21hcnRQdHJUeXBlPT09dGhpcyl7cHRyPWhhbmRsZS4kJC5zbWFydFB0cn1lbHNle3ZhciBjbG9uZWRIYW5kbGU9aGFuZGxlW1wiY2xvbmVcIl0oKTtwdHI9dGhpcy5yYXdTaGFyZShwdHIsRW12YWwudG9IYW5kbGUoZnVuY3Rpb24oKXtjbG9uZWRIYW5kbGVbXCJkZWxldGVcIl0oKX0pKTtpZihkZXN0cnVjdG9ycyE9PW51bGwpe2Rlc3RydWN0b3JzLnB1c2godGhpcy5yYXdEZXN0cnVjdG9yLHB0cil9fWJyZWFrO2RlZmF1bHQ6dGhyb3dCaW5kaW5nRXJyb3IoXCJVbnN1cHBvcnRpbmcgc2hhcmluZyBwb2xpY3lcIil9fXJldHVybiBwdHJ9ZnVuY3Rpb24gbm9uQ29uc3ROb1NtYXJ0UHRyUmF3UG9pbnRlclRvV2lyZVR5cGUoZGVzdHJ1Y3RvcnMsaGFuZGxlKXtpZihoYW5kbGU9PT1udWxsKXtpZih0aGlzLmlzUmVmZXJlbmNlKXt0aHJvd0JpbmRpbmdFcnJvcihgbnVsbCBpcyBub3QgYSB2YWxpZCAke3RoaXMubmFtZX1gKX1yZXR1cm4gMH1pZighaGFuZGxlLiQkKXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHBhc3MgXCIke2VtYmluZFJlcHIoaGFuZGxlKX1cIiBhcyBhICR7dGhpcy5uYW1lfWApfWlmKCFoYW5kbGUuJCQucHRyKXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgJHt0aGlzLm5hbWV9YCl9aWYoaGFuZGxlLiQkLnB0clR5cGUuaXNDb25zdCl7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgJHtoYW5kbGUuJCQucHRyVHlwZS5uYW1lfSB0byBwYXJhbWV0ZXIgdHlwZSAke3RoaXMubmFtZX1gKX12YXIgaGFuZGxlQ2xhc3M9aGFuZGxlLiQkLnB0clR5cGUucmVnaXN0ZXJlZENsYXNzO3ZhciBwdHI9dXBjYXN0UG9pbnRlcihoYW5kbGUuJCQucHRyLGhhbmRsZUNsYXNzLHRoaXMucmVnaXN0ZXJlZENsYXNzKTtyZXR1cm4gcHRyfWZ1bmN0aW9uIHNpbXBsZVJlYWRWYWx1ZUZyb21Qb2ludGVyKHBvaW50ZXIpe3JldHVybiB0aGlzW1wiZnJvbVdpcmVUeXBlXCJdKEhFQVAzMltwb2ludGVyPj4yXSl9ZnVuY3Rpb24gUmVnaXN0ZXJlZFBvaW50ZXJfZ2V0UG9pbnRlZShwdHIpe2lmKHRoaXMucmF3R2V0UG9pbnRlZSl7cHRyPXRoaXMucmF3R2V0UG9pbnRlZShwdHIpfXJldHVybiBwdHJ9ZnVuY3Rpb24gUmVnaXN0ZXJlZFBvaW50ZXJfZGVzdHJ1Y3RvcihwdHIpe2lmKHRoaXMucmF3RGVzdHJ1Y3Rvcil7dGhpcy5yYXdEZXN0cnVjdG9yKHB0cil9fWZ1bmN0aW9uIFJlZ2lzdGVyZWRQb2ludGVyX2RlbGV0ZU9iamVjdChoYW5kbGUpe2lmKGhhbmRsZSE9PW51bGwpe2hhbmRsZVtcImRlbGV0ZVwiXSgpfX1mdW5jdGlvbiBpbml0X1JlZ2lzdGVyZWRQb2ludGVyKCl7UmVnaXN0ZXJlZFBvaW50ZXIucHJvdG90eXBlLmdldFBvaW50ZWU9UmVnaXN0ZXJlZFBvaW50ZXJfZ2V0UG9pbnRlZTtSZWdpc3RlcmVkUG9pbnRlci5wcm90b3R5cGUuZGVzdHJ1Y3Rvcj1SZWdpc3RlcmVkUG9pbnRlcl9kZXN0cnVjdG9yO1JlZ2lzdGVyZWRQb2ludGVyLnByb3RvdHlwZVtcImFyZ1BhY2tBZHZhbmNlXCJdPTg7UmVnaXN0ZXJlZFBvaW50ZXIucHJvdG90eXBlW1wicmVhZFZhbHVlRnJvbVBvaW50ZXJcIl09c2ltcGxlUmVhZFZhbHVlRnJvbVBvaW50ZXI7UmVnaXN0ZXJlZFBvaW50ZXIucHJvdG90eXBlW1wiZGVsZXRlT2JqZWN0XCJdPVJlZ2lzdGVyZWRQb2ludGVyX2RlbGV0ZU9iamVjdDtSZWdpc3RlcmVkUG9pbnRlci5wcm90b3R5cGVbXCJmcm9tV2lyZVR5cGVcIl09UmVnaXN0ZXJlZFBvaW50ZXJfZnJvbVdpcmVUeXBlfWZ1bmN0aW9uIFJlZ2lzdGVyZWRQb2ludGVyKG5hbWUscmVnaXN0ZXJlZENsYXNzLGlzUmVmZXJlbmNlLGlzQ29uc3QsaXNTbWFydFBvaW50ZXIscG9pbnRlZVR5cGUsc2hhcmluZ1BvbGljeSxyYXdHZXRQb2ludGVlLHJhd0NvbnN0cnVjdG9yLHJhd1NoYXJlLHJhd0Rlc3RydWN0b3Ipe3RoaXMubmFtZT1uYW1lO3RoaXMucmVnaXN0ZXJlZENsYXNzPXJlZ2lzdGVyZWRDbGFzczt0aGlzLmlzUmVmZXJlbmNlPWlzUmVmZXJlbmNlO3RoaXMuaXNDb25zdD1pc0NvbnN0O3RoaXMuaXNTbWFydFBvaW50ZXI9aXNTbWFydFBvaW50ZXI7dGhpcy5wb2ludGVlVHlwZT1wb2ludGVlVHlwZTt0aGlzLnNoYXJpbmdQb2xpY3k9c2hhcmluZ1BvbGljeTt0aGlzLnJhd0dldFBvaW50ZWU9cmF3R2V0UG9pbnRlZTt0aGlzLnJhd0NvbnN0cnVjdG9yPXJhd0NvbnN0cnVjdG9yO3RoaXMucmF3U2hhcmU9cmF3U2hhcmU7dGhpcy5yYXdEZXN0cnVjdG9yPXJhd0Rlc3RydWN0b3I7aWYoIWlzU21hcnRQb2ludGVyJiZyZWdpc3RlcmVkQ2xhc3MuYmFzZUNsYXNzPT09dW5kZWZpbmVkKXtpZihpc0NvbnN0KXt0aGlzW1widG9XaXJlVHlwZVwiXT1jb25zdE5vU21hcnRQdHJSYXdQb2ludGVyVG9XaXJlVHlwZTt0aGlzLmRlc3RydWN0b3JGdW5jdGlvbj1udWxsfWVsc2V7dGhpc1tcInRvV2lyZVR5cGVcIl09bm9uQ29uc3ROb1NtYXJ0UHRyUmF3UG9pbnRlclRvV2lyZVR5cGU7dGhpcy5kZXN0cnVjdG9yRnVuY3Rpb249bnVsbH19ZWxzZXt0aGlzW1widG9XaXJlVHlwZVwiXT1nZW5lcmljUG9pbnRlclRvV2lyZVR5cGV9fWZ1bmN0aW9uIHJlcGxhY2VQdWJsaWNTeW1ib2wobmFtZSx2YWx1ZSxudW1Bcmd1bWVudHMpe2lmKCFNb2R1bGUuaGFzT3duUHJvcGVydHkobmFtZSkpe3Rocm93SW50ZXJuYWxFcnJvcihcIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sXCIpfWlmKHVuZGVmaW5lZCE9PU1vZHVsZVtuYW1lXS5vdmVybG9hZFRhYmxlJiZ1bmRlZmluZWQhPT1udW1Bcmd1bWVudHMpe01vZHVsZVtuYW1lXS5vdmVybG9hZFRhYmxlW251bUFyZ3VtZW50c109dmFsdWV9ZWxzZXtNb2R1bGVbbmFtZV09dmFsdWU7TW9kdWxlW25hbWVdLmFyZ0NvdW50PW51bUFyZ3VtZW50c319ZnVuY3Rpb24gZHluQ2FsbExlZ2FjeShzaWcscHRyLGFyZ3Mpe3ZhciBmPU1vZHVsZVtcImR5bkNhbGxfXCIrc2lnXTtyZXR1cm4gYXJncyYmYXJncy5sZW5ndGg/Zi5hcHBseShudWxsLFtwdHJdLmNvbmNhdChhcmdzKSk6Zi5jYWxsKG51bGwscHRyKX12YXIgd2FzbVRhYmxlTWlycm9yPVtdO2Z1bmN0aW9uIGdldFdhc21UYWJsZUVudHJ5KGZ1bmNQdHIpe3ZhciBmdW5jPXdhc21UYWJsZU1pcnJvcltmdW5jUHRyXTtpZighZnVuYyl7aWYoZnVuY1B0cj49d2FzbVRhYmxlTWlycm9yLmxlbmd0aCl3YXNtVGFibGVNaXJyb3IubGVuZ3RoPWZ1bmNQdHIrMTt3YXNtVGFibGVNaXJyb3JbZnVuY1B0cl09ZnVuYz13YXNtVGFibGUuZ2V0KGZ1bmNQdHIpfXJldHVybiBmdW5jfWZ1bmN0aW9uIGR5bkNhbGwoc2lnLHB0cixhcmdzKXtpZihzaWcuaW5jbHVkZXMoXCJqXCIpKXtyZXR1cm4gZHluQ2FsbExlZ2FjeShzaWcscHRyLGFyZ3MpfXZhciBydG49Z2V0V2FzbVRhYmxlRW50cnkocHRyKS5hcHBseShudWxsLGFyZ3MpO3JldHVybiBydG59ZnVuY3Rpb24gZ2V0RHluQ2FsbGVyKHNpZyxwdHIpe3ZhciBhcmdDYWNoZT1bXTtyZXR1cm4gZnVuY3Rpb24oKXthcmdDYWNoZS5sZW5ndGg9MDtPYmplY3QuYXNzaWduKGFyZ0NhY2hlLGFyZ3VtZW50cyk7cmV0dXJuIGR5bkNhbGwoc2lnLHB0cixhcmdDYWNoZSl9fWZ1bmN0aW9uIGVtYmluZF9fcmVxdWlyZUZ1bmN0aW9uKHNpZ25hdHVyZSxyYXdGdW5jdGlvbil7c2lnbmF0dXJlPXJlYWRMYXRpbjFTdHJpbmcoc2lnbmF0dXJlKTtmdW5jdGlvbiBtYWtlRHluQ2FsbGVyKCl7aWYoc2lnbmF0dXJlLmluY2x1ZGVzKFwialwiKSl7cmV0dXJuIGdldER5bkNhbGxlcihzaWduYXR1cmUscmF3RnVuY3Rpb24pfXJldHVybiBnZXRXYXNtVGFibGVFbnRyeShyYXdGdW5jdGlvbil9dmFyIGZwPW1ha2VEeW5DYWxsZXIoKTtpZih0eXBlb2YgZnAhPVwiZnVuY3Rpb25cIil7dGhyb3dCaW5kaW5nRXJyb3IoYHVua25vd24gZnVuY3Rpb24gcG9pbnRlciB3aXRoIHNpZ25hdHVyZSAke3NpZ25hdHVyZX06ICR7cmF3RnVuY3Rpb259YCl9cmV0dXJuIGZwfXZhciBVbmJvdW5kVHlwZUVycm9yPXVuZGVmaW5lZDtmdW5jdGlvbiBnZXRUeXBlTmFtZSh0eXBlKXt2YXIgcHRyPV9fX2dldFR5cGVOYW1lKHR5cGUpO3ZhciBydj1yZWFkTGF0aW4xU3RyaW5nKHB0cik7X2ZyZWUocHRyKTtyZXR1cm4gcnZ9ZnVuY3Rpb24gdGhyb3dVbmJvdW5kVHlwZUVycm9yKG1lc3NhZ2UsdHlwZXMpe3ZhciB1bmJvdW5kVHlwZXM9W107dmFyIHNlZW49e307ZnVuY3Rpb24gdmlzaXQodHlwZSl7aWYoc2Vlblt0eXBlXSl7cmV0dXJufWlmKHJlZ2lzdGVyZWRUeXBlc1t0eXBlXSl7cmV0dXJufWlmKHR5cGVEZXBlbmRlbmNpZXNbdHlwZV0pe3R5cGVEZXBlbmRlbmNpZXNbdHlwZV0uZm9yRWFjaCh2aXNpdCk7cmV0dXJufXVuYm91bmRUeXBlcy5wdXNoKHR5cGUpO3NlZW5bdHlwZV09dHJ1ZX10eXBlcy5mb3JFYWNoKHZpc2l0KTt0aHJvdyBuZXcgVW5ib3VuZFR5cGVFcnJvcihgJHttZXNzYWdlfTogYCt1bmJvdW5kVHlwZXMubWFwKGdldFR5cGVOYW1lKS5qb2luKFtcIiwgXCJdKSl9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfY2xhc3MocmF3VHlwZSxyYXdQb2ludGVyVHlwZSxyYXdDb25zdFBvaW50ZXJUeXBlLGJhc2VDbGFzc1Jhd1R5cGUsZ2V0QWN0dWFsVHlwZVNpZ25hdHVyZSxnZXRBY3R1YWxUeXBlLHVwY2FzdFNpZ25hdHVyZSx1cGNhc3QsZG93bmNhc3RTaWduYXR1cmUsZG93bmNhc3QsbmFtZSxkZXN0cnVjdG9yU2lnbmF0dXJlLHJhd0Rlc3RydWN0b3Ipe25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTtnZXRBY3R1YWxUeXBlPWVtYmluZF9fcmVxdWlyZUZ1bmN0aW9uKGdldEFjdHVhbFR5cGVTaWduYXR1cmUsZ2V0QWN0dWFsVHlwZSk7aWYodXBjYXN0KXt1cGNhc3Q9ZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24odXBjYXN0U2lnbmF0dXJlLHVwY2FzdCl9aWYoZG93bmNhc3Qpe2Rvd25jYXN0PWVtYmluZF9fcmVxdWlyZUZ1bmN0aW9uKGRvd25jYXN0U2lnbmF0dXJlLGRvd25jYXN0KX1yYXdEZXN0cnVjdG9yPWVtYmluZF9fcmVxdWlyZUZ1bmN0aW9uKGRlc3RydWN0b3JTaWduYXR1cmUscmF3RGVzdHJ1Y3Rvcik7dmFyIGxlZ2FsRnVuY3Rpb25OYW1lPW1ha2VMZWdhbEZ1bmN0aW9uTmFtZShuYW1lKTtleHBvc2VQdWJsaWNTeW1ib2wobGVnYWxGdW5jdGlvbk5hbWUsZnVuY3Rpb24oKXt0aHJvd1VuYm91bmRUeXBlRXJyb3IoYENhbm5vdCBjb25zdHJ1Y3QgJHtuYW1lfSBkdWUgdG8gdW5ib3VuZCB0eXBlc2AsW2Jhc2VDbGFzc1Jhd1R5cGVdKX0pO3doZW5EZXBlbmRlbnRUeXBlc0FyZVJlc29sdmVkKFtyYXdUeXBlLHJhd1BvaW50ZXJUeXBlLHJhd0NvbnN0UG9pbnRlclR5cGVdLGJhc2VDbGFzc1Jhd1R5cGU/W2Jhc2VDbGFzc1Jhd1R5cGVdOltdLGZ1bmN0aW9uKGJhc2Upe2Jhc2U9YmFzZVswXTt2YXIgYmFzZUNsYXNzO3ZhciBiYXNlUHJvdG90eXBlO2lmKGJhc2VDbGFzc1Jhd1R5cGUpe2Jhc2VDbGFzcz1iYXNlLnJlZ2lzdGVyZWRDbGFzcztiYXNlUHJvdG90eXBlPWJhc2VDbGFzcy5pbnN0YW5jZVByb3RvdHlwZX1lbHNle2Jhc2VQcm90b3R5cGU9Q2xhc3NIYW5kbGUucHJvdG90eXBlfXZhciBjb25zdHJ1Y3Rvcj1jcmVhdGVOYW1lZEZ1bmN0aW9uKGxlZ2FsRnVuY3Rpb25OYW1lLGZ1bmN0aW9uKCl7aWYoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpIT09aW5zdGFuY2VQcm90b3R5cGUpe3Rocm93IG5ldyBCaW5kaW5nRXJyb3IoXCJVc2UgJ25ldycgdG8gY29uc3RydWN0IFwiK25hbWUpfWlmKHVuZGVmaW5lZD09PXJlZ2lzdGVyZWRDbGFzcy5jb25zdHJ1Y3Rvcl9ib2R5KXt0aHJvdyBuZXcgQmluZGluZ0Vycm9yKG5hbWUrXCIgaGFzIG5vIGFjY2Vzc2libGUgY29uc3RydWN0b3JcIil9dmFyIGJvZHk9cmVnaXN0ZXJlZENsYXNzLmNvbnN0cnVjdG9yX2JvZHlbYXJndW1lbnRzLmxlbmd0aF07aWYodW5kZWZpbmVkPT09Ym9keSl7dGhyb3cgbmV3IEJpbmRpbmdFcnJvcihgVHJpZWQgdG8gaW52b2tlIGN0b3Igb2YgJHtuYW1lfSB3aXRoIGludmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlcnMgKCR7YXJndW1lbnRzLmxlbmd0aH0pIC0gZXhwZWN0ZWQgKCR7T2JqZWN0LmtleXMocmVnaXN0ZXJlZENsYXNzLmNvbnN0cnVjdG9yX2JvZHkpLnRvU3RyaW5nKCl9KSBwYXJhbWV0ZXJzIGluc3RlYWQhYCl9cmV0dXJuIGJvZHkuYXBwbHkodGhpcyxhcmd1bWVudHMpfSk7dmFyIGluc3RhbmNlUHJvdG90eXBlPU9iamVjdC5jcmVhdGUoYmFzZVByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmNvbnN0cnVjdG9yfX0pO2NvbnN0cnVjdG9yLnByb3RvdHlwZT1pbnN0YW5jZVByb3RvdHlwZTt2YXIgcmVnaXN0ZXJlZENsYXNzPW5ldyBSZWdpc3RlcmVkQ2xhc3MobmFtZSxjb25zdHJ1Y3RvcixpbnN0YW5jZVByb3RvdHlwZSxyYXdEZXN0cnVjdG9yLGJhc2VDbGFzcyxnZXRBY3R1YWxUeXBlLHVwY2FzdCxkb3duY2FzdCk7aWYocmVnaXN0ZXJlZENsYXNzLmJhc2VDbGFzcyl7aWYocmVnaXN0ZXJlZENsYXNzLmJhc2VDbGFzcy5fX2Rlcml2ZWRDbGFzc2VzPT09dW5kZWZpbmVkKXtyZWdpc3RlcmVkQ2xhc3MuYmFzZUNsYXNzLl9fZGVyaXZlZENsYXNzZXM9W119cmVnaXN0ZXJlZENsYXNzLmJhc2VDbGFzcy5fX2Rlcml2ZWRDbGFzc2VzLnB1c2gocmVnaXN0ZXJlZENsYXNzKX12YXIgcmVmZXJlbmNlQ29udmVydGVyPW5ldyBSZWdpc3RlcmVkUG9pbnRlcihuYW1lLHJlZ2lzdGVyZWRDbGFzcyx0cnVlLGZhbHNlLGZhbHNlKTt2YXIgcG9pbnRlckNvbnZlcnRlcj1uZXcgUmVnaXN0ZXJlZFBvaW50ZXIobmFtZStcIipcIixyZWdpc3RlcmVkQ2xhc3MsZmFsc2UsZmFsc2UsZmFsc2UpO3ZhciBjb25zdFBvaW50ZXJDb252ZXJ0ZXI9bmV3IFJlZ2lzdGVyZWRQb2ludGVyKG5hbWUrXCIgY29uc3QqXCIscmVnaXN0ZXJlZENsYXNzLGZhbHNlLHRydWUsZmFsc2UpO3JlZ2lzdGVyZWRQb2ludGVyc1tyYXdUeXBlXT17cG9pbnRlclR5cGU6cG9pbnRlckNvbnZlcnRlcixjb25zdFBvaW50ZXJUeXBlOmNvbnN0UG9pbnRlckNvbnZlcnRlcn07cmVwbGFjZVB1YmxpY1N5bWJvbChsZWdhbEZ1bmN0aW9uTmFtZSxjb25zdHJ1Y3Rvcik7cmV0dXJuW3JlZmVyZW5jZUNvbnZlcnRlcixwb2ludGVyQ29udmVydGVyLGNvbnN0UG9pbnRlckNvbnZlcnRlcl19KX1mdW5jdGlvbiBoZWFwMzJWZWN0b3JUb0FycmF5KGNvdW50LGZpcnN0RWxlbWVudCl7dmFyIGFycmF5PVtdO2Zvcih2YXIgaT0wO2k8Y291bnQ7aSsrKXthcnJheS5wdXNoKEhFQVBVMzJbZmlyc3RFbGVtZW50K2kqND4+Ml0pfXJldHVybiBhcnJheX1mdW5jdGlvbiBydW5EZXN0cnVjdG9ycyhkZXN0cnVjdG9ycyl7d2hpbGUoZGVzdHJ1Y3RvcnMubGVuZ3RoKXt2YXIgcHRyPWRlc3RydWN0b3JzLnBvcCgpO3ZhciBkZWw9ZGVzdHJ1Y3RvcnMucG9wKCk7ZGVsKHB0cil9fWZ1bmN0aW9uIG5ld0Z1bmMoY29uc3RydWN0b3IsYXJndW1lbnRMaXN0KXtpZighKGNvbnN0cnVjdG9yIGluc3RhbmNlb2YgRnVuY3Rpb24pKXt0aHJvdyBuZXcgVHlwZUVycm9yKGBuZXdfIGNhbGxlZCB3aXRoIGNvbnN0cnVjdG9yIHR5cGUgJHt0eXBlb2YgY29uc3RydWN0b3J9IHdoaWNoIGlzIG5vdCBhIGZ1bmN0aW9uYCl9dmFyIGR1bW15PWNyZWF0ZU5hbWVkRnVuY3Rpb24oY29uc3RydWN0b3IubmFtZXx8XCJ1bmtub3duRnVuY3Rpb25OYW1lXCIsZnVuY3Rpb24oKXt9KTtkdW1teS5wcm90b3R5cGU9Y29uc3RydWN0b3IucHJvdG90eXBlO3ZhciBvYmo9bmV3IGR1bW15O3ZhciByPWNvbnN0cnVjdG9yLmFwcGx5KG9iaixhcmd1bWVudExpc3QpO3JldHVybiByIGluc3RhbmNlb2YgT2JqZWN0P3I6b2JqfWZ1bmN0aW9uIGNyYWZ0SW52b2tlckZ1bmN0aW9uKGh1bWFuTmFtZSxhcmdUeXBlcyxjbGFzc1R5cGUsY3BwSW52b2tlckZ1bmMsY3BwVGFyZ2V0RnVuYyxpc0FzeW5jKXt2YXIgYXJnQ291bnQ9YXJnVHlwZXMubGVuZ3RoO2lmKGFyZ0NvdW50PDIpe3Rocm93QmluZGluZ0Vycm9yKFwiYXJnVHlwZXMgYXJyYXkgc2l6ZSBtaXNtYXRjaCEgTXVzdCBhdCBsZWFzdCBnZXQgcmV0dXJuIHZhbHVlIGFuZCAndGhpcycgdHlwZXMhXCIpfXZhciBpc0NsYXNzTWV0aG9kRnVuYz1hcmdUeXBlc1sxXSE9PW51bGwmJmNsYXNzVHlwZSE9PW51bGw7dmFyIG5lZWRzRGVzdHJ1Y3RvclN0YWNrPWZhbHNlO2Zvcih2YXIgaT0xO2k8YXJnVHlwZXMubGVuZ3RoOysraSl7aWYoYXJnVHlwZXNbaV0hPT1udWxsJiZhcmdUeXBlc1tpXS5kZXN0cnVjdG9yRnVuY3Rpb249PT11bmRlZmluZWQpe25lZWRzRGVzdHJ1Y3RvclN0YWNrPXRydWU7YnJlYWt9fXZhciByZXR1cm5zPWFyZ1R5cGVzWzBdLm5hbWUhPT1cInZvaWRcIjt2YXIgYXJnc0xpc3Q9XCJcIjt2YXIgYXJnc0xpc3RXaXJlZD1cIlwiO2Zvcih2YXIgaT0wO2k8YXJnQ291bnQtMjsrK2kpe2FyZ3NMaXN0Kz0oaSE9PTA/XCIsIFwiOlwiXCIpK1wiYXJnXCIraTthcmdzTGlzdFdpcmVkKz0oaSE9PTA/XCIsIFwiOlwiXCIpK1wiYXJnXCIraStcIldpcmVkXCJ9dmFyIGludm9rZXJGbkJvZHk9YFxcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICR7bWFrZUxlZ2FsRnVuY3Rpb25OYW1lKGh1bWFuTmFtZSl9KCR7YXJnc0xpc3R9KSB7XFxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gJHthcmdDb3VudC0yfSkge1xcbiAgICAgICAgICB0aHJvd0JpbmRpbmdFcnJvcignZnVuY3Rpb24gJHtodW1hbk5hbWV9IGNhbGxlZCB3aXRoICR7YXJndW1lbnRzLmxlbmd0aH0gYXJndW1lbnRzLCBleHBlY3RlZCAke2FyZ0NvdW50LTJ9IGFyZ3MhJyk7XFxuICAgICAgICB9YDtpZihuZWVkc0Rlc3RydWN0b3JTdGFjayl7aW52b2tlckZuQm9keSs9XCJ2YXIgZGVzdHJ1Y3RvcnMgPSBbXTtcXG5cIn12YXIgZHRvclN0YWNrPW5lZWRzRGVzdHJ1Y3RvclN0YWNrP1wiZGVzdHJ1Y3RvcnNcIjpcIm51bGxcIjt2YXIgYXJnczE9W1widGhyb3dCaW5kaW5nRXJyb3JcIixcImludm9rZXJcIixcImZuXCIsXCJydW5EZXN0cnVjdG9yc1wiLFwicmV0VHlwZVwiLFwiY2xhc3NQYXJhbVwiXTt2YXIgYXJnczI9W3Rocm93QmluZGluZ0Vycm9yLGNwcEludm9rZXJGdW5jLGNwcFRhcmdldEZ1bmMscnVuRGVzdHJ1Y3RvcnMsYXJnVHlwZXNbMF0sYXJnVHlwZXNbMV1dO2lmKGlzQ2xhc3NNZXRob2RGdW5jKXtpbnZva2VyRm5Cb2R5Kz1cInZhciB0aGlzV2lyZWQgPSBjbGFzc1BhcmFtLnRvV2lyZVR5cGUoXCIrZHRvclN0YWNrK1wiLCB0aGlzKTtcXG5cIn1mb3IodmFyIGk9MDtpPGFyZ0NvdW50LTI7KytpKXtpbnZva2VyRm5Cb2R5Kz1cInZhciBhcmdcIitpK1wiV2lyZWQgPSBhcmdUeXBlXCIraStcIi50b1dpcmVUeXBlKFwiK2R0b3JTdGFjaytcIiwgYXJnXCIraStcIik7IC8vIFwiK2FyZ1R5cGVzW2krMl0ubmFtZStcIlxcblwiO2FyZ3MxLnB1c2goXCJhcmdUeXBlXCIraSk7YXJnczIucHVzaChhcmdUeXBlc1tpKzJdKX1pZihpc0NsYXNzTWV0aG9kRnVuYyl7YXJnc0xpc3RXaXJlZD1cInRoaXNXaXJlZFwiKyhhcmdzTGlzdFdpcmVkLmxlbmd0aD4wP1wiLCBcIjpcIlwiKSthcmdzTGlzdFdpcmVkfWludm9rZXJGbkJvZHkrPShyZXR1cm5zfHxpc0FzeW5jP1widmFyIHJ2ID0gXCI6XCJcIikrXCJpbnZva2VyKGZuXCIrKGFyZ3NMaXN0V2lyZWQubGVuZ3RoPjA/XCIsIFwiOlwiXCIpK2FyZ3NMaXN0V2lyZWQrXCIpO1xcblwiO2lmKG5lZWRzRGVzdHJ1Y3RvclN0YWNrKXtpbnZva2VyRm5Cb2R5Kz1cInJ1bkRlc3RydWN0b3JzKGRlc3RydWN0b3JzKTtcXG5cIn1lbHNle2Zvcih2YXIgaT1pc0NsYXNzTWV0aG9kRnVuYz8xOjI7aTxhcmdUeXBlcy5sZW5ndGg7KytpKXt2YXIgcGFyYW1OYW1lPWk9PT0xP1widGhpc1dpcmVkXCI6XCJhcmdcIisoaS0yKStcIldpcmVkXCI7aWYoYXJnVHlwZXNbaV0uZGVzdHJ1Y3RvckZ1bmN0aW9uIT09bnVsbCl7aW52b2tlckZuQm9keSs9cGFyYW1OYW1lK1wiX2R0b3IoXCIrcGFyYW1OYW1lK1wiKTsgLy8gXCIrYXJnVHlwZXNbaV0ubmFtZStcIlxcblwiO2FyZ3MxLnB1c2gocGFyYW1OYW1lK1wiX2R0b3JcIik7YXJnczIucHVzaChhcmdUeXBlc1tpXS5kZXN0cnVjdG9yRnVuY3Rpb24pfX19aWYocmV0dXJucyl7aW52b2tlckZuQm9keSs9XCJ2YXIgcmV0ID0gcmV0VHlwZS5mcm9tV2lyZVR5cGUocnYpO1xcblwiK1wicmV0dXJuIHJldDtcXG5cIn1lbHNle31pbnZva2VyRm5Cb2R5Kz1cIn1cXG5cIjthcmdzMS5wdXNoKGludm9rZXJGbkJvZHkpO3JldHVybiBuZXdGdW5jKEZ1bmN0aW9uLGFyZ3MxKS5hcHBseShudWxsLGFyZ3MyKX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9jbGFzc19jb25zdHJ1Y3RvcihyYXdDbGFzc1R5cGUsYXJnQ291bnQscmF3QXJnVHlwZXNBZGRyLGludm9rZXJTaWduYXR1cmUsaW52b2tlcixyYXdDb25zdHJ1Y3Rvcil7YXNzZXJ0KGFyZ0NvdW50PjApO3ZhciByYXdBcmdUeXBlcz1oZWFwMzJWZWN0b3JUb0FycmF5KGFyZ0NvdW50LHJhd0FyZ1R5cGVzQWRkcik7aW52b2tlcj1lbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihpbnZva2VyU2lnbmF0dXJlLGludm9rZXIpO3doZW5EZXBlbmRlbnRUeXBlc0FyZVJlc29sdmVkKFtdLFtyYXdDbGFzc1R5cGVdLGZ1bmN0aW9uKGNsYXNzVHlwZSl7Y2xhc3NUeXBlPWNsYXNzVHlwZVswXTt2YXIgaHVtYW5OYW1lPWBjb25zdHJ1Y3RvciAke2NsYXNzVHlwZS5uYW1lfWA7aWYodW5kZWZpbmVkPT09Y2xhc3NUeXBlLnJlZ2lzdGVyZWRDbGFzcy5jb25zdHJ1Y3Rvcl9ib2R5KXtjbGFzc1R5cGUucmVnaXN0ZXJlZENsYXNzLmNvbnN0cnVjdG9yX2JvZHk9W119aWYodW5kZWZpbmVkIT09Y2xhc3NUeXBlLnJlZ2lzdGVyZWRDbGFzcy5jb25zdHJ1Y3Rvcl9ib2R5W2FyZ0NvdW50LTFdKXt0aHJvdyBuZXcgQmluZGluZ0Vycm9yKGBDYW5ub3QgcmVnaXN0ZXIgbXVsdGlwbGUgY29uc3RydWN0b3JzIHdpdGggaWRlbnRpY2FsIG51bWJlciBvZiBwYXJhbWV0ZXJzICgke2FyZ0NvdW50LTF9KSBmb3IgY2xhc3MgJyR7Y2xhc3NUeXBlLm5hbWV9JyEgT3ZlcmxvYWQgcmVzb2x1dGlvbiBpcyBjdXJyZW50bHkgb25seSBwZXJmb3JtZWQgdXNpbmcgdGhlIHBhcmFtZXRlciBjb3VudCwgbm90IGFjdHVhbCB0eXBlIGluZm8hYCl9Y2xhc3NUeXBlLnJlZ2lzdGVyZWRDbGFzcy5jb25zdHJ1Y3Rvcl9ib2R5W2FyZ0NvdW50LTFdPSgpPT57dGhyb3dVbmJvdW5kVHlwZUVycm9yKGBDYW5ub3QgY29uc3RydWN0ICR7Y2xhc3NUeXBlLm5hbWV9IGR1ZSB0byB1bmJvdW5kIHR5cGVzYCxyYXdBcmdUeXBlcyl9O3doZW5EZXBlbmRlbnRUeXBlc0FyZVJlc29sdmVkKFtdLHJhd0FyZ1R5cGVzLGZ1bmN0aW9uKGFyZ1R5cGVzKXthcmdUeXBlcy5zcGxpY2UoMSwwLG51bGwpO2NsYXNzVHlwZS5yZWdpc3RlcmVkQ2xhc3MuY29uc3RydWN0b3JfYm9keVthcmdDb3VudC0xXT1jcmFmdEludm9rZXJGdW5jdGlvbihodW1hbk5hbWUsYXJnVHlwZXMsbnVsbCxpbnZva2VyLHJhd0NvbnN0cnVjdG9yKTtyZXR1cm5bXX0pO3JldHVybltdfSl9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfZnVuY3Rpb24ocmF3Q2xhc3NUeXBlLG1ldGhvZE5hbWUsYXJnQ291bnQscmF3QXJnVHlwZXNBZGRyLGludm9rZXJTaWduYXR1cmUscmF3SW52b2tlcixjb250ZXh0LGlzUHVyZVZpcnR1YWwsaXNBc3luYyl7dmFyIHJhd0FyZ1R5cGVzPWhlYXAzMlZlY3RvclRvQXJyYXkoYXJnQ291bnQscmF3QXJnVHlwZXNBZGRyKTttZXRob2ROYW1lPXJlYWRMYXRpbjFTdHJpbmcobWV0aG9kTmFtZSk7cmF3SW52b2tlcj1lbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihpbnZva2VyU2lnbmF0dXJlLHJhd0ludm9rZXIpO3doZW5EZXBlbmRlbnRUeXBlc0FyZVJlc29sdmVkKFtdLFtyYXdDbGFzc1R5cGVdLGZ1bmN0aW9uKGNsYXNzVHlwZSl7Y2xhc3NUeXBlPWNsYXNzVHlwZVswXTt2YXIgaHVtYW5OYW1lPWAke2NsYXNzVHlwZS5uYW1lfS4ke21ldGhvZE5hbWV9YDtpZihtZXRob2ROYW1lLnN0YXJ0c1dpdGgoXCJAQFwiKSl7bWV0aG9kTmFtZT1TeW1ib2xbbWV0aG9kTmFtZS5zdWJzdHJpbmcoMildfWlmKGlzUHVyZVZpcnR1YWwpe2NsYXNzVHlwZS5yZWdpc3RlcmVkQ2xhc3MucHVyZVZpcnR1YWxGdW5jdGlvbnMucHVzaChtZXRob2ROYW1lKX1mdW5jdGlvbiB1bmJvdW5kVHlwZXNIYW5kbGVyKCl7dGhyb3dVbmJvdW5kVHlwZUVycm9yKGBDYW5ub3QgY2FsbCAke2h1bWFuTmFtZX0gZHVlIHRvIHVuYm91bmQgdHlwZXNgLHJhd0FyZ1R5cGVzKX12YXIgcHJvdG89Y2xhc3NUeXBlLnJlZ2lzdGVyZWRDbGFzcy5pbnN0YW5jZVByb3RvdHlwZTt2YXIgbWV0aG9kPXByb3RvW21ldGhvZE5hbWVdO2lmKHVuZGVmaW5lZD09PW1ldGhvZHx8dW5kZWZpbmVkPT09bWV0aG9kLm92ZXJsb2FkVGFibGUmJm1ldGhvZC5jbGFzc05hbWUhPT1jbGFzc1R5cGUubmFtZSYmbWV0aG9kLmFyZ0NvdW50PT09YXJnQ291bnQtMil7dW5ib3VuZFR5cGVzSGFuZGxlci5hcmdDb3VudD1hcmdDb3VudC0yO3VuYm91bmRUeXBlc0hhbmRsZXIuY2xhc3NOYW1lPWNsYXNzVHlwZS5uYW1lO3Byb3RvW21ldGhvZE5hbWVdPXVuYm91bmRUeXBlc0hhbmRsZXJ9ZWxzZXtlbnN1cmVPdmVybG9hZFRhYmxlKHByb3RvLG1ldGhvZE5hbWUsaHVtYW5OYW1lKTtwcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlW2FyZ0NvdW50LTJdPXVuYm91bmRUeXBlc0hhbmRsZXJ9d2hlbkRlcGVuZGVudFR5cGVzQXJlUmVzb2x2ZWQoW10scmF3QXJnVHlwZXMsZnVuY3Rpb24oYXJnVHlwZXMpe3ZhciBtZW1iZXJGdW5jdGlvbj1jcmFmdEludm9rZXJGdW5jdGlvbihodW1hbk5hbWUsYXJnVHlwZXMsY2xhc3NUeXBlLHJhd0ludm9rZXIsY29udGV4dCxpc0FzeW5jKTtpZih1bmRlZmluZWQ9PT1wcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlKXttZW1iZXJGdW5jdGlvbi5hcmdDb3VudD1hcmdDb3VudC0yO3Byb3RvW21ldGhvZE5hbWVdPW1lbWJlckZ1bmN0aW9ufWVsc2V7cHJvdG9bbWV0aG9kTmFtZV0ub3ZlcmxvYWRUYWJsZVthcmdDb3VudC0yXT1tZW1iZXJGdW5jdGlvbn1yZXR1cm5bXX0pO3JldHVybltdfSl9ZnVuY3Rpb24gSGFuZGxlQWxsb2NhdG9yKCl7dGhpcy5hbGxvY2F0ZWQ9W3VuZGVmaW5lZF07dGhpcy5mcmVlbGlzdD1bXTt0aGlzLmdldD1mdW5jdGlvbihpZCl7cmV0dXJuIHRoaXMuYWxsb2NhdGVkW2lkXX07dGhpcy5oYXM9ZnVuY3Rpb24oaWQpe3JldHVybiB0aGlzLmFsbG9jYXRlZFtpZF0hPT11bmRlZmluZWR9O3RoaXMuYWxsb2NhdGU9ZnVuY3Rpb24oaGFuZGxlKXt2YXIgaWQ9dGhpcy5mcmVlbGlzdC5wb3AoKXx8dGhpcy5hbGxvY2F0ZWQubGVuZ3RoO3RoaXMuYWxsb2NhdGVkW2lkXT1oYW5kbGU7cmV0dXJuIGlkfTt0aGlzLmZyZWU9ZnVuY3Rpb24oaWQpe3RoaXMuYWxsb2NhdGVkW2lkXT11bmRlZmluZWQ7dGhpcy5mcmVlbGlzdC5wdXNoKGlkKX19dmFyIGVtdmFsX2hhbmRsZXM9bmV3IEhhbmRsZUFsbG9jYXRvcjtmdW5jdGlvbiBfX2VtdmFsX2RlY3JlZihoYW5kbGUpe2lmKGhhbmRsZT49ZW12YWxfaGFuZGxlcy5yZXNlcnZlZCYmMD09PS0tZW12YWxfaGFuZGxlcy5nZXQoaGFuZGxlKS5yZWZjb3VudCl7ZW12YWxfaGFuZGxlcy5mcmVlKGhhbmRsZSl9fWZ1bmN0aW9uIGNvdW50X2VtdmFsX2hhbmRsZXMoKXt2YXIgY291bnQ9MDtmb3IodmFyIGk9ZW12YWxfaGFuZGxlcy5yZXNlcnZlZDtpPGVtdmFsX2hhbmRsZXMuYWxsb2NhdGVkLmxlbmd0aDsrK2kpe2lmKGVtdmFsX2hhbmRsZXMuYWxsb2NhdGVkW2ldIT09dW5kZWZpbmVkKXsrK2NvdW50fX1yZXR1cm4gY291bnR9ZnVuY3Rpb24gaW5pdF9lbXZhbCgpe2VtdmFsX2hhbmRsZXMuYWxsb2NhdGVkLnB1c2goe3ZhbHVlOnVuZGVmaW5lZH0se3ZhbHVlOm51bGx9LHt2YWx1ZTp0cnVlfSx7dmFsdWU6ZmFsc2V9KTtlbXZhbF9oYW5kbGVzLnJlc2VydmVkPWVtdmFsX2hhbmRsZXMuYWxsb2NhdGVkLmxlbmd0aDtNb2R1bGVbXCJjb3VudF9lbXZhbF9oYW5kbGVzXCJdPWNvdW50X2VtdmFsX2hhbmRsZXN9dmFyIEVtdmFsPXt0b1ZhbHVlOmhhbmRsZT0+e2lmKCFoYW5kbGUpe3Rocm93QmluZGluZ0Vycm9yKFwiQ2Fubm90IHVzZSBkZWxldGVkIHZhbC4gaGFuZGxlID0gXCIraGFuZGxlKX1yZXR1cm4gZW12YWxfaGFuZGxlcy5nZXQoaGFuZGxlKS52YWx1ZX0sdG9IYW5kbGU6dmFsdWU9Pntzd2l0Y2godmFsdWUpe2Nhc2UgdW5kZWZpbmVkOnJldHVybiAxO2Nhc2UgbnVsbDpyZXR1cm4gMjtjYXNlIHRydWU6cmV0dXJuIDM7Y2FzZSBmYWxzZTpyZXR1cm4gNDtkZWZhdWx0OntyZXR1cm4gZW12YWxfaGFuZGxlcy5hbGxvY2F0ZSh7cmVmY291bnQ6MSx2YWx1ZTp2YWx1ZX0pfX19fTtmdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9lbXZhbChyYXdUeXBlLG5hbWUpe25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTtyZWdpc3RlclR5cGUocmF3VHlwZSx7bmFtZTpuYW1lLFwiZnJvbVdpcmVUeXBlXCI6ZnVuY3Rpb24oaGFuZGxlKXt2YXIgcnY9RW12YWwudG9WYWx1ZShoYW5kbGUpO19fZW12YWxfZGVjcmVmKGhhbmRsZSk7cmV0dXJuIHJ2fSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7cmV0dXJuIEVtdmFsLnRvSGFuZGxlKHZhbHVlKX0sXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOnNpbXBsZVJlYWRWYWx1ZUZyb21Qb2ludGVyLGRlc3RydWN0b3JGdW5jdGlvbjpudWxsfSl9ZnVuY3Rpb24gZW1iaW5kUmVwcih2KXtpZih2PT09bnVsbCl7cmV0dXJuXCJudWxsXCJ9dmFyIHQ9dHlwZW9mIHY7aWYodD09PVwib2JqZWN0XCJ8fHQ9PT1cImFycmF5XCJ8fHQ9PT1cImZ1bmN0aW9uXCIpe3JldHVybiB2LnRvU3RyaW5nKCl9ZWxzZXtyZXR1cm5cIlwiK3Z9fWZ1bmN0aW9uIGZsb2F0UmVhZFZhbHVlRnJvbVBvaW50ZXIobmFtZSxzaGlmdCl7c3dpdGNoKHNoaWZ0KXtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKHBvaW50ZXIpe3JldHVybiB0aGlzW1wiZnJvbVdpcmVUeXBlXCJdKEhFQVBGMzJbcG9pbnRlcj4+Ml0pfTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKHBvaW50ZXIpe3JldHVybiB0aGlzW1wiZnJvbVdpcmVUeXBlXCJdKEhFQVBGNjRbcG9pbnRlcj4+M10pfTtkZWZhdWx0OnRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmtub3duIGZsb2F0IHR5cGU6IFwiK25hbWUpfX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9mbG9hdChyYXdUeXBlLG5hbWUsc2l6ZSl7dmFyIHNoaWZ0PWdldFNoaWZ0RnJvbVNpemUoc2l6ZSk7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3JlZ2lzdGVyVHlwZShyYXdUeXBlLHtuYW1lOm5hbWUsXCJmcm9tV2lyZVR5cGVcIjpmdW5jdGlvbih2YWx1ZSl7cmV0dXJuIHZhbHVlfSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7cmV0dXJuIHZhbHVlfSxcImFyZ1BhY2tBZHZhbmNlXCI6OCxcInJlYWRWYWx1ZUZyb21Qb2ludGVyXCI6ZmxvYXRSZWFkVmFsdWVGcm9tUG9pbnRlcihuYW1lLHNoaWZ0KSxkZXN0cnVjdG9yRnVuY3Rpb246bnVsbH0pfWZ1bmN0aW9uIGludGVnZXJSZWFkVmFsdWVGcm9tUG9pbnRlcihuYW1lLHNoaWZ0LHNpZ25lZCl7c3dpdGNoKHNoaWZ0KXtjYXNlIDA6cmV0dXJuIHNpZ25lZD9mdW5jdGlvbiByZWFkUzhGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gSEVBUDhbcG9pbnRlcl19OmZ1bmN0aW9uIHJlYWRVOEZyb21Qb2ludGVyKHBvaW50ZXIpe3JldHVybiBIRUFQVThbcG9pbnRlcl19O2Nhc2UgMTpyZXR1cm4gc2lnbmVkP2Z1bmN0aW9uIHJlYWRTMTZGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gSEVBUDE2W3BvaW50ZXI+PjFdfTpmdW5jdGlvbiByZWFkVTE2RnJvbVBvaW50ZXIocG9pbnRlcil7cmV0dXJuIEhFQVBVMTZbcG9pbnRlcj4+MV19O2Nhc2UgMjpyZXR1cm4gc2lnbmVkP2Z1bmN0aW9uIHJlYWRTMzJGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gSEVBUDMyW3BvaW50ZXI+PjJdfTpmdW5jdGlvbiByZWFkVTMyRnJvbVBvaW50ZXIocG9pbnRlcil7cmV0dXJuIEhFQVBVMzJbcG9pbnRlcj4+Ml19O2RlZmF1bHQ6dGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gaW50ZWdlciB0eXBlOiBcIituYW1lKX19ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfaW50ZWdlcihwcmltaXRpdmVUeXBlLG5hbWUsc2l6ZSxtaW5SYW5nZSxtYXhSYW5nZSl7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO2lmKG1heFJhbmdlPT09LTEpe21heFJhbmdlPTQyOTQ5NjcyOTV9dmFyIHNoaWZ0PWdldFNoaWZ0RnJvbVNpemUoc2l6ZSk7dmFyIGZyb21XaXJlVHlwZT12YWx1ZT0+dmFsdWU7aWYobWluUmFuZ2U9PT0wKXt2YXIgYml0c2hpZnQ9MzItOCpzaXplO2Zyb21XaXJlVHlwZT12YWx1ZT0+dmFsdWU8PGJpdHNoaWZ0Pj4+Yml0c2hpZnR9dmFyIGlzVW5zaWduZWRUeXBlPW5hbWUuaW5jbHVkZXMoXCJ1bnNpZ25lZFwiKTt2YXIgY2hlY2tBc3NlcnRpb25zPSh2YWx1ZSx0b1R5cGVOYW1lKT0+e307dmFyIHRvV2lyZVR5cGU7aWYoaXNVbnNpZ25lZFR5cGUpe3RvV2lyZVR5cGU9ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsdmFsdWUpe2NoZWNrQXNzZXJ0aW9ucyh2YWx1ZSx0aGlzLm5hbWUpO3JldHVybiB2YWx1ZT4+PjB9fWVsc2V7dG9XaXJlVHlwZT1mdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7Y2hlY2tBc3NlcnRpb25zKHZhbHVlLHRoaXMubmFtZSk7cmV0dXJuIHZhbHVlfX1yZWdpc3RlclR5cGUocHJpbWl0aXZlVHlwZSx7bmFtZTpuYW1lLFwiZnJvbVdpcmVUeXBlXCI6ZnJvbVdpcmVUeXBlLFwidG9XaXJlVHlwZVwiOnRvV2lyZVR5cGUsXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOmludGVnZXJSZWFkVmFsdWVGcm9tUG9pbnRlcihuYW1lLHNoaWZ0LG1pblJhbmdlIT09MCksZGVzdHJ1Y3RvckZ1bmN0aW9uOm51bGx9KX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9tZW1vcnlfdmlldyhyYXdUeXBlLGRhdGFUeXBlSW5kZXgsbmFtZSl7dmFyIHR5cGVNYXBwaW5nPVtJbnQ4QXJyYXksVWludDhBcnJheSxJbnQxNkFycmF5LFVpbnQxNkFycmF5LEludDMyQXJyYXksVWludDMyQXJyYXksRmxvYXQzMkFycmF5LEZsb2F0NjRBcnJheV07dmFyIFRBPXR5cGVNYXBwaW5nW2RhdGFUeXBlSW5kZXhdO2Z1bmN0aW9uIGRlY29kZU1lbW9yeVZpZXcoaGFuZGxlKXtoYW5kbGU9aGFuZGxlPj4yO3ZhciBoZWFwPUhFQVBVMzI7dmFyIHNpemU9aGVhcFtoYW5kbGVdO3ZhciBkYXRhPWhlYXBbaGFuZGxlKzFdO3JldHVybiBuZXcgVEEoaGVhcC5idWZmZXIsZGF0YSxzaXplKX1uYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSxcImZyb21XaXJlVHlwZVwiOmRlY29kZU1lbW9yeVZpZXcsXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOmRlY29kZU1lbW9yeVZpZXd9LHtpZ25vcmVEdXBsaWNhdGVSZWdpc3RyYXRpb25zOnRydWV9KX1mdW5jdGlvbiBzdHJpbmdUb1VURjhBcnJheShzdHIsaGVhcCxvdXRJZHgsbWF4Qnl0ZXNUb1dyaXRlKXtpZighKG1heEJ5dGVzVG9Xcml0ZT4wKSlyZXR1cm4gMDt2YXIgc3RhcnRJZHg9b3V0SWR4O3ZhciBlbmRJZHg9b3V0SWR4K21heEJ5dGVzVG9Xcml0ZS0xO2Zvcih2YXIgaT0wO2k8c3RyLmxlbmd0aDsrK2kpe3ZhciB1PXN0ci5jaGFyQ29kZUF0KGkpO2lmKHU+PTU1Mjk2JiZ1PD01NzM0Myl7dmFyIHUxPXN0ci5jaGFyQ29kZUF0KCsraSk7dT02NTUzNisoKHUmMTAyMyk8PDEwKXx1MSYxMDIzfWlmKHU8PTEyNyl7aWYob3V0SWR4Pj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109dX1lbHNlIGlmKHU8PTIwNDcpe2lmKG91dElkeCsxPj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109MTkyfHU+PjY7aGVhcFtvdXRJZHgrK109MTI4fHUmNjN9ZWxzZSBpZih1PD02NTUzNSl7aWYob3V0SWR4KzI+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT0yMjR8dT4+MTI7aGVhcFtvdXRJZHgrK109MTI4fHU+PjYmNjM7aGVhcFtvdXRJZHgrK109MTI4fHUmNjN9ZWxzZXtpZihvdXRJZHgrMz49ZW5kSWR4KWJyZWFrO2hlYXBbb3V0SWR4KytdPTI0MHx1Pj4xODtoZWFwW291dElkeCsrXT0xMjh8dT4+MTImNjM7aGVhcFtvdXRJZHgrK109MTI4fHU+PjYmNjM7aGVhcFtvdXRJZHgrK109MTI4fHUmNjN9fWhlYXBbb3V0SWR4XT0wO3JldHVybiBvdXRJZHgtc3RhcnRJZHh9ZnVuY3Rpb24gc3RyaW5nVG9VVEY4KHN0cixvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKXtyZXR1cm4gc3RyaW5nVG9VVEY4QXJyYXkoc3RyLEhFQVBVOCxvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKX1mdW5jdGlvbiBsZW5ndGhCeXRlc1VURjgoc3RyKXt2YXIgbGVuPTA7Zm9yKHZhciBpPTA7aTxzdHIubGVuZ3RoOysraSl7dmFyIGM9c3RyLmNoYXJDb2RlQXQoaSk7aWYoYzw9MTI3KXtsZW4rK31lbHNlIGlmKGM8PTIwNDcpe2xlbis9Mn1lbHNlIGlmKGM+PTU1Mjk2JiZjPD01NzM0Myl7bGVuKz00OysraX1lbHNle2xlbis9M319cmV0dXJuIGxlbn12YXIgVVRGOERlY29kZXI9dHlwZW9mIFRleHREZWNvZGVyIT1cInVuZGVmaW5lZFwiP25ldyBUZXh0RGVjb2RlcihcInV0ZjhcIik6dW5kZWZpbmVkO2Z1bmN0aW9uIFVURjhBcnJheVRvU3RyaW5nKGhlYXBPckFycmF5LGlkeCxtYXhCeXRlc1RvUmVhZCl7dmFyIGVuZElkeD1pZHgrbWF4Qnl0ZXNUb1JlYWQ7dmFyIGVuZFB0cj1pZHg7d2hpbGUoaGVhcE9yQXJyYXlbZW5kUHRyXSYmIShlbmRQdHI+PWVuZElkeCkpKytlbmRQdHI7aWYoZW5kUHRyLWlkeD4xNiYmaGVhcE9yQXJyYXkuYnVmZmVyJiZVVEY4RGVjb2Rlcil7cmV0dXJuIFVURjhEZWNvZGVyLmRlY29kZShoZWFwT3JBcnJheS5zdWJhcnJheShpZHgsZW5kUHRyKSl9dmFyIHN0cj1cIlwiO3doaWxlKGlkeDxlbmRQdHIpe3ZhciB1MD1oZWFwT3JBcnJheVtpZHgrK107aWYoISh1MCYxMjgpKXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUodTApO2NvbnRpbnVlfXZhciB1MT1oZWFwT3JBcnJheVtpZHgrK10mNjM7aWYoKHUwJjIyNCk9PTE5Mil7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKCh1MCYzMSk8PDZ8dTEpO2NvbnRpbnVlfXZhciB1Mj1oZWFwT3JBcnJheVtpZHgrK10mNjM7aWYoKHUwJjI0MCk9PTIyNCl7dTA9KHUwJjE1KTw8MTJ8dTE8PDZ8dTJ9ZWxzZXt1MD0odTAmNyk8PDE4fHUxPDwxMnx1Mjw8NnxoZWFwT3JBcnJheVtpZHgrK10mNjN9aWYodTA8NjU1MzYpe3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSh1MCl9ZWxzZXt2YXIgY2g9dTAtNjU1MzY7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2fGNoPj4xMCw1NjMyMHxjaCYxMDIzKX19cmV0dXJuIHN0cn1mdW5jdGlvbiBVVEY4VG9TdHJpbmcocHRyLG1heEJ5dGVzVG9SZWFkKXtyZXR1cm4gcHRyP1VURjhBcnJheVRvU3RyaW5nKEhFQVBVOCxwdHIsbWF4Qnl0ZXNUb1JlYWQpOlwiXCJ9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfc3RkX3N0cmluZyhyYXdUeXBlLG5hbWUpe25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTt2YXIgc3RkU3RyaW5nSXNVVEY4PW5hbWU9PT1cInN0ZDo6c3RyaW5nXCI7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSxcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKHZhbHVlKXt2YXIgbGVuZ3RoPUhFQVBVMzJbdmFsdWU+PjJdO3ZhciBwYXlsb2FkPXZhbHVlKzQ7dmFyIHN0cjtpZihzdGRTdHJpbmdJc1VURjgpe3ZhciBkZWNvZGVTdGFydFB0cj1wYXlsb2FkO2Zvcih2YXIgaT0wO2k8PWxlbmd0aDsrK2kpe3ZhciBjdXJyZW50Qnl0ZVB0cj1wYXlsb2FkK2k7aWYoaT09bGVuZ3RofHxIRUFQVThbY3VycmVudEJ5dGVQdHJdPT0wKXt2YXIgbWF4UmVhZD1jdXJyZW50Qnl0ZVB0ci1kZWNvZGVTdGFydFB0cjt2YXIgc3RyaW5nU2VnbWVudD1VVEY4VG9TdHJpbmcoZGVjb2RlU3RhcnRQdHIsbWF4UmVhZCk7aWYoc3RyPT09dW5kZWZpbmVkKXtzdHI9c3RyaW5nU2VnbWVudH1lbHNle3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSgwKTtzdHIrPXN0cmluZ1NlZ21lbnR9ZGVjb2RlU3RhcnRQdHI9Y3VycmVudEJ5dGVQdHIrMX19fWVsc2V7dmFyIGE9bmV3IEFycmF5KGxlbmd0aCk7Zm9yKHZhciBpPTA7aTxsZW5ndGg7KytpKXthW2ldPVN0cmluZy5mcm9tQ2hhckNvZGUoSEVBUFU4W3BheWxvYWQraV0pfXN0cj1hLmpvaW4oXCJcIil9X2ZyZWUodmFsdWUpO3JldHVybiBzdHJ9LFwidG9XaXJlVHlwZVwiOmZ1bmN0aW9uKGRlc3RydWN0b3JzLHZhbHVlKXtpZih2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKXt2YWx1ZT1uZXcgVWludDhBcnJheSh2YWx1ZSl9dmFyIGxlbmd0aDt2YXIgdmFsdWVJc09mVHlwZVN0cmluZz10eXBlb2YgdmFsdWU9PVwic3RyaW5nXCI7aWYoISh2YWx1ZUlzT2ZUeXBlU3RyaW5nfHx2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXl8fHZhbHVlIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXl8fHZhbHVlIGluc3RhbmNlb2YgSW50OEFycmF5KSl7dGhyb3dCaW5kaW5nRXJyb3IoXCJDYW5ub3QgcGFzcyBub24tc3RyaW5nIHRvIHN0ZDo6c3RyaW5nXCIpfWlmKHN0ZFN0cmluZ0lzVVRGOCYmdmFsdWVJc09mVHlwZVN0cmluZyl7bGVuZ3RoPWxlbmd0aEJ5dGVzVVRGOCh2YWx1ZSl9ZWxzZXtsZW5ndGg9dmFsdWUubGVuZ3RofXZhciBiYXNlPV9tYWxsb2MoNCtsZW5ndGgrMSk7dmFyIHB0cj1iYXNlKzQ7SEVBUFUzMltiYXNlPj4yXT1sZW5ndGg7aWYoc3RkU3RyaW5nSXNVVEY4JiZ2YWx1ZUlzT2ZUeXBlU3RyaW5nKXtzdHJpbmdUb1VURjgodmFsdWUscHRyLGxlbmd0aCsxKX1lbHNle2lmKHZhbHVlSXNPZlR5cGVTdHJpbmcpe2Zvcih2YXIgaT0wO2k8bGVuZ3RoOysraSl7dmFyIGNoYXJDb2RlPXZhbHVlLmNoYXJDb2RlQXQoaSk7aWYoY2hhckNvZGU+MjU1KXtfZnJlZShwdHIpO3Rocm93QmluZGluZ0Vycm9yKFwiU3RyaW5nIGhhcyBVVEYtMTYgY29kZSB1bml0cyB0aGF0IGRvIG5vdCBmaXQgaW4gOCBiaXRzXCIpfUhFQVBVOFtwdHIraV09Y2hhckNvZGV9fWVsc2V7Zm9yKHZhciBpPTA7aTxsZW5ndGg7KytpKXtIRUFQVThbcHRyK2ldPXZhbHVlW2ldfX19aWYoZGVzdHJ1Y3RvcnMhPT1udWxsKXtkZXN0cnVjdG9ycy5wdXNoKF9mcmVlLGJhc2UpfXJldHVybiBiYXNlfSxcImFyZ1BhY2tBZHZhbmNlXCI6OCxcInJlYWRWYWx1ZUZyb21Qb2ludGVyXCI6c2ltcGxlUmVhZFZhbHVlRnJvbVBvaW50ZXIsZGVzdHJ1Y3RvckZ1bmN0aW9uOmZ1bmN0aW9uKHB0cil7X2ZyZWUocHRyKX19KX12YXIgVVRGMTZEZWNvZGVyPXR5cGVvZiBUZXh0RGVjb2RlciE9XCJ1bmRlZmluZWRcIj9uZXcgVGV4dERlY29kZXIoXCJ1dGYtMTZsZVwiKTp1bmRlZmluZWQ7ZnVuY3Rpb24gVVRGMTZUb1N0cmluZyhwdHIsbWF4Qnl0ZXNUb1JlYWQpe3ZhciBlbmRQdHI9cHRyO3ZhciBpZHg9ZW5kUHRyPj4xO3ZhciBtYXhJZHg9aWR4K21heEJ5dGVzVG9SZWFkLzI7d2hpbGUoIShpZHg+PW1heElkeCkmJkhFQVBVMTZbaWR4XSkrK2lkeDtlbmRQdHI9aWR4PDwxO2lmKGVuZFB0ci1wdHI+MzImJlVURjE2RGVjb2RlcilyZXR1cm4gVVRGMTZEZWNvZGVyLmRlY29kZShIRUFQVTguc3ViYXJyYXkocHRyLGVuZFB0cikpO3ZhciBzdHI9XCJcIjtmb3IodmFyIGk9MDshKGk+PW1heEJ5dGVzVG9SZWFkLzIpOysraSl7dmFyIGNvZGVVbml0PUhFQVAxNltwdHIraSoyPj4xXTtpZihjb2RlVW5pdD09MClicmVhaztzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVVuaXQpfXJldHVybiBzdHJ9ZnVuY3Rpb24gc3RyaW5nVG9VVEYxNihzdHIsb3V0UHRyLG1heEJ5dGVzVG9Xcml0ZSl7aWYobWF4Qnl0ZXNUb1dyaXRlPT09dW5kZWZpbmVkKXttYXhCeXRlc1RvV3JpdGU9MjE0NzQ4MzY0N31pZihtYXhCeXRlc1RvV3JpdGU8MilyZXR1cm4gMDttYXhCeXRlc1RvV3JpdGUtPTI7dmFyIHN0YXJ0UHRyPW91dFB0cjt2YXIgbnVtQ2hhcnNUb1dyaXRlPW1heEJ5dGVzVG9Xcml0ZTxzdHIubGVuZ3RoKjI/bWF4Qnl0ZXNUb1dyaXRlLzI6c3RyLmxlbmd0aDtmb3IodmFyIGk9MDtpPG51bUNoYXJzVG9Xcml0ZTsrK2kpe3ZhciBjb2RlVW5pdD1zdHIuY2hhckNvZGVBdChpKTtIRUFQMTZbb3V0UHRyPj4xXT1jb2RlVW5pdDtvdXRQdHIrPTJ9SEVBUDE2W291dFB0cj4+MV09MDtyZXR1cm4gb3V0UHRyLXN0YXJ0UHRyfWZ1bmN0aW9uIGxlbmd0aEJ5dGVzVVRGMTYoc3RyKXtyZXR1cm4gc3RyLmxlbmd0aCoyfWZ1bmN0aW9uIFVURjMyVG9TdHJpbmcocHRyLG1heEJ5dGVzVG9SZWFkKXt2YXIgaT0wO3ZhciBzdHI9XCJcIjt3aGlsZSghKGk+PW1heEJ5dGVzVG9SZWFkLzQpKXt2YXIgdXRmMzI9SEVBUDMyW3B0citpKjQ+PjJdO2lmKHV0ZjMyPT0wKWJyZWFrOysraTtpZih1dGYzMj49NjU1MzYpe3ZhciBjaD11dGYzMi02NTUzNjtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTZ8Y2g+PjEwLDU2MzIwfGNoJjEwMjMpfWVsc2V7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHV0ZjMyKX19cmV0dXJuIHN0cn1mdW5jdGlvbiBzdHJpbmdUb1VURjMyKHN0cixvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKXtpZihtYXhCeXRlc1RvV3JpdGU9PT11bmRlZmluZWQpe21heEJ5dGVzVG9Xcml0ZT0yMTQ3NDgzNjQ3fWlmKG1heEJ5dGVzVG9Xcml0ZTw0KXJldHVybiAwO3ZhciBzdGFydFB0cj1vdXRQdHI7dmFyIGVuZFB0cj1zdGFydFB0cittYXhCeXRlc1RvV3JpdGUtNDtmb3IodmFyIGk9MDtpPHN0ci5sZW5ndGg7KytpKXt2YXIgY29kZVVuaXQ9c3RyLmNoYXJDb2RlQXQoaSk7aWYoY29kZVVuaXQ+PTU1Mjk2JiZjb2RlVW5pdDw9NTczNDMpe3ZhciB0cmFpbFN1cnJvZ2F0ZT1zdHIuY2hhckNvZGVBdCgrK2kpO2NvZGVVbml0PTY1NTM2KygoY29kZVVuaXQmMTAyMyk8PDEwKXx0cmFpbFN1cnJvZ2F0ZSYxMDIzfUhFQVAzMltvdXRQdHI+PjJdPWNvZGVVbml0O291dFB0cis9NDtpZihvdXRQdHIrND5lbmRQdHIpYnJlYWt9SEVBUDMyW291dFB0cj4+Ml09MDtyZXR1cm4gb3V0UHRyLXN0YXJ0UHRyfWZ1bmN0aW9uIGxlbmd0aEJ5dGVzVVRGMzIoc3RyKXt2YXIgbGVuPTA7Zm9yKHZhciBpPTA7aTxzdHIubGVuZ3RoOysraSl7dmFyIGNvZGVVbml0PXN0ci5jaGFyQ29kZUF0KGkpO2lmKGNvZGVVbml0Pj01NTI5NiYmY29kZVVuaXQ8PTU3MzQzKSsraTtsZW4rPTR9cmV0dXJuIGxlbn1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9zdGRfd3N0cmluZyhyYXdUeXBlLGNoYXJTaXplLG5hbWUpe25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTt2YXIgZGVjb2RlU3RyaW5nLGVuY29kZVN0cmluZyxnZXRIZWFwLGxlbmd0aEJ5dGVzVVRGLHNoaWZ0O2lmKGNoYXJTaXplPT09Mil7ZGVjb2RlU3RyaW5nPVVURjE2VG9TdHJpbmc7ZW5jb2RlU3RyaW5nPXN0cmluZ1RvVVRGMTY7bGVuZ3RoQnl0ZXNVVEY9bGVuZ3RoQnl0ZXNVVEYxNjtnZXRIZWFwPSgpPT5IRUFQVTE2O3NoaWZ0PTF9ZWxzZSBpZihjaGFyU2l6ZT09PTQpe2RlY29kZVN0cmluZz1VVEYzMlRvU3RyaW5nO2VuY29kZVN0cmluZz1zdHJpbmdUb1VURjMyO2xlbmd0aEJ5dGVzVVRGPWxlbmd0aEJ5dGVzVVRGMzI7Z2V0SGVhcD0oKT0+SEVBUFUzMjtzaGlmdD0yfXJlZ2lzdGVyVHlwZShyYXdUeXBlLHtuYW1lOm5hbWUsXCJmcm9tV2lyZVR5cGVcIjpmdW5jdGlvbih2YWx1ZSl7dmFyIGxlbmd0aD1IRUFQVTMyW3ZhbHVlPj4yXTt2YXIgSEVBUD1nZXRIZWFwKCk7dmFyIHN0cjt2YXIgZGVjb2RlU3RhcnRQdHI9dmFsdWUrNDtmb3IodmFyIGk9MDtpPD1sZW5ndGg7KytpKXt2YXIgY3VycmVudEJ5dGVQdHI9dmFsdWUrNCtpKmNoYXJTaXplO2lmKGk9PWxlbmd0aHx8SEVBUFtjdXJyZW50Qnl0ZVB0cj4+c2hpZnRdPT0wKXt2YXIgbWF4UmVhZEJ5dGVzPWN1cnJlbnRCeXRlUHRyLWRlY29kZVN0YXJ0UHRyO3ZhciBzdHJpbmdTZWdtZW50PWRlY29kZVN0cmluZyhkZWNvZGVTdGFydFB0cixtYXhSZWFkQnl0ZXMpO2lmKHN0cj09PXVuZGVmaW5lZCl7c3RyPXN0cmluZ1NlZ21lbnR9ZWxzZXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUoMCk7c3RyKz1zdHJpbmdTZWdtZW50fWRlY29kZVN0YXJ0UHRyPWN1cnJlbnRCeXRlUHRyK2NoYXJTaXplfX1fZnJlZSh2YWx1ZSk7cmV0dXJuIHN0cn0sXCJ0b1dpcmVUeXBlXCI6ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsdmFsdWUpe2lmKCEodHlwZW9mIHZhbHVlPT1cInN0cmluZ1wiKSl7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICR7bmFtZX1gKX12YXIgbGVuZ3RoPWxlbmd0aEJ5dGVzVVRGKHZhbHVlKTt2YXIgcHRyPV9tYWxsb2MoNCtsZW5ndGgrY2hhclNpemUpO0hFQVBVMzJbcHRyPj4yXT1sZW5ndGg+PnNoaWZ0O2VuY29kZVN0cmluZyh2YWx1ZSxwdHIrNCxsZW5ndGgrY2hhclNpemUpO2lmKGRlc3RydWN0b3JzIT09bnVsbCl7ZGVzdHJ1Y3RvcnMucHVzaChfZnJlZSxwdHIpfXJldHVybiBwdHJ9LFwiYXJnUGFja0FkdmFuY2VcIjo4LFwicmVhZFZhbHVlRnJvbVBvaW50ZXJcIjpzaW1wbGVSZWFkVmFsdWVGcm9tUG9pbnRlcixkZXN0cnVjdG9yRnVuY3Rpb246ZnVuY3Rpb24ocHRyKXtfZnJlZShwdHIpfX0pfWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX3ZvaWQocmF3VHlwZSxuYW1lKXtuYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse2lzVm9pZDp0cnVlLG5hbWU6bmFtZSxcImFyZ1BhY2tBZHZhbmNlXCI6MCxcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKCl7cmV0dXJuIHVuZGVmaW5lZH0sXCJ0b1dpcmVUeXBlXCI6ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsbyl7cmV0dXJuIHVuZGVmaW5lZH19KX1mdW5jdGlvbiBfX2VtdmFsX2luY3JlZihoYW5kbGUpe2lmKGhhbmRsZT40KXtlbXZhbF9oYW5kbGVzLmdldChoYW5kbGUpLnJlZmNvdW50Kz0xfX1mdW5jdGlvbiByZXF1aXJlUmVnaXN0ZXJlZFR5cGUocmF3VHlwZSxodW1hbk5hbWUpe3ZhciBpbXBsPXJlZ2lzdGVyZWRUeXBlc1tyYXdUeXBlXTtpZih1bmRlZmluZWQ9PT1pbXBsKXt0aHJvd0JpbmRpbmdFcnJvcihodW1hbk5hbWUrXCIgaGFzIHVua25vd24gdHlwZSBcIitnZXRUeXBlTmFtZShyYXdUeXBlKSl9cmV0dXJuIGltcGx9ZnVuY3Rpb24gX19lbXZhbF90YWtlX3ZhbHVlKHR5cGUsYXJnKXt0eXBlPXJlcXVpcmVSZWdpc3RlcmVkVHlwZSh0eXBlLFwiX2VtdmFsX3Rha2VfdmFsdWVcIik7dmFyIHY9dHlwZVtcInJlYWRWYWx1ZUZyb21Qb2ludGVyXCJdKGFyZyk7cmV0dXJuIEVtdmFsLnRvSGFuZGxlKHYpfWZ1bmN0aW9uIF9hYm9ydCgpe2Fib3J0KFwiXCIpfWZ1bmN0aW9uIF9lbXNjcmlwdGVuX21lbWNweV9iaWcoZGVzdCxzcmMsbnVtKXtIRUFQVTguY29weVdpdGhpbihkZXN0LHNyYyxzcmMrbnVtKX1mdW5jdGlvbiBnZXRIZWFwTWF4KCl7cmV0dXJuIDIxNDc0ODM2NDh9ZnVuY3Rpb24gZW1zY3JpcHRlbl9yZWFsbG9jX2J1ZmZlcihzaXplKXt2YXIgYj13YXNtTWVtb3J5LmJ1ZmZlcjt2YXIgcGFnZXM9c2l6ZS1iLmJ5dGVMZW5ndGgrNjU1MzU+Pj4xNjt0cnl7d2FzbU1lbW9yeS5ncm93KHBhZ2VzKTt1cGRhdGVNZW1vcnlWaWV3cygpO3JldHVybiAxfWNhdGNoKGUpe319ZnVuY3Rpb24gX2Vtc2NyaXB0ZW5fcmVzaXplX2hlYXAocmVxdWVzdGVkU2l6ZSl7dmFyIG9sZFNpemU9SEVBUFU4Lmxlbmd0aDtyZXF1ZXN0ZWRTaXplPXJlcXVlc3RlZFNpemU+Pj4wO3ZhciBtYXhIZWFwU2l6ZT1nZXRIZWFwTWF4KCk7aWYocmVxdWVzdGVkU2l6ZT5tYXhIZWFwU2l6ZSl7cmV0dXJuIGZhbHNlfXZhciBhbGlnblVwPSh4LG11bHRpcGxlKT0+eCsobXVsdGlwbGUteCVtdWx0aXBsZSklbXVsdGlwbGU7Zm9yKHZhciBjdXREb3duPTE7Y3V0RG93bjw9NDtjdXREb3duKj0yKXt2YXIgb3Zlckdyb3duSGVhcFNpemU9b2xkU2l6ZSooMSsuMi9jdXREb3duKTtvdmVyR3Jvd25IZWFwU2l6ZT1NYXRoLm1pbihvdmVyR3Jvd25IZWFwU2l6ZSxyZXF1ZXN0ZWRTaXplKzEwMDY2MzI5Nik7dmFyIG5ld1NpemU9TWF0aC5taW4obWF4SGVhcFNpemUsYWxpZ25VcChNYXRoLm1heChyZXF1ZXN0ZWRTaXplLG92ZXJHcm93bkhlYXBTaXplKSw2NTUzNikpO3ZhciByZXBsYWNlbWVudD1lbXNjcmlwdGVuX3JlYWxsb2NfYnVmZmVyKG5ld1NpemUpO2lmKHJlcGxhY2VtZW50KXtyZXR1cm4gdHJ1ZX19cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIGluaXRSYW5kb21GaWxsKCl7aWYodHlwZW9mIGNyeXB0bz09XCJvYmplY3RcIiYmdHlwZW9mIGNyeXB0b1tcImdldFJhbmRvbVZhbHVlc1wiXT09XCJmdW5jdGlvblwiKXtyZXR1cm4gdmlldz0+Y3J5cHRvLmdldFJhbmRvbVZhbHVlcyh2aWV3KX1lbHNlIGFib3J0KFwiaW5pdFJhbmRvbURldmljZVwiKX1mdW5jdGlvbiByYW5kb21GaWxsKHZpZXcpe3JldHVybihyYW5kb21GaWxsPWluaXRSYW5kb21GaWxsKCkpKHZpZXcpfWZ1bmN0aW9uIF9nZXRlbnRyb3B5KGJ1ZmZlcixzaXplKXtyYW5kb21GaWxsKEhFQVBVOC5zdWJhcnJheShidWZmZXIsYnVmZmVyK3NpemUpKTtyZXR1cm4gMH1lbWJpbmRfaW5pdF9jaGFyQ29kZXMoKTtCaW5kaW5nRXJyb3I9TW9kdWxlW1wiQmluZGluZ0Vycm9yXCJdPWV4dGVuZEVycm9yKEVycm9yLFwiQmluZGluZ0Vycm9yXCIpO0ludGVybmFsRXJyb3I9TW9kdWxlW1wiSW50ZXJuYWxFcnJvclwiXT1leHRlbmRFcnJvcihFcnJvcixcIkludGVybmFsRXJyb3JcIik7aW5pdF9DbGFzc0hhbmRsZSgpO2luaXRfZW1iaW5kKCk7aW5pdF9SZWdpc3RlcmVkUG9pbnRlcigpO1VuYm91bmRUeXBlRXJyb3I9TW9kdWxlW1wiVW5ib3VuZFR5cGVFcnJvclwiXT1leHRlbmRFcnJvcihFcnJvcixcIlVuYm91bmRUeXBlRXJyb3JcIik7aW5pdF9lbXZhbCgpO3ZhciB3YXNtSW1wb3J0cz17XCJnXCI6X19fY3hhX3Rocm93LFwicFwiOl9fZW1iaW5kX3JlZ2lzdGVyX2JpZ2ludCxcImxcIjpfX2VtYmluZF9yZWdpc3Rlcl9ib29sLFwiZlwiOl9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzLFwiZVwiOl9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX2NvbnN0cnVjdG9yLFwiYVwiOl9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX2Z1bmN0aW9uLFwidFwiOl9fZW1iaW5kX3JlZ2lzdGVyX2VtdmFsLFwia1wiOl9fZW1iaW5kX3JlZ2lzdGVyX2Zsb2F0LFwiY1wiOl9fZW1iaW5kX3JlZ2lzdGVyX2ludGVnZXIsXCJiXCI6X19lbWJpbmRfcmVnaXN0ZXJfbWVtb3J5X3ZpZXcsXCJqXCI6X19lbWJpbmRfcmVnaXN0ZXJfc3RkX3N0cmluZyxcImRcIjpfX2VtYmluZF9yZWdpc3Rlcl9zdGRfd3N0cmluZyxcIm1cIjpfX2VtYmluZF9yZWdpc3Rlcl92b2lkLFwiblwiOl9fZW12YWxfZGVjcmVmLFwib1wiOl9fZW12YWxfaW5jcmVmLFwiaFwiOl9fZW12YWxfdGFrZV92YWx1ZSxcImlcIjpfYWJvcnQsXCJzXCI6X2Vtc2NyaXB0ZW5fbWVtY3B5X2JpZyxcInJcIjpfZW1zY3JpcHRlbl9yZXNpemVfaGVhcCxcInFcIjpfZ2V0ZW50cm9weX07dmFyIGFzbT1jcmVhdGVXYXNtKCk7dmFyIF9fX3dhc21fY2FsbF9jdG9ycz1mdW5jdGlvbigpe3JldHVybihfX193YXNtX2NhbGxfY3RvcnM9TW9kdWxlW1wiYXNtXCJdW1widlwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX19fZ2V0VHlwZU5hbWU9ZnVuY3Rpb24oKXtyZXR1cm4oX19fZ2V0VHlwZU5hbWU9TW9kdWxlW1wiYXNtXCJdW1wieFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX19lbWJpbmRfaW5pdGlhbGl6ZV9iaW5kaW5ncz1Nb2R1bGVbXCJfX2VtYmluZF9pbml0aWFsaXplX2JpbmRpbmdzXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9fZW1iaW5kX2luaXRpYWxpemVfYmluZGluZ3M9TW9kdWxlW1wiX19lbWJpbmRfaW5pdGlhbGl6ZV9iaW5kaW5nc1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJ5XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfX19lcnJub19sb2NhdGlvbj1mdW5jdGlvbigpe3JldHVybihfX19lcnJub19sb2NhdGlvbj1Nb2R1bGVbXCJhc21cIl1bXCJfX2Vycm5vX2xvY2F0aW9uXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfbWFsbG9jPWZ1bmN0aW9uKCl7cmV0dXJuKF9tYWxsb2M9TW9kdWxlW1wiYXNtXCJdW1wielwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX2ZyZWU9ZnVuY3Rpb24oKXtyZXR1cm4oX2ZyZWU9TW9kdWxlW1wiYXNtXCJdW1wiQVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX19fY3hhX2lzX3BvaW50ZXJfdHlwZT1mdW5jdGlvbigpe3JldHVybihfX19jeGFfaXNfcG9pbnRlcl90eXBlPU1vZHVsZVtcImFzbVwiXVtcIkJcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIGNhbGxlZFJ1bjtkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9ZnVuY3Rpb24gcnVuQ2FsbGVyKCl7aWYoIWNhbGxlZFJ1bilydW4oKTtpZighY2FsbGVkUnVuKWRlcGVuZGVuY2llc0Z1bGZpbGxlZD1ydW5DYWxsZXJ9O2Z1bmN0aW9uIHJ1bigpe2lmKHJ1bkRlcGVuZGVuY2llcz4wKXtyZXR1cm59cHJlUnVuKCk7aWYocnVuRGVwZW5kZW5jaWVzPjApe3JldHVybn1mdW5jdGlvbiBkb1J1bigpe2lmKGNhbGxlZFJ1bilyZXR1cm47Y2FsbGVkUnVuPXRydWU7TW9kdWxlW1wiY2FsbGVkUnVuXCJdPXRydWU7aWYoQUJPUlQpcmV0dXJuO2luaXRSdW50aW1lKCk7aWYoTW9kdWxlW1wib25SdW50aW1lSW5pdGlhbGl6ZWRcIl0pTW9kdWxlW1wib25SdW50aW1lSW5pdGlhbGl6ZWRcIl0oKTtwb3N0UnVuKCl9aWYoTW9kdWxlW1wic2V0U3RhdHVzXCJdKXtNb2R1bGVbXCJzZXRTdGF0dXNcIl0oXCJSdW5uaW5nLi4uXCIpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7TW9kdWxlW1wic2V0U3RhdHVzXCJdKFwiXCIpfSwxKTtkb1J1bigpfSwxKX1lbHNle2RvUnVuKCl9fWlmKE1vZHVsZVtcInByZUluaXRcIl0pe2lmKHR5cGVvZiBNb2R1bGVbXCJwcmVJbml0XCJdPT1cImZ1bmN0aW9uXCIpTW9kdWxlW1wicHJlSW5pdFwiXT1bTW9kdWxlW1wicHJlSW5pdFwiXV07d2hpbGUoTW9kdWxlW1wicHJlSW5pdFwiXS5sZW5ndGg+MCl7TW9kdWxlW1wicHJlSW5pdFwiXS5wb3AoKSgpfX1ydW4oKTtcblxuZXhwb3J0IHsgTW9kdWxlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==