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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__battle__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__information_playerTemplate__ = __webpack_require__(5);




document.addEventListener("DOMContentLoaded", new __WEBPACK_IMPORTED_MODULE_0__battle__["a" /* default */](Object(__WEBPACK_IMPORTED_MODULE_1__character__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__information_playerTemplate__["default"])));

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__information_enemies__ = __webpack_require__(2);


class battle {
    constructor(character1, character2) {
        this.player = character1;
        this.enemy = character2 || __WEBPACK_IMPORTED_MODULE_0__information_enemies__["goblin"];
        let timeP1 = 0;
        let timeP2 = 0;
        this.fight(this.player, this.enemy);
    }

    fight() {
        while (this.player.alive && this.enemy.alive) {
            this.playNextTurn();
        }
    }

    playNextTurn() {
        if (this.timeP2 > 1) {
            this
                .enemy
                .getMove();
            this.timeP2 -= 1;
        } else if (this.timeP1 > 1) {
            this
                .player
                .getMove();
            this.timeP1 -= 1;
        } else {
            this.timeP1 += this
                .player
                .getTime();
            this.timeP2 += this
                .enemy
                .getTime();
            this.playNextTurn();
        }
    }

}

/* harmony default export */ __webpack_exports__["a"] = (battle);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moves__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moves___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__moves__);


const goblin = {
    moves: {
        basicAttack: __WEBPACK_IMPORTED_MODULE_0__moves__["basicAttack"]
    },

    attributes: {
        speed: 50,
        strength: 50,
        dexterity: 50,
        constitution: 50,
        intelligence: 50
    },

    equipment: {}
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

const basicAttack = (strength, attDex) => (defDex) => {
    if (Math.random() < (attDex / defDex)) {
        return {
            damage: (strength * 10),
            damageType: "physical"
        };
    }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class character {
    constructor(initializaton) {
        this.attributes = initializaton.attributes;
        this.moves = initializaton.moves;
    }

    getMove() {
        let randomMove = this.moves[Math.floor(Math.random() * this.moves.length)];
        return randomMove;
    }

    getTime() {
        return 1 / this.attributes.speed;
    }

    alive() {
        return this.attributes.hitPoints > 0;
    }

    placeCharacter() {
        document.getElementsByClassName;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (character);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moves__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moves___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__moves__);


const baseChar = {
    moves: {
        basicAttack: __WEBPACK_IMPORTED_MODULE_0__moves__["basicAttack"]
    },

    attributes: {
        speed: 50,
        strength: 50,
        dexterity: 50,
        constitution: 50,
        intelligence: 50
    },

    equipment: {}
};
/* unused harmony export baseChar */


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map