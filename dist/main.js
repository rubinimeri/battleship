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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
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
}

.row {
    display: flex;
}

.ship {
    background-color: #492af7;
}

.successful-attack {
    background-color: #ff6c6c;
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

.start-randomize {
    flex-shrink: 5;
    display: flex;
    flex-direction: column;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;;IAEI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,aAAa;AACjB;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;AAC1B","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    /* border: 1px solid; */\n}\n\nbody {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.board-container {\n    min-height: 70vh;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n\n.player,\n.computer {\n    margin: 20px;\n    border: 1px solid;\n}\n\n.cell {\n    border: 1px solid;\n    padding: 20px;\n}\n\n.faded,\n.faded .cell{\n    border: 1px solid lightgray;\n}\n\n.computer .cell:hover {\n    border: 1px solid skyblue;\n}\n\n.row {\n    display: flex;\n}\n\n.ship {\n    background-color: #492af7;\n}\n\n.successful-attack {\n    background-color: #ff6c6c;\n}\n\n.missed-attack {\n    background-color: #777777;\n}\n\n.invisible {\n    display: none;\n}\n\n.randomize {\n    flex-grow: 0;\n}\n\n.start-randomize {\n    flex-shrink: 5;\n    display: flex;\n    flex-direction: column;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBLFlBQVksbUNBQW1DOztBQUUvQyxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7VUNqSEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ0g7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0NvbXB1dGVyL0NvbXB1dGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1BsYXllci9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9TaGlwL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ldmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91c2VySW50ZXJmYWNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkOyAqL1xufVxuXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYm9hcmQtY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiA3MHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wbGF5ZXIsXG4uY29tcHV0ZXIge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmNlbGwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5mYWRlZCxcbi5mYWRlZCAuY2VsbHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5jb21wdXRlciAuY2VsbDpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgc2t5Ymx1ZTtcbn1cblxuLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTJhZjc7XG59XG5cbi5zdWNjZXNzZnVsLWF0dGFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmM2Yztcbn1cblxuLm1pc3NlZC1hdHRhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7XG59XG5cbi5pbnZpc2libGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yYW5kb21pemUge1xuICAgIGZsZXgtZ3JvdzogMDtcbn1cblxuLnN0YXJ0LXJhbmRvbWl6ZSB7XG4gICAgZmxleC1zaHJpbms6IDU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkOyAqL1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiA3MHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnBsYXllcixcXG4uY29tcHV0ZXIge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uZmFkZWQsXFxuLmZhZGVkIC5jZWxse1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxufVxcblxcbi5jb21wdXRlciAuY2VsbDpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNreWJsdWU7XFxufVxcblxcbi5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTJhZjc7XFxufVxcblxcbi5zdWNjZXNzZnVsLWF0dGFjayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZjNmM7XFxufVxcblxcbi5taXNzZWQtYXR0YWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nzc3NztcXG59XFxuXFxuLmludmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yYW5kb21pemUge1xcbiAgICBmbGV4LWdyb3c6IDA7XFxufVxcblxcbi5zdGFydC1yYW5kb21pemUge1xcbiAgICBmbGV4LXNocmluazogNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXB1dGVyKCkge1xuICByZXR1cm4ge1xuICAgIGF0dGFjayhlbmVteSkge1xuICAgICAgZnVuY3Rpb24gcmFuZG9tQ29vcmRpbmF0ZXMoKSB7XG4gICAgICAgIHJldHVybiBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm4gZmFsc2UgaWYgYXR0YWNrIGhhc250IGJlZW4gbWFkZVxuICAgICAgZnVuY3Rpb24gY2hlY2tBdHRhY2tzKGF0dGFja3MsIG15Q29vcmRpbmF0ZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IG15Q29vcmRpbmF0ZXM7XG4gICAgICAgICAgY29uc3QgbWlzc2VkQXR0YWNrQ29vcmRpbmF0ZXMgPSBhdHRhY2tzW2ldO1xuXG4gICAgICAgICAgLy8gQ2hlY2sgdmFsdWVzXG4gICAgICAgICAgaWYgKHJvdyA9PT0gbWlzc2VkQXR0YWNrQ29vcmRpbmF0ZXNbMF0gJiYgY29sdW1uID09PSBtaXNzZWRBdHRhY2tDb29yZGluYXRlc1sxXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgZ2FtZWJvYXJkIH0gPSBlbmVteTtcbiAgICAgIGNvbnN0IHsgbWlzc2VkQXR0YWNrcywgc3VjY2Vzc2Z1bEF0dGFja3MgfSA9IGdhbWVib2FyZDtcbiAgICAgIGNvbnN0IGNvbWJpbmVkQXR0YWNrcyA9IFsuLi5taXNzZWRBdHRhY2tzLCAuLi5zdWNjZXNzZnVsQXR0YWNrc107XG4gICAgICBsZXQgbXlDb29yZGluYXRlcyA9IHJhbmRvbUNvb3JkaW5hdGVzKCk7XG5cbiAgICAgIC8vIGlmIGNvbWJpbmVkQXR0YWNrcyBpc250IGVtcHR5IHRoZW4gY2hlY2sgaWYgbXlDb29yZGluYXRlcyBoYXZlIGFscmVhZHkgYmVlbiBhdHRhY2tlZFxuICAgICAgLy8gaWYgc28gdGhlbiBnZXQgbmV3IGNvb3JkaW5hdGVzLCBlbHNlIGF0dGFjayB1c2luZyB0aG9zZSBjb29yZGluYXRlc1xuICAgICAgaWYgKGNvbWJpbmVkQXR0YWNrcy5sZW5ndGgpIHtcbiAgICAgICAgd2hpbGUgKGNoZWNrQXR0YWNrcyhjb21iaW5lZEF0dGFja3MsIG15Q29vcmRpbmF0ZXMpKSB7XG4gICAgICAgICAgbXlDb29yZGluYXRlcyA9IHJhbmRvbUNvb3JkaW5hdGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sobXlDb29yZGluYXRlcyk7XG4gICAgfSxcbiAgfTtcbn1cbiIsImltcG9ydCBTaGlwIGZyb20gJy4uL1NoaXAvU2hpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgLy8gQ3JlYXRlIEdyaWRcbiAgZnVuY3Rpb24gY3JlYXRlR3JpZCgpIHtcbiAgICBjb25zdCBncmlkID0gW107XG4gICAgY29uc3QgZ3JpZFNpemUgPSAxMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZFNpemU7IGkrKykge1xuICAgICAgZ3JpZFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkU2l6ZTsgaisrKSB7XG4gICAgICAgIGdyaWRbaV1bal0gPSB7XG4gICAgICAgICAgc2hpcDogbnVsbCxcbiAgICAgICAgICBtaXNzZWRBdHRhY2s6IG51bGwsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBncmlkO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNoaXAgb24gc29tZSBjb29yZGluYXRlc1xuICBmdW5jdGlvbiBjaGVja1NoaXBPbkNvb3JkaW5hdGVzKGdyaWQsIGNvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoKSB7XG4gICAgY29uc3QgbXlHcmlkID0gZ3JpZDtcbiAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZXM7XG4gICAgY29uc3QgbXlTaGlwTGVuZ3RoID0gc2hpcExlbmd0aDtcbiAgICBjb25zdCBsZW5ndGggPSBjb2x1bW4gKyBteVNoaXBMZW5ndGg7XG5cbiAgICAvLyBJZiBzaGlwTGVuZ3RoIGlzIG5vdCBnaXZlbiwgY2hlY2sgc2hpcCBvbmx5IG9uIHRoZSBnaXZlbiBjb29yZGluYXRlc1xuICAgIC8vIGlmIHNoaXAgZXhpc3RzIHRoZW4gcmV0dXJuIHRydWUsIGVsc2UgcmV0dXJuIGZhbHNlXG4gICAgaWYgKHNoaXBMZW5ndGggPT09IHVuZGVmaW5lZCAmJiBteUdyaWRbcm93XVtjb2x1bW5dLnNoaXApIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKHNoaXBMZW5ndGggPT09IHVuZGVmaW5lZCAmJiAhbXlHcmlkW3Jvd11bY29sdW1uXS5zaGlwKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gY29sdW1uOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChteUdyaWRbcm93XVtpXS5zaGlwKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdyaWQ6IGNyZWF0ZUdyaWQoKSxcbiAgICBzaGlwczogW10sXG4gICAgbWlzc2VkQXR0YWNrczogW10sXG4gICAgc3VjY2Vzc2Z1bEF0dGFja3M6IFtdLFxuICAgIHJlbW92ZVNoaXBzKCkge1xuICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgIHRoaXMuZ3JpZFtpXVtqXS5zaGlwID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcmFuZG9taXplU2hpcHMoKSB7XG4gICAgICAvLyBHZW5lcmF0ZSByYW5kb20gY29vcmRpbmF0ZXMgZnJvbSAwLTksIGV4OiBbMH45LCAwfjldXG4gICAgICBmdW5jdGlvbiByYW5kb21Db29yZGluYXRlcygpIHtcbiAgICAgICAgcmV0dXJuIFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNoaXBzID0gWzEsIDEsIDEsIDIsIDIsIDIsIDMsIDMsIDQsIDVdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgW3JvdywgY29sdW1uXSA9IHJhbmRvbUNvb3JkaW5hdGVzKCk7XG4gICAgICAgIHdoaWxlICghdGhpcy5wbGFjZVNoaXAoW3JvdywgY29sdW1uXSwgc2hpcHNbaV0pKSB7XG4gICAgICAgICAgW3JvdywgY29sdW1uXSA9IHJhbmRvbUNvb3JkaW5hdGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYWNlU2hpcChjb29yZGluYXRlcywgc2hpcExlbmd0aCkge1xuICAgICAgY29uc3QgbWF4U2l6ZSA9IDk7XG4gICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZXM7XG5cbiAgICAgIC8vIENoZWNrIGlmIGNvb3JkaW5hdGVzIGFyZSB2YWxpZFxuICAgICAgaWYgKGNvbHVtbiArIHNoaXBMZW5ndGggLSAxID4gbWF4U2l6ZSB8fCByb3cgPiBtYXhTaXplIHx8IGNvbHVtbiA+IG1heFNpemUpIHJldHVybiBmYWxzZTtcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNoaXAgb24gdGhlc2UgY29vcmRpbmF0ZXMgKyBzaGlwTGVuZ3RoXG4gICAgICBpZiAoY2hlY2tTaGlwT25Db29yZGluYXRlcyh0aGlzLmdyaWQsIGNvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAvLyBDcmVhdGUgbmV3IFNoaXAgb2JqZWN0XG4gICAgICBjb25zdCBuZXdTaGlwID0gU2hpcChzaGlwTGVuZ3RoKTtcblxuICAgICAgLy8gUHVzaCBuZXdTaGlwIHRvIHNoaXBzIHByb3BlcnR5XG4gICAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XG5cbiAgICAgIC8vIFBsYWNlIHNoaXAgb24gY29vcmRpbmF0ZXNcbiAgICAgIGZvciAobGV0IGkgPSBjb2x1bW47IGkgPCBjb2x1bW4gKyBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5ncmlkW3Jvd11baV0uc2hpcCA9IG5ld1NoaXA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICAgIGNvbnN0IG15R3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlcztcblxuICAgICAgaWYgKCFjaGVja1NoaXBPbkNvb3JkaW5hdGVzKG15R3JpZCwgY29vcmRpbmF0ZXMpKSB7XG4gICAgICAgIC8vIEFkZCBjb29yZGluYXRlcyBvZiB0aGUgbWlzc2VkIGF0dGFjayB0byBtaXNzZWRBdHRhY2tzIHByb3BlcnR5XG4gICAgICAgIHRoaXMubWlzc2VkQXR0YWNrcy5wdXNoKGNvb3JkaW5hdGVzKTtcblxuICAgICAgICAvLyBDaGFuZ2UgbWlzc2VkQXR0YWNrIHByb3BlcnR5IHRvIHRydWVcbiAgICAgICAgbXlHcmlkW3Jvd11bY29sdW1uXS5taXNzZWRBdHRhY2sgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIENoYW5nZSBtaXNzZWRBdHRhY2sgcHJvcGVydHkgdG8gZmFsc2VcbiAgICAgIG15R3JpZFtyb3ddW2NvbHVtbl0ubWlzc2VkQXR0YWNrID0gZmFsc2U7XG5cbiAgICAgIC8vIEFkZCBjb29yZGludGF0ZXMgb2Ygc3VjY2Vzc2Z1bCBhdHRhY2sgdG8gc3VjY2Vzc2Z1bEF0dGFja3MgcHJvcGVydHlcbiAgICAgIHRoaXMuc3VjY2Vzc2Z1bEF0dGFja3MucHVzaChjb29yZGluYXRlcyk7XG5cbiAgICAgIG15R3JpZFtyb3ddW2NvbHVtbl0uc2hpcC5oaXQoKTtcbiAgICB9LFxuICAgIGFsbFNoaXBzU3VuaygpIHtcbiAgICAgIGNvbnN0IG15U2hpcHMgPSB0aGlzLnNoaXBzO1xuXG4gICAgICAvLyBJZiBhIHNoaXAgaXNudCBzdW5rIHRoZW4gcmV0dXJuIGZhbHNlXG4gICAgICBmb3IgKGNvbnN0IHNoaXAgb2YgbXlTaGlwcykge1xuICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gT3RoZXJ3aXNlIHJldHVybiB0cnVlXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICB9O1xufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuLi9HYW1lYm9hcmQvR2FtZWJvYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKCkge1xuICByZXR1cm4ge1xuICAgIGdhbWVib2FyZDogR2FtZWJvYXJkKCksXG4gICAgdHVybjogbnVsbCxcbiAgICAvLyBzZW5kQXR0YWNrIG1ldGhvZCB0aGF0IGFjY2VwdHMgYSBjb29yZGluYXRlIGFuZCB0aGUgZW5lbXkgZ2FtZWJvYXJkXG4gICAgLy8gU2VuZHMgYW4gYXR0YWNrIHRvIHRoYXQgZW5lbXkgZ2FtZWJvYXJkLCBhbmQgY2hhbmdlcyB0dXJuIHByb3BlcnR5IHRvIGZhbHNlXG4gICAgc2VuZEF0dGFjayhjb29yZGluYXRlcywgZW5lbXkpIHtcbiAgICAgIC8vIEF0dGFjayBlbmVteSBjb29yZGluYXRlc1xuICAgICAgY29uc3QgeyBnYW1lYm9hcmQgfSA9IGVuZW15O1xuICAgICAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuXG4gICAgICAvLyBDaGFuZ2UgdHVybnNcbiAgICAgIGVuZW15LnR1cm4gPSB0cnVlO1xuICAgICAgdGhpcy50dXJuID0gZmFsc2U7XG4gICAgfSxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAobGVuZ3RoKSB7XG4gIHJldHVybiB7XG4gICAgbGVuZ3RoLFxuICAgIGhpdHM6IDAsXG4gICAgaGl0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGl0cysrO1xuICAgIH0sXG4gICAgaXNTdW5rKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGg7XG4gICAgfSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IFVJIH0gZnJvbSAnLi91c2VySW50ZXJmYWNlJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIvUGxheWVyJztcbmltcG9ydCBDb21wdXRlciBmcm9tICcuL0NvbXB1dGVyL0NvbXB1dGVyJztcblxuLy8gTW9ja1xuY29uc3QgcGxheWVyID0gUGxheWVyKCk7XG5jb25zdCB7IGdhbWVib2FyZCB9ID0gcGxheWVyO1xuXG5jb25zdCBjb21wdXRlciA9IFBsYXllcigpO1xuY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBjb21wdXRlci5nYW1lYm9hcmQ7XG5cbmNvbnN0IEFJID0gQ29tcHV0ZXIoKTtcblxuZ2FtZWJvYXJkLnJhbmRvbWl6ZVNoaXBzKCk7XG5cbmNvbXB1dGVyR2FtZWJvYXJkLnJhbmRvbWl6ZVNoaXBzKCk7XG5cbi8vIE1vY2tcblxuY29uc3QgRXZlbnRIYW5kbGVycyA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGNlbGxBdHRhY2soZSkge1xuICAgIGNvbnN0IGNlbGwgPSBlLnRhcmdldDtcbiAgICAvLyBHZXQgYXR0YWNrIGNvb3JkaW5hdGVzXG4gICAgY29uc3Qgcm93ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpLCAxMCk7XG4gICAgY29uc3QgY29sdW1uID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLCAxMCk7XG5cbiAgICAvLyBTZW5kIGF0dGFjayB0byBjb21wdXRlclxuICAgIHBsYXllci5zZW5kQXR0YWNrKFtyb3csIGNvbHVtbl0sIGNvbXB1dGVyKTtcblxuICAgIC8vIExvYWQgbmV3IGNvbXB1dGVyIGJvYXJkXG4gICAgVUkubG9hZENvbXB1dGVyQm9hcmQoY29tcHV0ZXIpO1xuICAgIGlmIChjb21wdXRlci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHJldHVybiBVSS5lbmRHYW1lKCdwbGF5ZXInKTtcblxuICAgIC8vIE1ha2UgY29tcHV0ZXIgYXR0YWNrIHBsYXllclxuICAgIEFJLmF0dGFjayhwbGF5ZXIpO1xuXG4gICAgLy8gTG9hZCBuZXcgcGxheWVyIGJvYXJkXG4gICAgVUkubG9hZFBsYXllckJvYXJkKHBsYXllcik7XG4gICAgaWYgKHBsYXllci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHJldHVybiBVSS5lbmRHYW1lKCdjb21wdXRlcicpO1xuICAgIGNlbGxMaXN0ZW5lcigpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2VsbExpc3RlbmVyKCkge1xuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBuZXcgY29tcHV0ZXIgYm9hcmQgY2VsbHNcbiAgICBjb25zdCBjb21wdXRlckJvYXJkQ2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlciAuY2VsbCcpKTtcbiAgICBjb21wdXRlckJvYXJkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgaWYgKCEoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Y2Nlc3NmdWwtYXR0YWNrJykgfHwgY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3NlZC1hdHRhY2snKSkpIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjZWxsQXR0YWNrKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBpbml0KHBsYXllciwgY29tcHV0ZXIpIHtcbiAgICBVSS5sb2FkUGxheWVyQm9hcmQocGxheWVyKTtcbiAgICBVSS5sb2FkQ29tcHV0ZXJCb2FyZChjb21wdXRlcik7XG5cbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xuICAgIGNvbnN0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydCcpO1xuICAgIGNvbnN0IHJhbmRvbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5kb21pemUnKTtcblxuICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgVUkuc3RhcnRHYW1lKCk7XG4gICAgICBjZWxsTGlzdGVuZXIoKTtcbiAgICB9KTtcblxuICAgIHJlc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAvLyBUT0RPOiBjcmVhdGUgbmV3IG1vY2sgaW5zdGVhZCBvZiByZWxvYWRpbmdcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIHJhbmRvbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGdhbWVib2FyZC5yZW1vdmVTaGlwcygpO1xuICAgICAgY29tcHV0ZXJHYW1lYm9hcmQucmVtb3ZlU2hpcHMoKTtcbiAgICAgIGdhbWVib2FyZC5yYW5kb21pemVTaGlwcygpO1xuICAgICAgY29tcHV0ZXJHYW1lYm9hcmQucmFuZG9taXplU2hpcHMoKTtcblxuICAgICAgVUkubG9hZFBsYXllckJvYXJkKHBsYXllcik7XG4gICAgICBVSS5sb2FkQ29tcHV0ZXJCb2FyZChjb21wdXRlcik7XG4gICAgICBjZWxsTGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgfTtcbn0pKCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIEV2ZW50SGFuZGxlcnMuaW5pdChwbGF5ZXIsIGNvbXB1dGVyKTtcbn0pO1xuIiwiaW1wb3J0IHsgRXZlbnRIYW5kbGVycyB9IGZyb20gJy4vZXZlbnRIYW5kbGVyJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBjb25zdCBVSSA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGNoZWNrQXR0YWNrcyhtaXNzZWRBdHRhY2tzLCBzdWNjZXNzZnVsQXR0YWNrcywgY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZXM7XG4gICAgaWYgKG1pc3NlZEF0dGFja3MuZmluZCgoYXR0YWNrKSA9PiByb3cgPT09IGF0dGFja1swXSAmJiBjb2x1bW4gPT09IGF0dGFja1sxXSkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoXG4gICAgICBzdWNjZXNzZnVsQXR0YWNrcy5maW5kKChhdHRhY2spID0+IHJvdyA9PT0gYXR0YWNrWzBdICYmIGNvbHVtbiA9PT0gYXR0YWNrWzFdKSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBsb2FkUGxheWVyQm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgRE9NQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyJyk7XG4gICAgY29uc3QgYm9hcmRMZW5ndGggPSAxMDtcblxuICAgIC8vIFJlbW92ZSBwcmV2aW91cyBib2FyZFxuICAgIHdoaWxlIChET01Cb2FyZC5sYXN0Q2hpbGQpIHtcbiAgICAgIERPTUJvYXJkLnJlbW92ZUNoaWxkKERPTUJvYXJkLmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBtaXNzZWRBdHRhY2tzLCBzdWNjZXNzZnVsQXR0YWNrcyB9ID0gcGxheWVyLmdhbWVib2FyZDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRMZW5ndGg7IGkrKykge1xuICAgICAgLy8gQ3JlYXRlIHJvdyBlbGVtZW50IGFuZCBhZGQgaXQgdG8gYm9hcmRcbiAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgRE9NQm9hcmQuYXBwZW5kKHJvdyk7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRMZW5ndGg7IGorKykge1xuICAgICAgICAvLyBDcmVhdGUgY2VsbCBhbmQgYWRkIGl0IHRvIHJvd1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNlbGwuZGF0YXNldC54ID0gaTtcbiAgICAgICAgY2VsbC5kYXRhc2V0LnkgPSBqO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgcm93LmFwcGVuZChjZWxsKTtcblxuICAgICAgICAvLyBDaGVjayBpZiBhbiBhdHRhY2sgaGFzIG9jY3VyZWQgb24gdGhhdCBjZWxsXG4gICAgICAgIGlmIChjaGVja0F0dGFja3MobWlzc2VkQXR0YWNrcywgc3VjY2Vzc2Z1bEF0dGFja3MsIFtpLCBqXSkpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3N1Y2Nlc3NmdWwtYXR0YWNrJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hlY2tBdHRhY2tzKG1pc3NlZEF0dGFja3MsIHN1Y2Nlc3NmdWxBdHRhY2tzLCBbaSwgal0pID09PSBmYWxzZSkge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzc2VkLWF0dGFjaycpO1xuICAgICAgICB9IGVsc2UgaWYgKGNoZWNrQXR0YWNrcyhtaXNzZWRBdHRhY2tzLCBzdWNjZXNzZnVsQXR0YWNrcywgW2ksIGpdKSA9PT0gbnVsbCkge1xuICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgc2hpcCBvbiB0aGF0IGNlbGxcbiAgICAgICAgICBjb25zdCB7IGdyaWQgfSA9IHBsYXllci5nYW1lYm9hcmQ7XG5cbiAgICAgICAgICBpZiAoZ3JpZFtpXVtqXS5zaGlwICE9PSBudWxsKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBsb2FkQ29tcHV0ZXJCb2FyZChjb21wdXRlcikge1xuICAgIGNvbnN0IERPTUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyJyk7XG4gICAgY29uc3QgYm9hcmRMZW5ndGggPSAxMDtcblxuICAgIC8vIFJlbW92ZSBwcmV2aW91cyBib2FyZFxuICAgIHdoaWxlIChET01Cb2FyZC5sYXN0Q2hpbGQpIHtcbiAgICAgIERPTUJvYXJkLnJlbW92ZUNoaWxkKERPTUJvYXJkLmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBtaXNzZWRBdHRhY2tzLCBzdWNjZXNzZnVsQXR0YWNrcyB9ID0gY29tcHV0ZXIuZ2FtZWJvYXJkO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZExlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBDcmVhdGUgcm93IGVsZW1lbnQgYW5kIGFkZCBpdCB0byBib2FyZFxuICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICBET01Cb2FyZC5hcHBlbmQocm93KTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZExlbmd0aDsgaisrKSB7XG4gICAgICAgIC8vIENyZWF0ZSBjZWxsIGFuZCBhZGQgaXQgdG8gcm93XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2VsbC5kYXRhc2V0LnggPSBpO1xuICAgICAgICBjZWxsLmRhdGFzZXQueSA9IGo7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICByb3cuYXBwZW5kKGNlbGwpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGFuIGF0dGFjayBoYXMgb2NjdXJlZCBvbiB0aGF0IGNlbGxcbiAgICAgICAgaWYgKGNoZWNrQXR0YWNrcyhtaXNzZWRBdHRhY2tzLCBzdWNjZXNzZnVsQXR0YWNrcywgW2ksIGpdKSkge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc3VjY2Vzc2Z1bC1hdHRhY2snKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGVja0F0dGFja3MobWlzc2VkQXR0YWNrcywgc3VjY2Vzc2Z1bEF0dGFja3MsIFtpLCBqXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQtYXR0YWNrJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XG4gICAgY29uc3QgcmFuZG9taXplQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbWl6ZScpO1xuICAgIGNvbnN0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydCcpO1xuICAgIHN0YXJ0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcmFuZG9taXplQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcmVzdGFydEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgfVxuICBmdW5jdGlvbiBlbmRHYW1lKHdpbm5lcikge1xuICAgIGNvbnN0IHdpbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXItY29udGFpbmVyJyk7XG5cbiAgICAvLyBDcmVhdGUgRE9NIGVsZW1lbnRzXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3dpbm5lcicpO1xuXG4gICAgd2lubmVyQ29udGFpbmVyLmFwcGVuZCh0aXRsZSk7XG4gICAgd2lubmVyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuXG4gICAgaWYgKHdpbm5lciA9PT0gJ2NvbXB1dGVyJykgdGl0bGUudGV4dENvbnRlbnQgPSAnQ29tcHV0ZXIgV2lucyEnO1xuICAgIGVsc2UgdGl0bGUudGV4dENvbnRlbnQgPSAnUGxheWVyIFdpbnMhJztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbG9hZFBsYXllckJvYXJkLFxuICAgIGxvYWRDb21wdXRlckJvYXJkLFxuICAgIHN0YXJ0R2FtZSxcbiAgICBlbmRHYW1lLFxuICB9O1xufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi91c2VySW50ZXJmYWNlJztcbmltcG9ydCAnLi9ldmVudEhhbmRsZXInO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9