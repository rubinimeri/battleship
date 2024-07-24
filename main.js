/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    /* border: 1px solid; */
}

body {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.board-container {
    min-height: 70vh;
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    position: relative;
}

.player,
.computer {
    margin: 20px;
    border: 1px solid;
}

.cell {
    border: 1px solid;
    padding: 20px;
}

.faded,
.faded .cell{
    border: 1px solid lightgray;
}

.computer .cell:hover {
    border: 1px solid skyblue;
    box-shadow: inset 0px 0px 20px 0px skyblue;
}

.row {
    display: flex;
}

.ship {
    background-color: skyblue;
}

.successful-attack {
    position: relative;
}

.successful-attack::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "\\274c"; /* use the hex value here... */
    font-size: 25px; 
    color: #FFF;
    line-height: 42px;
    text-align: center;
}

.missed-attack {
    background-color: #777777;
}

.invisible {
    display: none;
}

.randomize {
    flex-grow: 0;
}

.randomize {
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    font-size: 16px;
    background: white;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.randomize:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.randomize:active {
    color: #000
}

.randomize:active:after {
    background: transparent;
}

.randomize:hover:before {
    opacity: 1;
}

.randomize:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    border: 1px solid;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}

.start {
    position: absolute;
    left: 65%;
    top: 50%;
}

.start-randomize {
    flex-shrink: 5;
    display: flex;
    flex-direction: column;
}

.start {
  background-color: skyblue;
  border: 0 solid #E5E7EB;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: .75rem 1.65rem;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 150px;
  max-width: 460px;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.start:focus {
  outline: 0;
}

.start:after {
  content: '';
  position: absolute;
  border: 1px solid #000000;
  bottom: 4px;
  left: 4px;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}

.start:hover:after {
  bottom: 2px;
  left: 2px;
}

@media (min-width: 768px) {
  .start {
    padding: .75rem 3rem;
    font-size: 1.25rem;
  }
}

.restart {
    background: white;
    font-size: 16px;
    border: 1px solid;
    padding: 12px 24px;
    cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sMAAsM;IACtM,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,eAAe;IACf,kBAAkB;AACtB;;AAEA;;IAEI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,aAAa;AACjB;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;IACI,yBAAyB;IACzB,0CAA0C;AAC9C;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,gBAAgB,EAAE,8BAA8B;IAChD,eAAe;IACf,WAAW;IACX,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,mHAAmH;IACnH,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,qBAAqB;IACrB,WAAW;IACX,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;IACxB,sCAAsC;IACtC,UAAU;IACV,mCAAmC;IACnC,mBAAmB;AACvB;;AAEA;IACI;AACJ;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,OAAO;IACP,MAAM;IACN,mBAAmB;AACvB;;AAEA;IACI,KAAK,wBAAwB,EAAE;IAC/B,MAAM,2BAA2B,EAAE;IACnC,OAAO,wBAAwB,EAAE;AACrC;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;AACZ;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;AAC1B;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,sBAAsB;EACtB,cAAc;EACd,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,oBAAoB;EACpB,uBAAuB;EACvB,kBAAkB;EAClB,mCAAmC;EACnC,+BAA+B;EAC/B,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,wBAAwB;EACxB,iBAAiB;EACjB,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;EACX,SAAS;EACT,uBAAuB;EACvB,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,SAAS;AACX;;AAEA;EACE;IACE,oBAAoB;IACpB,kBAAkB;EACpB;AACF;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;AACnB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    font-family: ui-sans-serif,system-ui,-apple-system,system-ui,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\n    /* border: 1px solid; */\n}\n\nbody {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.board-container {\n    min-height: 70vh;\n    width: 100%;\n    max-width: 1200px;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    position: relative;\n}\n\n.player,\n.computer {\n    margin: 20px;\n    border: 1px solid;\n}\n\n.cell {\n    border: 1px solid;\n    padding: 20px;\n}\n\n.faded,\n.faded .cell{\n    border: 1px solid lightgray;\n}\n\n.computer .cell:hover {\n    border: 1px solid skyblue;\n    box-shadow: inset 0px 0px 20px 0px skyblue;\n}\n\n.row {\n    display: flex;\n}\n\n.ship {\n    background-color: skyblue;\n}\n\n.successful-attack {\n    position: relative;\n}\n\n.successful-attack::after {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    content: \"\\274c\"; /* use the hex value here... */\n    font-size: 25px; \n    color: #FFF;\n    line-height: 42px;\n    text-align: center;\n}\n\n.missed-attack {\n    background-color: #777777;\n}\n\n.invisible {\n    display: none;\n}\n\n.randomize {\n    flex-grow: 0;\n}\n\n.randomize {\n    width: 220px;\n    height: 50px;\n    border: none;\n    outline: none;\n    font-size: 16px;\n    background: white;\n    cursor: pointer;\n    position: relative;\n    z-index: 0;\n    border-radius: 10px;\n}\n\n.randomize:before {\n    content: '';\n    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);\n    position: absolute;\n    top: -2px;\n    left:-2px;\n    background-size: 400%;\n    z-index: -1;\n    filter: blur(5px);\n    width: calc(100% + 4px);\n    height: calc(100% + 4px);\n    animation: glowing 20s linear infinite;\n    opacity: 0;\n    transition: opacity .3s ease-in-out;\n    border-radius: 10px;\n}\n\n.randomize:active {\n    color: #000\n}\n\n.randomize:active:after {\n    background: transparent;\n}\n\n.randomize:hover:before {\n    opacity: 1;\n}\n\n.randomize:after {\n    z-index: -1;\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: white;\n    border: 1px solid;\n    left: 0;\n    top: 0;\n    border-radius: 10px;\n}\n\n@keyframes glowing {\n    0% { background-position: 0 0; }\n    50% { background-position: 400% 0; }\n    100% { background-position: 0 0; }\n}\n\n.start {\n    position: absolute;\n    left: 65%;\n    top: 50%;\n}\n\n.start-randomize {\n    flex-shrink: 5;\n    display: flex;\n    flex-direction: column;\n}\n\n.start {\n  background-color: skyblue;\n  border: 0 solid #E5E7EB;\n  box-sizing: border-box;\n  color: #000000;\n  display: flex;\n  font-size: 1rem;\n  font-weight: 700;\n  justify-content: center;\n  line-height: 1.75rem;\n  padding: .75rem 1.65rem;\n  text-align: center;\n  text-decoration: none #000000 solid;\n  text-decoration-thickness: auto;\n  width: 150px;\n  max-width: 460px;\n  cursor: pointer;\n  transform: rotate(-2deg);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n\n.start:focus {\n  outline: 0;\n}\n\n.start:after {\n  content: '';\n  position: absolute;\n  border: 1px solid #000000;\n  bottom: 4px;\n  left: 4px;\n  width: calc(100% - 1px);\n  height: calc(100% - 1px);\n}\n\n.start:hover:after {\n  bottom: 2px;\n  left: 2px;\n}\n\n@media (min-width: 768px) {\n  .start {\n    padding: .75rem 3rem;\n    font-size: 1.25rem;\n  }\n}\n\n.restart {\n    background: white;\n    font-size: 16px;\n    border: 1px solid;\n    padding: 12px 24px;\n    cursor: pointer;\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/Computer/Computer.js":
/*!**********************************!*\
  !*** ./src/Computer/Computer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Computer)
/* harmony export */ });
function Computer() {
  return {
    attack(enemy) {
      function randomCoordinates() {
        return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
      }

      // Return false if attack hasnt been made
      function checkAttacks(attacks, myCoordinates) {
        for (let i = 0; i < attacks.length; i++) {
          const [row, column] = myCoordinates;
          const missedAttackCoordinates = attacks[i];

          // Check values
          if (row === missedAttackCoordinates[0] && column === missedAttackCoordinates[1]) {
            return true;
          }
        }
        return false;
      }
      const { gameboard } = enemy;
      const { missedAttacks, successfulAttacks } = gameboard;
      const combinedAttacks = [...missedAttacks, ...successfulAttacks];
      let myCoordinates = randomCoordinates();

      // if combinedAttacks isnt empty then check if myCoordinates have already been attacked
      // if so then get new coordinates, else attack using those coordinates
      if (combinedAttacks.length) {
        while (checkAttacks(combinedAttacks, myCoordinates)) {
          myCoordinates = randomCoordinates();
        }
      }

      gameboard.receiveAttack(myCoordinates);
    },
  };
}


/***/ }),

/***/ "./src/Gameboard/Gameboard.js":
/*!************************************!*\
  !*** ./src/Gameboard/Gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Ship/Ship */ "./src/Ship/Ship.js");


function Gameboard() {
  // Create Grid
  function createGrid() {
    const grid = [];
    const gridSize = 10;

    for (let i = 0; i < gridSize; i++) {
      grid[i] = [];
      for (let j = 0; j < gridSize; j++) {
        grid[i][j] = {
          ship: null,
          missedAttack: null,
        };
      }
    }
    return grid;
  }

  // Check if there is already a ship on some coordinates
  function checkShipOnCoordinates(grid, coordinates, shipLength) {
    const myGrid = grid;
    const [row, column] = coordinates;
    const myShipLength = shipLength;
    const length = column + myShipLength;

    // If shipLength is not given, check ship only on the given coordinates
    // if ship exists then return true, else return false
    if (shipLength === undefined && myGrid[row][column].ship) return true;

    if (shipLength === undefined && !myGrid[row][column].ship) return false;

    for (let i = column; i < length; i++) {
      if (myGrid[row][i].ship) return true;
    }

    return false;
  }

  return {
    grid: createGrid(),
    ships: [],
    missedAttacks: [],
    successfulAttacks: [],
    removeShips() {
      this.ships = [];
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          this.grid[i][j].ship = null;
        }
      }
    },
    randomizeShips() {
      // Generate random coordinates from 0-9, ex: [0~9, 0~9]
      function randomCoordinates() {
        return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
      }

      const ships = [1, 1, 1, 2, 2, 2, 3, 3, 4, 5];
      for (let i = 0; i < ships.length; i++) {
        let [row, column] = randomCoordinates();
        while (!this.placeShip([row, column], ships[i])) {
          [row, column] = randomCoordinates();
        }
      }
    },
    placeShip(coordinates, shipLength) {
      const maxSize = 9;
      const [row, column] = coordinates;

      // Check if coordinates are valid
      if (column + shipLength - 1 > maxSize || row > maxSize || column > maxSize) return false;

      // Check if there is already a ship on these coordinates + shipLength
      if (checkShipOnCoordinates(this.grid, coordinates, shipLength)) return false;

      // Create new Ship object
      const newShip = (0,_Ship_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(shipLength);

      // Push newShip to ships property
      this.ships.push(newShip);

      // Place ship on coordinates
      for (let i = column; i < column + shipLength; i++) {
        this.grid[row][i].ship = newShip;
      }
      return true;
    },
    receiveAttack(coordinates) {
      const myGrid = this.grid;
      const [row, column] = coordinates;

      if (!checkShipOnCoordinates(myGrid, coordinates)) {
        // Add coordinates of the missed attack to missedAttacks property
        this.missedAttacks.push(coordinates);

        // Change missedAttack property to true
        myGrid[row][column].missedAttack = true;
        return;
      }

      // Change missedAttack property to false
      myGrid[row][column].missedAttack = false;

      // Add coordintates of successful attack to successfulAttacks property
      this.successfulAttacks.push(coordinates);

      myGrid[row][column].ship.hit();
    },
    allShipsSunk() {
      const myShips = this.ships;

      // If a ship isnt sunk then return false
      for (const ship of myShips) {
        if (!ship.isSunk()) return false;
      }

      // Otherwise return true
      return true;
    },
  };
}


/***/ }),

/***/ "./src/Player/Player.js":
/*!******************************!*\
  !*** ./src/Player/Player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Gameboard/Gameboard */ "./src/Gameboard/Gameboard.js");


function Player() {
  return {
    gameboard: (0,_Gameboard_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    turn: null,
    // sendAttack method that accepts a coordinate and the enemy gameboard
    // Sends an attack to that enemy gameboard, and changes turn property to false
    sendAttack(coordinates, enemy) {
      // Attack enemy coordinates
      const { gameboard } = enemy;
      gameboard.receiveAttack(coordinates);

      // Change turns
      enemy.turn = true;
      this.turn = false;
    },
  };
}


/***/ }),

/***/ "./src/Ship/Ship.js":
/*!**************************!*\
  !*** ./src/Ship/Ship.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length) {
  return {
    length,
    hits: 0,
    hit() {
      return this.hits++;
    },
    isSunk() {
      return this.hits === this.length;
    },
  };
}


/***/ }),

/***/ "./src/eventHandler.js":
/*!*****************************!*\
  !*** ./src/eventHandler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userInterface */ "./src/userInterface.js");
/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player/Player */ "./src/Player/Player.js");
/* harmony import */ var _Computer_Computer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Computer/Computer */ "./src/Computer/Computer.js");




// Mock
const player = (0,_Player_Player__WEBPACK_IMPORTED_MODULE_1__["default"])();
const { gameboard } = player;

const computer = (0,_Player_Player__WEBPACK_IMPORTED_MODULE_1__["default"])();
const computerGameboard = computer.gameboard;

const AI = (0,_Computer_Computer__WEBPACK_IMPORTED_MODULE_2__["default"])();

gameboard.randomizeShips();

computerGameboard.randomizeShips();

// Mock

const EventHandlers = (() => {
  function cellAttack(e) {
    const cell = e.target;
    // Get attack coordinates
    const row = parseInt(cell.getAttribute('data-x'), 10);
    const column = parseInt(cell.getAttribute('data-y'), 10);

    // Send attack to computer
    player.sendAttack([row, column], computer);

    // Load new computer board
    _userInterface__WEBPACK_IMPORTED_MODULE_0__.UI.loadComputerBoard(computer);
    if (computer.gameboard.allShipsSunk()) return _userInterface__WEBPACK_IMPORTED_MODULE_0__.UI.endGame('player');

    // Make computer attack player
    AI.attack(player);

    // Load new player board
    _userInterface__WEBPACK_IMPORTED_MODULE_0__.UI.loadPlayerBoard(player);
    if (player.gameboard.allShipsSunk()) return _userInterface__WEBPACK_IMPORTED_MODULE_0__.UI.endGame('computer');
    cellListener();
  }

  function cellListener() {
    // Add event listener to new computer board cells
    const computerBoardCells = Array.from(document.querySelectorAll('.computer .cell'));
    computerBoardCells.forEach((cell) => {
      if (!(cell.classList.contains('successful-attack') || cell.classList.contains('missed-attack'))) cell.addEventListener('click', cellAttack);
    });
  }
  function init(player, computer) {
    _userInterface__WEBPACK_IMPORTED_MODULE_0__.UI.loadPlayerBoard(player);
    _userInterface__WEBPACK_IMPORTED_MODULE_0__.UI.loadComputerBoard(computer);

    const startButton = document.querySelector('.start');
    const restartButton = document.querySelector('.restart');
    const randomizeButton = document.querySelector('.randomize');

    startButton.addEventListener('click', () => {
      _userInterface__WEBPACK_IMPORTED_MODULE_0__.UI.startGame();
      cellListener();
    });

    restartButton.addEventListener('click', () => {
      // TODO: create new mock instead of reloading
      window.location.reload();
    });

    randomizeButton.addEventListener('click', () => {
      gameboard.removeShips();
      computerGameboard.removeShips();
      gameboard.randomizeShips();
      computerGameboard.randomizeShips();

      _userInterface__WEBPACK_IMPORTED_MODULE_0__.UI.loadPlayerBoard(player);
      _userInterface__WEBPACK_IMPORTED_MODULE_0__.UI.loadComputerBoard(computer);
      cellListener();
    });
  }

  return {
    init,
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  EventHandlers.init(player, computer);
});


/***/ }),

/***/ "./src/userInterface.js":
/*!******************************!*\
  !*** ./src/userInterface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UI: () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _eventHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventHandler */ "./src/eventHandler.js");


// eslint-disable-next-line import/prefer-default-export
const UI = (() => {
  function checkAttacks(missedAttacks, successfulAttacks, coordinates) {
    const [row, column] = coordinates;
    if (missedAttacks.find((attack) => row === attack[0] && column === attack[1])) return false;
    if (
      successfulAttacks.find((attack) => row === attack[0] && column === attack[1])) return true;
    return null;
  }

  function loadPlayerBoard(player) {
    const DOMBoard = document.querySelector('.player');
    const boardLength = 10;

    // Remove previous board
    while (DOMBoard.lastChild) {
      DOMBoard.removeChild(DOMBoard.lastChild);
    }

    const { missedAttacks, successfulAttacks } = player.gameboard;

    for (let i = 0; i < boardLength; i++) {
      // Create row element and add it to board
      const row = document.createElement('div');
      row.classList.add('row');
      DOMBoard.append(row);

      for (let j = 0; j < boardLength; j++) {
        // Create cell and add it to row
        const cell = document.createElement('div');
        cell.dataset.x = i;
        cell.dataset.y = j;
        cell.classList.add('cell');
        row.append(cell);

        // Check if an attack has occured on that cell
        if (checkAttacks(missedAttacks, successfulAttacks, [i, j])) {
          cell.classList.add('successful-attack');
        } else if (checkAttacks(missedAttacks, successfulAttacks, [i, j]) === false) {
          cell.classList.add('missed-attack');
        } else if (checkAttacks(missedAttacks, successfulAttacks, [i, j]) === null) {
          // Check if there is a ship on that cell
          const { grid } = player.gameboard;

          if (grid[i][j].ship !== null) cell.classList.add('ship');
        }
      }
    }
  }
  function loadComputerBoard(computer) {
    const DOMBoard = document.querySelector('.computer');
    const boardLength = 10;

    // Remove previous board
    while (DOMBoard.lastChild) {
      DOMBoard.removeChild(DOMBoard.lastChild);
    }

    const { missedAttacks, successfulAttacks } = computer.gameboard;

    for (let i = 0; i < boardLength; i++) {
      // Create row element and add it to board
      const row = document.createElement('div');
      row.classList.add('row');
      DOMBoard.append(row);

      for (let j = 0; j < boardLength; j++) {
        // Create cell and add it to row
        const cell = document.createElement('div');
        cell.dataset.x = i;
        cell.dataset.y = j;
        cell.classList.add('cell');
        row.append(cell);

        // Check if an attack has occured on that cell
        if (checkAttacks(missedAttacks, successfulAttacks, [i, j])) {
          cell.classList.add('successful-attack');
        } else if (checkAttacks(missedAttacks, successfulAttacks, [i, j]) === false) {
          cell.classList.add('missed-attack');
        }
      }
    }
  }
  function startGame() {
    const startButton = document.querySelector('.start');
    const randomizeButton = document.querySelector('.randomize');
    const restartButton = document.querySelector('.restart');
    startButton.style.display = 'none';
    randomizeButton.style.display = 'none';
    restartButton.classList.remove('invisible');
  }
  function endGame(winner) {
    const winnerContainer = document.querySelector('.winner-container');

    // Create DOM elements
    const title = document.createElement('h1');
    title.classList.add('winner');

    winnerContainer.append(title);
    winnerContainer.classList.remove('invisible');

    if (winner === 'computer') title.textContent = 'Computer Wins!';
    else title.textContent = 'Player Wins!';
  }

  return {
    loadPlayerBoard,
    loadComputerBoard,
    startGame,
    endGame,
  };
})();


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInterface */ "./src/userInterface.js");
/* harmony import */ var _eventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventHandler */ "./src/eventHandler.js");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNIO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Db21wdXRlci9Db21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvU2hpcC9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdXNlckludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZixzeXN0ZW0tdWksLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksXCJTZWdvZSBVSVwiLFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsXCJOb3RvIFNhbnNcIixzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIixcIk5vdG8gQ29sb3IgRW1vamlcIjtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZDsgKi9cbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJvYXJkLWNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogNzB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBsYXllcixcbi5jb21wdXRlciB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uY2VsbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmZhZGVkLFxuLmZhZGVkIC5jZWxse1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLmNvbXB1dGVyIC5jZWxsOmhvdmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBza3libHVlO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjBweCAwcHggc2t5Ymx1ZTtcbn1cblxuLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG59XG5cbi5zdWNjZXNzZnVsLWF0dGFjayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3VjY2Vzc2Z1bC1hdHRhY2s6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGNvbnRlbnQ6IFwiXFxcXDI3NGNcIjsgLyogdXNlIHRoZSBoZXggdmFsdWUgaGVyZS4uLiAqL1xuICAgIGZvbnQtc2l6ZTogMjVweDsgXG4gICAgY29sb3I6ICNGRkY7XG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWlzc2VkLWF0dGFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nzc3Nztcbn1cblxuLmludmlzaWJsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnJhbmRvbWl6ZSB7XG4gICAgZmxleC1ncm93OiAwO1xufVxuXG4ucmFuZG9taXplIHtcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnJhbmRvbWl6ZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmMDAwMCwgI2ZmNzMwMCwgI2ZmZmIwMCwgIzQ4ZmYwMCwgIzAwZmZkNSwgIzAwMmJmZiwgIzdhMDBmZiwgI2ZmMDBjOCwgI2ZmMDAwMCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTJweDtcbiAgICBsZWZ0Oi0ycHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGZpbHRlcjogYmx1cig1cHgpO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA0cHgpO1xuICAgIGhlaWdodDogY2FsYygxMDAlICsgNHB4KTtcbiAgICBhbmltYXRpb246IGdsb3dpbmcgMjBzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5yYW5kb21pemU6YWN0aXZlIHtcbiAgICBjb2xvcjogIzAwMFxufVxuXG4ucmFuZG9taXplOmFjdGl2ZTphZnRlciB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5yYW5kb21pemU6aG92ZXI6YmVmb3JlIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ucmFuZG9taXplOmFmdGVyIHtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbkBrZXlmcmFtZXMgZ2xvd2luZyB7XG4gICAgMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH1cbiAgICA1MCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MDAlIDA7IH1cbiAgICAxMDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XG59XG5cbi5zdGFydCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDY1JTtcbiAgICB0b3A6IDUwJTtcbn1cblxuLnN0YXJ0LXJhbmRvbWl6ZSB7XG4gICAgZmxleC1zaHJpbms6IDU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3RhcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xuICBib3JkZXI6IDAgc29saWQgI0U1RTdFQjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xuICBwYWRkaW5nOiAuNzVyZW0gMS42NXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIzAwMDAwMCBzb2xpZDtcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogYXV0bztcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDQ2MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xufVxuXG4uc3RhcnQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4uc3RhcnQ6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBib3R0b206IDRweDtcbiAgbGVmdDogNHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMXB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxcHgpO1xufVxuXG4uc3RhcnQ6aG92ZXI6YWZ0ZXIge1xuICBib3R0b206IDJweDtcbiAgbGVmdDogMnB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnN0YXJ0IHtcbiAgICBwYWRkaW5nOiAuNzVyZW0gM3JlbTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cblxuLnJlc3RhcnQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNNQUFzTTtJQUN0TSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLGdCQUFnQixFQUFFLDhCQUE4QjtJQUNoRCxlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtSEFBbUg7SUFDbkgsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixzQ0FBc0M7SUFDdEMsVUFBVTtJQUNWLG1DQUFtQztJQUNuQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCxNQUFNO0lBQ04sbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksS0FBSyx3QkFBd0IsRUFBRTtJQUMvQixNQUFNLDJCQUEyQixFQUFFO0lBQ25DLE9BQU8sd0JBQXdCLEVBQUU7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7QUFDWjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtJQUNwQixrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLHN5c3RlbS11aSwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxcXFwiU2Vnb2UgVUlcXFwiLFJvYm90byxcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLEFyaWFsLFxcXCJOb3RvIFNhbnNcXFwiLHNhbnMtc2VyaWYsXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIixcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQ7ICovXFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDcwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucGxheWVyLFxcbi5jb21wdXRlciB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5mYWRlZCxcXG4uZmFkZWQgLmNlbGx7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG59XFxuXFxuLmNvbXB1dGVyIC5jZWxsOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2t5Ymx1ZTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyMHB4IDBweCBza3libHVlO1xcbn1cXG5cXG4ucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcbn1cXG5cXG4uc3VjY2Vzc2Z1bC1hdHRhY2sge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zdWNjZXNzZnVsLWF0dGFjazo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgY29udGVudDogXFxcIlxcXFwyNzRjXFxcIjsgLyogdXNlIHRoZSBoZXggdmFsdWUgaGVyZS4uLiAqL1xcbiAgICBmb250LXNpemU6IDI1cHg7IFxcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1pc3NlZC1hdHRhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3Nzc3O1xcbn1cXG5cXG4uaW52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJhbmRvbWl6ZSB7XFxuICAgIGZsZXgtZ3JvdzogMDtcXG59XFxuXFxuLnJhbmRvbWl6ZSB7XFxuICAgIHdpZHRoOiAyMjBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucmFuZG9taXplOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZjAwMDAsICNmZjczMDAsICNmZmZiMDAsICM0OGZmMDAsICMwMGZmZDUsICMwMDJiZmYsICM3YTAwZmYsICNmZjAwYzgsICNmZjAwMDApO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTJweDtcXG4gICAgbGVmdDotMnB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCU7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDRweCk7XFxuICAgIGhlaWdodDogY2FsYygxMDAlICsgNHB4KTtcXG4gICAgYW5pbWF0aW9uOiBnbG93aW5nIDIwcyBsaW5lYXIgaW5maW5pdGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2UtaW4tb3V0O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucmFuZG9taXplOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjMDAwXFxufVxcblxcbi5yYW5kb21pemU6YWN0aXZlOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5yYW5kb21pemU6aG92ZXI6YmVmb3JlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnJhbmRvbWl6ZTphZnRlciB7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuQGtleWZyYW1lcyBnbG93aW5nIHtcXG4gICAgMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH1cXG4gICAgNTAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogNDAwJSAwOyB9XFxuICAgIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH1cXG59XFxuXFxuLnN0YXJ0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA2NSU7XFxuICAgIHRvcDogNTAlO1xcbn1cXG5cXG4uc3RhcnQtcmFuZG9taXplIHtcXG4gICAgZmxleC1zaHJpbms6IDU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zdGFydCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcbiAgYm9yZGVyOiAwIHNvbGlkICNFNUU3RUI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxuICBwYWRkaW5nOiAuNzVyZW0gMS42NXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAjMDAwMDAwIHNvbGlkO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogYXV0bztcXG4gIHdpZHRoOiAxNTBweDtcXG4gIG1heC13aWR0aDogNDYwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG59XFxuXFxuLnN0YXJ0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbi5zdGFydDphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxuICBib3R0b206IDRweDtcXG4gIGxlZnQ6IDRweDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxcHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxcHgpO1xcbn1cXG5cXG4uc3RhcnQ6aG92ZXI6YWZ0ZXIge1xcbiAgYm90dG9tOiAycHg7XFxuICBsZWZ0OiAycHg7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnN0YXJ0IHtcXG4gICAgcGFkZGluZzogLjc1cmVtIDNyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIH1cXG59XFxuXFxuLnJlc3RhcnQge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wdXRlcigpIHtcbiAgcmV0dXJuIHtcbiAgICBhdHRhY2soZW5lbXkpIHtcbiAgICAgIGZ1bmN0aW9uIHJhbmRvbUNvb3JkaW5hdGVzKCkge1xuICAgICAgICByZXR1cm4gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuIGZhbHNlIGlmIGF0dGFjayBoYXNudCBiZWVuIG1hZGVcbiAgICAgIGZ1bmN0aW9uIGNoZWNrQXR0YWNrcyhhdHRhY2tzLCBteUNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0YWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBteUNvb3JkaW5hdGVzO1xuICAgICAgICAgIGNvbnN0IG1pc3NlZEF0dGFja0Nvb3JkaW5hdGVzID0gYXR0YWNrc1tpXTtcblxuICAgICAgICAgIC8vIENoZWNrIHZhbHVlc1xuICAgICAgICAgIGlmIChyb3cgPT09IG1pc3NlZEF0dGFja0Nvb3JkaW5hdGVzWzBdICYmIGNvbHVtbiA9PT0gbWlzc2VkQXR0YWNrQ29vcmRpbmF0ZXNbMV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCB7IGdhbWVib2FyZCB9ID0gZW5lbXk7XG4gICAgICBjb25zdCB7IG1pc3NlZEF0dGFja3MsIHN1Y2Nlc3NmdWxBdHRhY2tzIH0gPSBnYW1lYm9hcmQ7XG4gICAgICBjb25zdCBjb21iaW5lZEF0dGFja3MgPSBbLi4ubWlzc2VkQXR0YWNrcywgLi4uc3VjY2Vzc2Z1bEF0dGFja3NdO1xuICAgICAgbGV0IG15Q29vcmRpbmF0ZXMgPSByYW5kb21Db29yZGluYXRlcygpO1xuXG4gICAgICAvLyBpZiBjb21iaW5lZEF0dGFja3MgaXNudCBlbXB0eSB0aGVuIGNoZWNrIGlmIG15Q29vcmRpbmF0ZXMgaGF2ZSBhbHJlYWR5IGJlZW4gYXR0YWNrZWRcbiAgICAgIC8vIGlmIHNvIHRoZW4gZ2V0IG5ldyBjb29yZGluYXRlcywgZWxzZSBhdHRhY2sgdXNpbmcgdGhvc2UgY29vcmRpbmF0ZXNcbiAgICAgIGlmIChjb21iaW5lZEF0dGFja3MubGVuZ3RoKSB7XG4gICAgICAgIHdoaWxlIChjaGVja0F0dGFja3MoY29tYmluZWRBdHRhY2tzLCBteUNvb3JkaW5hdGVzKSkge1xuICAgICAgICAgIG15Q29vcmRpbmF0ZXMgPSByYW5kb21Db29yZGluYXRlcygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKG15Q29vcmRpbmF0ZXMpO1xuICAgIH0sXG4gIH07XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuLi9TaGlwL1NoaXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIC8vIENyZWF0ZSBHcmlkXG4gIGZ1bmN0aW9uIGNyZWF0ZUdyaWQoKSB7XG4gICAgY29uc3QgZ3JpZCA9IFtdO1xuICAgIGNvbnN0IGdyaWRTaXplID0gMTA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRTaXplOyBpKyspIHtcbiAgICAgIGdyaWRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ3JpZFNpemU7IGorKykge1xuICAgICAgICBncmlkW2ldW2pdID0ge1xuICAgICAgICAgIHNoaXA6IG51bGwsXG4gICAgICAgICAgbWlzc2VkQXR0YWNrOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ3JpZDtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHRoZXJlIGlzIGFscmVhZHkgYSBzaGlwIG9uIHNvbWUgY29vcmRpbmF0ZXNcbiAgZnVuY3Rpb24gY2hlY2tTaGlwT25Db29yZGluYXRlcyhncmlkLCBjb29yZGluYXRlcywgc2hpcExlbmd0aCkge1xuICAgIGNvbnN0IG15R3JpZCA9IGdyaWQ7XG4gICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGNvb3JkaW5hdGVzO1xuICAgIGNvbnN0IG15U2hpcExlbmd0aCA9IHNoaXBMZW5ndGg7XG4gICAgY29uc3QgbGVuZ3RoID0gY29sdW1uICsgbXlTaGlwTGVuZ3RoO1xuXG4gICAgLy8gSWYgc2hpcExlbmd0aCBpcyBub3QgZ2l2ZW4sIGNoZWNrIHNoaXAgb25seSBvbiB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXNcbiAgICAvLyBpZiBzaGlwIGV4aXN0cyB0aGVuIHJldHVybiB0cnVlLCBlbHNlIHJldHVybiBmYWxzZVxuICAgIGlmIChzaGlwTGVuZ3RoID09PSB1bmRlZmluZWQgJiYgbXlHcmlkW3Jvd11bY29sdW1uXS5zaGlwKSByZXR1cm4gdHJ1ZTtcblxuICAgIGlmIChzaGlwTGVuZ3RoID09PSB1bmRlZmluZWQgJiYgIW15R3JpZFtyb3ddW2NvbHVtbl0uc2hpcCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IGNvbHVtbjsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobXlHcmlkW3Jvd11baV0uc2hpcCkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBncmlkOiBjcmVhdGVHcmlkKCksXG4gICAgc2hpcHM6IFtdLFxuICAgIG1pc3NlZEF0dGFja3M6IFtdLFxuICAgIHN1Y2Nlc3NmdWxBdHRhY2tzOiBbXSxcbiAgICByZW1vdmVTaGlwcygpIHtcbiAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICB0aGlzLmdyaWRbaV1bal0uc2hpcCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHJhbmRvbWl6ZVNoaXBzKCkge1xuICAgICAgLy8gR2VuZXJhdGUgcmFuZG9tIGNvb3JkaW5hdGVzIGZyb20gMC05LCBleDogWzB+OSwgMH45XVxuICAgICAgZnVuY3Rpb24gcmFuZG9tQ29vcmRpbmF0ZXMoKSB7XG4gICAgICAgIHJldHVybiBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzaGlwcyA9IFsxLCAxLCAxLCAyLCAyLCAyLCAzLCAzLCA0LCA1XTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IFtyb3csIGNvbHVtbl0gPSByYW5kb21Db29yZGluYXRlcygpO1xuICAgICAgICB3aGlsZSAoIXRoaXMucGxhY2VTaGlwKFtyb3csIGNvbHVtbl0sIHNoaXBzW2ldKSkge1xuICAgICAgICAgIFtyb3csIGNvbHVtbl0gPSByYW5kb21Db29yZGluYXRlcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBwbGFjZVNoaXAoY29vcmRpbmF0ZXMsIHNoaXBMZW5ndGgpIHtcbiAgICAgIGNvbnN0IG1heFNpemUgPSA5O1xuICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGNvb3JkaW5hdGVzO1xuXG4gICAgICAvLyBDaGVjayBpZiBjb29yZGluYXRlcyBhcmUgdmFsaWRcbiAgICAgIGlmIChjb2x1bW4gKyBzaGlwTGVuZ3RoIC0gMSA+IG1heFNpemUgfHwgcm93ID4gbWF4U2l6ZSB8fCBjb2x1bW4gPiBtYXhTaXplKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGFscmVhZHkgYSBzaGlwIG9uIHRoZXNlIGNvb3JkaW5hdGVzICsgc2hpcExlbmd0aFxuICAgICAgaWYgKGNoZWNrU2hpcE9uQ29vcmRpbmF0ZXModGhpcy5ncmlkLCBjb29yZGluYXRlcywgc2hpcExlbmd0aCkpIHJldHVybiBmYWxzZTtcblxuICAgICAgLy8gQ3JlYXRlIG5ldyBTaGlwIG9iamVjdFxuICAgICAgY29uc3QgbmV3U2hpcCA9IFNoaXAoc2hpcExlbmd0aCk7XG5cbiAgICAgIC8vIFB1c2ggbmV3U2hpcCB0byBzaGlwcyBwcm9wZXJ0eVxuICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ld1NoaXApO1xuXG4gICAgICAvLyBQbGFjZSBzaGlwIG9uIGNvb3JkaW5hdGVzXG4gICAgICBmb3IgKGxldCBpID0gY29sdW1uOyBpIDwgY29sdW1uICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuZ3JpZFtyb3ddW2ldLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgICBjb25zdCBteUdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZXM7XG5cbiAgICAgIGlmICghY2hlY2tTaGlwT25Db29yZGluYXRlcyhteUdyaWQsIGNvb3JkaW5hdGVzKSkge1xuICAgICAgICAvLyBBZGQgY29vcmRpbmF0ZXMgb2YgdGhlIG1pc3NlZCBhdHRhY2sgdG8gbWlzc2VkQXR0YWNrcyBwcm9wZXJ0eVxuICAgICAgICB0aGlzLm1pc3NlZEF0dGFja3MucHVzaChjb29yZGluYXRlcyk7XG5cbiAgICAgICAgLy8gQ2hhbmdlIG1pc3NlZEF0dGFjayBwcm9wZXJ0eSB0byB0cnVlXG4gICAgICAgIG15R3JpZFtyb3ddW2NvbHVtbl0ubWlzc2VkQXR0YWNrID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGFuZ2UgbWlzc2VkQXR0YWNrIHByb3BlcnR5IHRvIGZhbHNlXG4gICAgICBteUdyaWRbcm93XVtjb2x1bW5dLm1pc3NlZEF0dGFjayA9IGZhbHNlO1xuXG4gICAgICAvLyBBZGQgY29vcmRpbnRhdGVzIG9mIHN1Y2Nlc3NmdWwgYXR0YWNrIHRvIHN1Y2Nlc3NmdWxBdHRhY2tzIHByb3BlcnR5XG4gICAgICB0aGlzLnN1Y2Nlc3NmdWxBdHRhY2tzLnB1c2goY29vcmRpbmF0ZXMpO1xuXG4gICAgICBteUdyaWRbcm93XVtjb2x1bW5dLnNoaXAuaGl0KCk7XG4gICAgfSxcbiAgICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICBjb25zdCBteVNoaXBzID0gdGhpcy5zaGlwcztcblxuICAgICAgLy8gSWYgYSBzaGlwIGlzbnQgc3VuayB0aGVuIHJldHVybiBmYWxzZVxuICAgICAgZm9yIChjb25zdCBzaGlwIG9mIG15U2hpcHMpIHtcbiAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIE90aGVyd2lzZSByZXR1cm4gdHJ1ZVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgfTtcbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi4vR2FtZWJvYXJkL0dhbWVib2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcigpIHtcbiAgcmV0dXJuIHtcbiAgICBnYW1lYm9hcmQ6IEdhbWVib2FyZCgpLFxuICAgIHR1cm46IG51bGwsXG4gICAgLy8gc2VuZEF0dGFjayBtZXRob2QgdGhhdCBhY2NlcHRzIGEgY29vcmRpbmF0ZSBhbmQgdGhlIGVuZW15IGdhbWVib2FyZFxuICAgIC8vIFNlbmRzIGFuIGF0dGFjayB0byB0aGF0IGVuZW15IGdhbWVib2FyZCwgYW5kIGNoYW5nZXMgdHVybiBwcm9wZXJ0eSB0byBmYWxzZVxuICAgIHNlbmRBdHRhY2soY29vcmRpbmF0ZXMsIGVuZW15KSB7XG4gICAgICAvLyBBdHRhY2sgZW5lbXkgY29vcmRpbmF0ZXNcbiAgICAgIGNvbnN0IHsgZ2FtZWJvYXJkIH0gPSBlbmVteTtcbiAgICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcblxuICAgICAgLy8gQ2hhbmdlIHR1cm5zXG4gICAgICBlbmVteS50dXJuID0gdHJ1ZTtcbiAgICAgIHRoaXMudHVybiA9IGZhbHNlO1xuICAgIH0sXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKGxlbmd0aCkge1xuICByZXR1cm4ge1xuICAgIGxlbmd0aCxcbiAgICBoaXRzOiAwLFxuICAgIGhpdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmhpdHMrKztcbiAgICB9LFxuICAgIGlzU3VuaygpIHtcbiAgICAgIHJldHVybiB0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoO1xuICAgIH0sXG4gIH07XG59XG4iLCJpbXBvcnQgeyBVSSB9IGZyb20gJy4vdXNlckludGVyZmFjZSc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyL1BsYXllcic7XG5pbXBvcnQgQ29tcHV0ZXIgZnJvbSAnLi9Db21wdXRlci9Db21wdXRlcic7XG5cbi8vIE1vY2tcbmNvbnN0IHBsYXllciA9IFBsYXllcigpO1xuY29uc3QgeyBnYW1lYm9hcmQgfSA9IHBsYXllcjtcblxuY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoKTtcbmNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkID0gY29tcHV0ZXIuZ2FtZWJvYXJkO1xuXG5jb25zdCBBSSA9IENvbXB1dGVyKCk7XG5cbmdhbWVib2FyZC5yYW5kb21pemVTaGlwcygpO1xuXG5jb21wdXRlckdhbWVib2FyZC5yYW5kb21pemVTaGlwcygpO1xuXG4vLyBNb2NrXG5cbmNvbnN0IEV2ZW50SGFuZGxlcnMgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBjZWxsQXR0YWNrKGUpIHtcbiAgICBjb25zdCBjZWxsID0gZS50YXJnZXQ7XG4gICAgLy8gR2V0IGF0dGFjayBjb29yZGluYXRlc1xuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSwgMTApO1xuICAgIGNvbnN0IGNvbHVtbiA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXknKSwgMTApO1xuXG4gICAgLy8gU2VuZCBhdHRhY2sgdG8gY29tcHV0ZXJcbiAgICBwbGF5ZXIuc2VuZEF0dGFjayhbcm93LCBjb2x1bW5dLCBjb21wdXRlcik7XG5cbiAgICAvLyBMb2FkIG5ldyBjb21wdXRlciBib2FyZFxuICAgIFVJLmxvYWRDb21wdXRlckJvYXJkKGNvbXB1dGVyKTtcbiAgICBpZiAoY29tcHV0ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSByZXR1cm4gVUkuZW5kR2FtZSgncGxheWVyJyk7XG5cbiAgICAvLyBNYWtlIGNvbXB1dGVyIGF0dGFjayBwbGF5ZXJcbiAgICBBSS5hdHRhY2socGxheWVyKTtcblxuICAgIC8vIExvYWQgbmV3IHBsYXllciBib2FyZFxuICAgIFVJLmxvYWRQbGF5ZXJCb2FyZChwbGF5ZXIpO1xuICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSByZXR1cm4gVUkuZW5kR2FtZSgnY29tcHV0ZXInKTtcbiAgICBjZWxsTGlzdGVuZXIoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNlbGxMaXN0ZW5lcigpIHtcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gbmV3IGNvbXB1dGVyIGJvYXJkIGNlbGxzXG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZENlbGxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcHV0ZXIgLmNlbGwnKSk7XG4gICAgY29tcHV0ZXJCb2FyZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGlmICghKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWNjZXNzZnVsLWF0dGFjaycpIHx8IGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzZWQtYXR0YWNrJykpKSBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2VsbEF0dGFjayk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gaW5pdChwbGF5ZXIsIGNvbXB1dGVyKSB7XG4gICAgVUkubG9hZFBsYXllckJvYXJkKHBsYXllcik7XG4gICAgVUkubG9hZENvbXB1dGVyQm9hcmQoY29tcHV0ZXIpO1xuXG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcbiAgICBjb25zdCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQnKTtcbiAgICBjb25zdCByYW5kb21pemVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9taXplJyk7XG5cbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIFVJLnN0YXJ0R2FtZSgpO1xuICAgICAgY2VsbExpc3RlbmVyKCk7XG4gICAgfSk7XG5cbiAgICByZXN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgLy8gVE9ETzogY3JlYXRlIG5ldyBtb2NrIGluc3RlYWQgb2YgcmVsb2FkaW5nXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICByYW5kb21pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBnYW1lYm9hcmQucmVtb3ZlU2hpcHMoKTtcbiAgICAgIGNvbXB1dGVyR2FtZWJvYXJkLnJlbW92ZVNoaXBzKCk7XG4gICAgICBnYW1lYm9hcmQucmFuZG9taXplU2hpcHMoKTtcbiAgICAgIGNvbXB1dGVyR2FtZWJvYXJkLnJhbmRvbWl6ZVNoaXBzKCk7XG5cbiAgICAgIFVJLmxvYWRQbGF5ZXJCb2FyZChwbGF5ZXIpO1xuICAgICAgVUkubG9hZENvbXB1dGVyQm9hcmQoY29tcHV0ZXIpO1xuICAgICAgY2VsbExpc3RlbmVyKCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQsXG4gIH07XG59KSgpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBFdmVudEhhbmRsZXJzLmluaXQocGxheWVyLCBjb21wdXRlcik7XG59KTtcbiIsImltcG9ydCB7IEV2ZW50SGFuZGxlcnMgfSBmcm9tICcuL2V2ZW50SGFuZGxlcic7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY29uc3QgVUkgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBjaGVja0F0dGFja3MobWlzc2VkQXR0YWNrcywgc3VjY2Vzc2Z1bEF0dGFja3MsIGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGNvb3JkaW5hdGVzO1xuICAgIGlmIChtaXNzZWRBdHRhY2tzLmZpbmQoKGF0dGFjaykgPT4gcm93ID09PSBhdHRhY2tbMF0gJiYgY29sdW1uID09PSBhdHRhY2tbMV0pKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKFxuICAgICAgc3VjY2Vzc2Z1bEF0dGFja3MuZmluZCgoYXR0YWNrKSA9PiByb3cgPT09IGF0dGFja1swXSAmJiBjb2x1bW4gPT09IGF0dGFja1sxXSkpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9hZFBsYXllckJvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IERPTUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcicpO1xuICAgIGNvbnN0IGJvYXJkTGVuZ3RoID0gMTA7XG5cbiAgICAvLyBSZW1vdmUgcHJldmlvdXMgYm9hcmRcbiAgICB3aGlsZSAoRE9NQm9hcmQubGFzdENoaWxkKSB7XG4gICAgICBET01Cb2FyZC5yZW1vdmVDaGlsZChET01Cb2FyZC5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbWlzc2VkQXR0YWNrcywgc3VjY2Vzc2Z1bEF0dGFja3MgfSA9IHBsYXllci5nYW1lYm9hcmQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkTGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIENyZWF0ZSByb3cgZWxlbWVudCBhbmQgYWRkIGl0IHRvIGJvYXJkXG4gICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgIERPTUJvYXJkLmFwcGVuZChyb3cpO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgLy8gQ3JlYXRlIGNlbGwgYW5kIGFkZCBpdCB0byByb3dcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZWxsLmRhdGFzZXQueCA9IGk7XG4gICAgICAgIGNlbGwuZGF0YXNldC55ID0gajtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgIHJvdy5hcHBlbmQoY2VsbCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYW4gYXR0YWNrIGhhcyBvY2N1cmVkIG9uIHRoYXQgY2VsbFxuICAgICAgICBpZiAoY2hlY2tBdHRhY2tzKG1pc3NlZEF0dGFja3MsIHN1Y2Nlc3NmdWxBdHRhY2tzLCBbaSwgal0pKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzdWNjZXNzZnVsLWF0dGFjaycpO1xuICAgICAgICB9IGVsc2UgaWYgKGNoZWNrQXR0YWNrcyhtaXNzZWRBdHRhY2tzLCBzdWNjZXNzZnVsQXR0YWNrcywgW2ksIGpdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZC1hdHRhY2snKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGVja0F0dGFja3MobWlzc2VkQXR0YWNrcywgc3VjY2Vzc2Z1bEF0dGFja3MsIFtpLCBqXSkgPT09IG51bGwpIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHNoaXAgb24gdGhhdCBjZWxsXG4gICAgICAgICAgY29uc3QgeyBncmlkIH0gPSBwbGF5ZXIuZ2FtZWJvYXJkO1xuXG4gICAgICAgICAgaWYgKGdyaWRbaV1bal0uc2hpcCAhPT0gbnVsbCkgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbG9hZENvbXB1dGVyQm9hcmQoY29tcHV0ZXIpIHtcbiAgICBjb25zdCBET01Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlcicpO1xuICAgIGNvbnN0IGJvYXJkTGVuZ3RoID0gMTA7XG5cbiAgICAvLyBSZW1vdmUgcHJldmlvdXMgYm9hcmRcbiAgICB3aGlsZSAoRE9NQm9hcmQubGFzdENoaWxkKSB7XG4gICAgICBET01Cb2FyZC5yZW1vdmVDaGlsZChET01Cb2FyZC5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbWlzc2VkQXR0YWNrcywgc3VjY2Vzc2Z1bEF0dGFja3MgfSA9IGNvbXB1dGVyLmdhbWVib2FyZDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRMZW5ndGg7IGkrKykge1xuICAgICAgLy8gQ3JlYXRlIHJvdyBlbGVtZW50IGFuZCBhZGQgaXQgdG8gYm9hcmRcbiAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgRE9NQm9hcmQuYXBwZW5kKHJvdyk7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRMZW5ndGg7IGorKykge1xuICAgICAgICAvLyBDcmVhdGUgY2VsbCBhbmQgYWRkIGl0IHRvIHJvd1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNlbGwuZGF0YXNldC54ID0gaTtcbiAgICAgICAgY2VsbC5kYXRhc2V0LnkgPSBqO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgcm93LmFwcGVuZChjZWxsKTtcblxuICAgICAgICAvLyBDaGVjayBpZiBhbiBhdHRhY2sgaGFzIG9jY3VyZWQgb24gdGhhdCBjZWxsXG4gICAgICAgIGlmIChjaGVja0F0dGFja3MobWlzc2VkQXR0YWNrcywgc3VjY2Vzc2Z1bEF0dGFja3MsIFtpLCBqXSkpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3N1Y2Nlc3NmdWwtYXR0YWNrJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hlY2tBdHRhY2tzKG1pc3NlZEF0dGFja3MsIHN1Y2Nlc3NmdWxBdHRhY2tzLCBbaSwgal0pID09PSBmYWxzZSkge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzc2VkLWF0dGFjaycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xuICAgIGNvbnN0IHJhbmRvbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5kb21pemUnKTtcbiAgICBjb25zdCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQnKTtcbiAgICBzdGFydEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHJhbmRvbWl6ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHJlc3RhcnRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gIH1cbiAgZnVuY3Rpb24gZW5kR2FtZSh3aW5uZXIpIHtcbiAgICBjb25zdCB3aW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyLWNvbnRhaW5lcicpO1xuXG4gICAgLy8gQ3JlYXRlIERPTSBlbGVtZW50c1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd3aW5uZXInKTtcblxuICAgIHdpbm5lckNvbnRhaW5lci5hcHBlbmQodGl0bGUpO1xuICAgIHdpbm5lckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcblxuICAgIGlmICh3aW5uZXIgPT09ICdjb21wdXRlcicpIHRpdGxlLnRleHRDb250ZW50ID0gJ0NvbXB1dGVyIFdpbnMhJztcbiAgICBlbHNlIHRpdGxlLnRleHRDb250ZW50ID0gJ1BsYXllciBXaW5zISc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxvYWRQbGF5ZXJCb2FyZCxcbiAgICBsb2FkQ29tcHV0ZXJCb2FyZCxcbiAgICBzdGFydEdhbWUsXG4gICAgZW5kR2FtZSxcbiAgfTtcbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vdXNlckludGVyZmFjZSc7XG5pbXBvcnQgJy4vZXZlbnRIYW5kbGVyJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==