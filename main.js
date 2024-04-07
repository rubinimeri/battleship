/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    placeShip(coordinates, shipLength) {
      const maxSize = 9;
      const [row, column] = coordinates;

      // Check if coordinates are valid
      if (column + shipLength - 1 > maxSize || row > maxSize || column > maxSize) return 'Ship is too long';

      // Check if there is already a ship on these coordinates + shipLength
      if (checkShipOnCoordinates(this.grid, coordinates, shipLength)) return 'Ship already exists on those coordinates';

      // Create new Ship object
      const newShip = (0,_Ship_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(shipLength);

      // Push newShip to ships property
      this.ships.push(newShip);

      // Place ship on coordinates
      for (let i = column; i < column + shipLength; i++) {
        this.grid[row][i].ship = newShip;
      }
      return this.grid;
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
function Player(gameboard) {
  return {
    gameboard,
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

/***/ "./src/game-loop.js":
/*!**************************!*\
  !*** ./src/game-loop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gameboard_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard/Gameboard */ "./src/Gameboard/Gameboard.js");
/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player/Player */ "./src/Player/Player.js");
/* harmony import */ var _Computer_Computer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Computer/Computer */ "./src/Computer/Computer.js");
// What will the features of the game loop be?
// Step 1: create Players and Gameboards.
// Step 2: populate each Gameboard with 5 ships with predetermined coordinates




function gameLoop() {
  // Create gameboards
  const gameboardOne = (0,_Gameboard_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const gameboardTwo = (0,_Gameboard_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

  // Create players
  const playerOne = (0,_Player_Player__WEBPACK_IMPORTED_MODULE_1__["default"])(gameboardOne);
  const playerTwo = (0,_Player_Player__WEBPACK_IMPORTED_MODULE_1__["default"])(gameboardTwo);

  // Create Computer
  const computer = (0,_Computer_Computer__WEBPACK_IMPORTED_MODULE_2__["default"])();

  // Populate gameboardOne with 5 ships
  gameboardOne.placeShip([0, 0], 5);
  gameboardOne.placeShip([2, 0], 4);
  gameboardOne.placeShip([5, 5], 3);
  gameboardOne.placeShip([3, 1], 2);
  gameboardOne.placeShip([9, 7], 1);

  // Populate gameboardTwo with 5 ships
  gameboardTwo.placeShip([4, 0], 5);
  gameboardTwo.placeShip([7, 0], 4);
  gameboardTwo.placeShip([2, 5], 3);
  gameboardTwo.placeShip([0, 1], 2);
  gameboardTwo.placeShip([1, 7], 1);
}


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_loop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-loop */ "./src/game-loop.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxZQUFZO0FBQzFCLGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDZ0M7O0FBRWpCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGNBQWM7QUFDbEM7QUFDQSxzQkFBc0IsY0FBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEseUJBQXlCLFlBQVk7QUFDckM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHNEQUFJOztBQUUxQjtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLHlCQUF5QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BHZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxZQUFZO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQzhDO0FBQ1Q7QUFDTTs7QUFFM0M7QUFDQTtBQUNBLHVCQUF1QixnRUFBUztBQUNoQyx1QkFBdUIsZ0VBQVM7O0FBRWhDO0FBQ0Esb0JBQW9CLDBEQUFNO0FBQzFCLG9CQUFvQiwwREFBTTs7QUFFMUI7QUFDQSxtQkFBbUIsOERBQVE7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Db21wdXRlci9Db21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvU2hpcC9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS1sb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXB1dGVyKCkge1xuICByZXR1cm4ge1xuICAgIGF0dGFjayhlbmVteSkge1xuICAgICAgZnVuY3Rpb24gcmFuZG9tQ29vcmRpbmF0ZXMoKSB7XG4gICAgICAgIHJldHVybiBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm4gZmFsc2UgaWYgYXR0YWNrIGhhc250IGJlZW4gbWFkZVxuICAgICAgZnVuY3Rpb24gY2hlY2tBdHRhY2tzKGF0dGFja3MsIG15Q29vcmRpbmF0ZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IG15Q29vcmRpbmF0ZXM7XG4gICAgICAgICAgY29uc3QgbWlzc2VkQXR0YWNrQ29vcmRpbmF0ZXMgPSBhdHRhY2tzW2ldO1xuXG4gICAgICAgICAgLy8gQ2hlY2sgdmFsdWVzXG4gICAgICAgICAgaWYgKHJvdyA9PT0gbWlzc2VkQXR0YWNrQ29vcmRpbmF0ZXNbMF0gJiYgY29sdW1uID09PSBtaXNzZWRBdHRhY2tDb29yZGluYXRlc1sxXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgZ2FtZWJvYXJkIH0gPSBlbmVteTtcbiAgICAgIGNvbnN0IHsgbWlzc2VkQXR0YWNrcywgc3VjY2Vzc2Z1bEF0dGFja3MgfSA9IGdhbWVib2FyZDtcbiAgICAgIGNvbnN0IGNvbWJpbmVkQXR0YWNrcyA9IFsuLi5taXNzZWRBdHRhY2tzLCAuLi5zdWNjZXNzZnVsQXR0YWNrc107XG4gICAgICBsZXQgbXlDb29yZGluYXRlcyA9IHJhbmRvbUNvb3JkaW5hdGVzKCk7XG5cbiAgICAgIC8vIGlmIGNvbWJpbmVkQXR0YWNrcyBpc250IGVtcHR5IHRoZW4gY2hlY2sgaWYgbXlDb29yZGluYXRlcyBoYXZlIGFscmVhZHkgYmVlbiBhdHRhY2tlZFxuICAgICAgLy8gaWYgc28gdGhlbiBnZXQgbmV3IGNvb3JkaW5hdGVzLCBlbHNlIGF0dGFjayB1c2luZyB0aG9zZSBjb29yZGluYXRlc1xuICAgICAgaWYgKGNvbWJpbmVkQXR0YWNrcy5sZW5ndGgpIHtcbiAgICAgICAgd2hpbGUgKGNoZWNrQXR0YWNrcyhjb21iaW5lZEF0dGFja3MsIG15Q29vcmRpbmF0ZXMpKSB7XG4gICAgICAgICAgbXlDb29yZGluYXRlcyA9IHJhbmRvbUNvb3JkaW5hdGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sobXlDb29yZGluYXRlcyk7XG4gICAgfSxcbiAgfTtcbn1cbiIsImltcG9ydCBTaGlwIGZyb20gJy4uL1NoaXAvU2hpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgLy8gQ3JlYXRlIEdyaWRcbiAgZnVuY3Rpb24gY3JlYXRlR3JpZCgpIHtcbiAgICBjb25zdCBncmlkID0gW107XG4gICAgY29uc3QgZ3JpZFNpemUgPSAxMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZFNpemU7IGkrKykge1xuICAgICAgZ3JpZFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkU2l6ZTsgaisrKSB7XG4gICAgICAgIGdyaWRbaV1bal0gPSB7XG4gICAgICAgICAgc2hpcDogbnVsbCxcbiAgICAgICAgICBtaXNzZWRBdHRhY2s6IG51bGwsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBncmlkO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNoaXAgb24gc29tZSBjb29yZGluYXRlc1xuICBmdW5jdGlvbiBjaGVja1NoaXBPbkNvb3JkaW5hdGVzKGdyaWQsIGNvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoKSB7XG4gICAgY29uc3QgbXlHcmlkID0gZ3JpZDtcbiAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZXM7XG4gICAgY29uc3QgbXlTaGlwTGVuZ3RoID0gc2hpcExlbmd0aDtcbiAgICBjb25zdCBsZW5ndGggPSBjb2x1bW4gKyBteVNoaXBMZW5ndGg7XG5cbiAgICAvLyBJZiBzaGlwTGVuZ3RoIGlzIG5vdCBnaXZlbiwgY2hlY2sgc2hpcCBvbmx5IG9uIHRoZSBnaXZlbiBjb29yZGluYXRlc1xuICAgIC8vIGlmIHNoaXAgZXhpc3RzIHRoZW4gcmV0dXJuIHRydWUsIGVsc2UgcmV0dXJuIGZhbHNlXG4gICAgaWYgKHNoaXBMZW5ndGggPT09IHVuZGVmaW5lZCAmJiBteUdyaWRbcm93XVtjb2x1bW5dLnNoaXApIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKHNoaXBMZW5ndGggPT09IHVuZGVmaW5lZCAmJiAhbXlHcmlkW3Jvd11bY29sdW1uXS5zaGlwKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gY29sdW1uOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChteUdyaWRbcm93XVtpXS5zaGlwKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdyaWQ6IGNyZWF0ZUdyaWQoKSxcbiAgICBzaGlwczogW10sXG4gICAgbWlzc2VkQXR0YWNrczogW10sXG4gICAgc3VjY2Vzc2Z1bEF0dGFja3M6IFtdLFxuICAgIHBsYWNlU2hpcChjb29yZGluYXRlcywgc2hpcExlbmd0aCkge1xuICAgICAgY29uc3QgbWF4U2l6ZSA9IDk7XG4gICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZXM7XG5cbiAgICAgIC8vIENoZWNrIGlmIGNvb3JkaW5hdGVzIGFyZSB2YWxpZFxuICAgICAgaWYgKGNvbHVtbiArIHNoaXBMZW5ndGggLSAxID4gbWF4U2l6ZSB8fCByb3cgPiBtYXhTaXplIHx8IGNvbHVtbiA+IG1heFNpemUpIHJldHVybiAnU2hpcCBpcyB0b28gbG9uZyc7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGFscmVhZHkgYSBzaGlwIG9uIHRoZXNlIGNvb3JkaW5hdGVzICsgc2hpcExlbmd0aFxuICAgICAgaWYgKGNoZWNrU2hpcE9uQ29vcmRpbmF0ZXModGhpcy5ncmlkLCBjb29yZGluYXRlcywgc2hpcExlbmd0aCkpIHJldHVybiAnU2hpcCBhbHJlYWR5IGV4aXN0cyBvbiB0aG9zZSBjb29yZGluYXRlcyc7XG5cbiAgICAgIC8vIENyZWF0ZSBuZXcgU2hpcCBvYmplY3RcbiAgICAgIGNvbnN0IG5ld1NoaXAgPSBTaGlwKHNoaXBMZW5ndGgpO1xuXG4gICAgICAvLyBQdXNoIG5ld1NoaXAgdG8gc2hpcHMgcHJvcGVydHlcbiAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcblxuICAgICAgLy8gUGxhY2Ugc2hpcCBvbiBjb29yZGluYXRlc1xuICAgICAgZm9yIChsZXQgaSA9IGNvbHVtbjsgaSA8IGNvbHVtbiArIHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmdyaWRbcm93XVtpXS5zaGlwID0gbmV3U2hpcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmdyaWQ7XG4gICAgfSxcbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgICBjb25zdCBteUdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZXM7XG5cbiAgICAgIGlmICghY2hlY2tTaGlwT25Db29yZGluYXRlcyhteUdyaWQsIGNvb3JkaW5hdGVzKSkge1xuICAgICAgICAvLyBBZGQgY29vcmRpbmF0ZXMgb2YgdGhlIG1pc3NlZCBhdHRhY2sgdG8gbWlzc2VkQXR0YWNrcyBwcm9wZXJ0eVxuICAgICAgICB0aGlzLm1pc3NlZEF0dGFja3MucHVzaChjb29yZGluYXRlcyk7XG5cbiAgICAgICAgLy8gQ2hhbmdlIG1pc3NlZEF0dGFjayBwcm9wZXJ0eSB0byB0cnVlXG4gICAgICAgIG15R3JpZFtyb3ddW2NvbHVtbl0ubWlzc2VkQXR0YWNrID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGFuZ2UgbWlzc2VkQXR0YWNrIHByb3BlcnR5IHRvIGZhbHNlXG4gICAgICBteUdyaWRbcm93XVtjb2x1bW5dLm1pc3NlZEF0dGFjayA9IGZhbHNlO1xuXG4gICAgICAvLyBBZGQgY29vcmRpbnRhdGVzIG9mIHN1Y2Nlc3NmdWwgYXR0YWNrIHRvIHN1Y2Nlc3NmdWxBdHRhY2tzIHByb3BlcnR5XG4gICAgICB0aGlzLnN1Y2Nlc3NmdWxBdHRhY2tzLnB1c2goY29vcmRpbmF0ZXMpO1xuXG4gICAgICBteUdyaWRbcm93XVtjb2x1bW5dLnNoaXAuaGl0KCk7XG4gICAgfSxcbiAgICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICBjb25zdCBteVNoaXBzID0gdGhpcy5zaGlwcztcblxuICAgICAgLy8gSWYgYSBzaGlwIGlzbnQgc3VuayB0aGVuIHJldHVybiBmYWxzZVxuICAgICAgZm9yIChjb25zdCBzaGlwIG9mIG15U2hpcHMpIHtcbiAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIE90aGVyd2lzZSByZXR1cm4gdHJ1ZVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcihnYW1lYm9hcmQpIHtcbiAgcmV0dXJuIHtcbiAgICBnYW1lYm9hcmQsXG4gICAgdHVybjogbnVsbCxcbiAgICAvLyBzZW5kQXR0YWNrIG1ldGhvZCB0aGF0IGFjY2VwdHMgYSBjb29yZGluYXRlIGFuZCB0aGUgZW5lbXkgZ2FtZWJvYXJkXG4gICAgLy8gU2VuZHMgYW4gYXR0YWNrIHRvIHRoYXQgZW5lbXkgZ2FtZWJvYXJkLCBhbmQgY2hhbmdlcyB0dXJuIHByb3BlcnR5IHRvIGZhbHNlXG4gICAgc2VuZEF0dGFjayhjb29yZGluYXRlcywgZW5lbXkpIHtcbiAgICAgIC8vIEF0dGFjayBlbmVteSBjb29yZGluYXRlc1xuICAgICAgY29uc3QgeyBnYW1lYm9hcmQgfSA9IGVuZW15O1xuICAgICAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuXG4gICAgICAvLyBDaGFuZ2UgdHVybnNcbiAgICAgIGVuZW15LnR1cm4gPSB0cnVlO1xuICAgICAgdGhpcy50dXJuID0gZmFsc2U7XG4gICAgfSxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAobGVuZ3RoKSB7XG4gIHJldHVybiB7XG4gICAgbGVuZ3RoLFxuICAgIGhpdHM6IDAsXG4gICAgaGl0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGl0cysrO1xuICAgIH0sXG4gICAgaXNTdW5rKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGg7XG4gICAgfSxcbiAgfTtcbn1cbiIsIi8vIFdoYXQgd2lsbCB0aGUgZmVhdHVyZXMgb2YgdGhlIGdhbWUgbG9vcCBiZT9cbi8vIFN0ZXAgMTogY3JlYXRlIFBsYXllcnMgYW5kIEdhbWVib2FyZHMuXG4vLyBTdGVwIDI6IHBvcHVsYXRlIGVhY2ggR2FtZWJvYXJkIHdpdGggNSBzaGlwcyB3aXRoIHByZWRldGVybWluZWQgY29vcmRpbmF0ZXNcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9HYW1lYm9hcmQvR2FtZWJvYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIvUGxheWVyJztcbmltcG9ydCBDb21wdXRlciBmcm9tICcuL0NvbXB1dGVyL0NvbXB1dGVyJztcblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gIC8vIENyZWF0ZSBnYW1lYm9hcmRzXG4gIGNvbnN0IGdhbWVib2FyZE9uZSA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBnYW1lYm9hcmRUd28gPSBHYW1lYm9hcmQoKTtcblxuICAvLyBDcmVhdGUgcGxheWVyc1xuICBjb25zdCBwbGF5ZXJPbmUgPSBQbGF5ZXIoZ2FtZWJvYXJkT25lKTtcbiAgY29uc3QgcGxheWVyVHdvID0gUGxheWVyKGdhbWVib2FyZFR3byk7XG5cbiAgLy8gQ3JlYXRlIENvbXB1dGVyXG4gIGNvbnN0IGNvbXB1dGVyID0gQ29tcHV0ZXIoKTtcblxuICAvLyBQb3B1bGF0ZSBnYW1lYm9hcmRPbmUgd2l0aCA1IHNoaXBzXG4gIGdhbWVib2FyZE9uZS5wbGFjZVNoaXAoWzAsIDBdLCA1KTtcbiAgZ2FtZWJvYXJkT25lLnBsYWNlU2hpcChbMiwgMF0sIDQpO1xuICBnYW1lYm9hcmRPbmUucGxhY2VTaGlwKFs1LCA1XSwgMyk7XG4gIGdhbWVib2FyZE9uZS5wbGFjZVNoaXAoWzMsIDFdLCAyKTtcbiAgZ2FtZWJvYXJkT25lLnBsYWNlU2hpcChbOSwgN10sIDEpO1xuXG4gIC8vIFBvcHVsYXRlIGdhbWVib2FyZFR3byB3aXRoIDUgc2hpcHNcbiAgZ2FtZWJvYXJkVHdvLnBsYWNlU2hpcChbNCwgMF0sIDUpO1xuICBnYW1lYm9hcmRUd28ucGxhY2VTaGlwKFs3LCAwXSwgNCk7XG4gIGdhbWVib2FyZFR3by5wbGFjZVNoaXAoWzIsIDVdLCAzKTtcbiAgZ2FtZWJvYXJkVHdvLnBsYWNlU2hpcChbMCwgMV0sIDIpO1xuICBnYW1lYm9hcmRUd28ucGxhY2VTaGlwKFsxLCA3XSwgMSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9nYW1lLWxvb3AnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9