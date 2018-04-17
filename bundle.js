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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__playerCharacter__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__information_playerTemplate__ = __webpack_require__(5);




document.addEventListener("DOMContentLoaded", () => new __WEBPACK_IMPORTED_MODULE_0__battle__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_1__playerCharacter__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__information_playerTemplate__["a" /* baseChar */])));

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__information_enemies__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character__ = __webpack_require__(4);



class battle {
    constructor(character1, character2) {
        this.player = character1;
        this.enemy = character2 || new __WEBPACK_IMPORTED_MODULE_1__character__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__information_enemies__["a" /* goblin */]);
        this.timeP1 = 0;
        this.timeP2 = 0;
        this.fight(this.player, this.enemy);
    }

    fight() {
        while (this.player.alive() && this.enemy.alive()) {
            this.playNextTurn();
        }
    }

    playNextTurn() {
        if (this.timeP2 > -1) {
            let moveEn = this
                .enemy
                .getMove(this.player);
            this.handleMove(this.enemy, this.player);
            console.log(moveEn);
            this.handleMove(moveEn, this.enemy, this.player);
            this.timeP2 -= 1;
        } else if (this.timeP1 > -1) {
            let movePl = this
                .player
                .getMove(this.enemy);
            this.handleMove(movePl, this.player, this.enemy);
            this.timeP1 -= 1;
        } else {
            this.timeP1 += this
                .player
                .getTime();
            this.timeP2 += this
                .enemy
                .getTime();

            console.log(this.timeP1, this.timeP2);
        }

        this.handleHp();
        console.log(this.player.hitPoints, this.enemy.hitPoints);
    }

    handleMove(move, attacker, defender) {
        console.log("move in handle", move);
        if (move.damage) {
            defender.hitPoints -= move.damage;
        }
    }

    handleHp() {
        let pHealth = document.querySelector('.player-health');
        pHealth.style.width = `${ (this.player.hitPoints * 100) / this.player.attributes.constitution}%`;
        let eHealth = document.querySelector('.enemy-health');
        eHealth.style.width = `${ (this.enemy.hitPoints * 100) / this.enemy.attributes.constitution}%`;

    }

}
/* harmony default export */ __webpack_exports__["a"] = (battle);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moves__ = __webpack_require__(3);


const goblin = {
    moves: [__WEBPACK_IMPORTED_MODULE_0__moves__["a" /* basicAttack */]],

    attributes: {
        speed: 50,
        strength: 50,
        dexterity: 50,
        constitution: 50,
        intelligence: 50
    },

    equipment: {}
};
/* harmony export (immutable) */ __webpack_exports__["a"] = goblin;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const basicAttack = (attacker) => (defender) => {
    if (Math.random() < (attacker.attributes.dexterity / defender.attributes.dexterity)) {
        console.log("basic");
        return {
            damage: (attacker.attributes.strength / 10),
            damageType: "physical"
        };
    }
    console.log("basic");
};
/* harmony export (immutable) */ __webpack_exports__["a"] = basicAttack;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class character {
    constructor(initializaton) {
        console.log(initializaton);
        this.attributes = initializaton.attributes;
        this.moves = initializaton.moves;
        console.log(initializaton);
        this.hitPoints = this.attributes.constitution;
    }

    getMove(defender) {
        console.log("moves", this.moves);
        // let randomMove = this.moves[Math.floor(Math.random() * this.moves.length)];
        let randomMove = this.moves[0];
        console.log("randomMove", randomMove);
        return randomMove(this)(defender);
    }

    getTime() {
        return 1 / this.attributes.speed;
    }

    alive() {
        return (this.hitPoints > 0);
    }

    placeCharacter() {
        // document.getElementsByClassName;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (character);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moves__ = __webpack_require__(3);


const baseChar = {
    moves: [__WEBPACK_IMPORTED_MODULE_0__moves__["a" /* basicAttack */]],

    attributes: {
        speed: 50,
        strength: 50,
        dexterity: 50,
        constitution: 50,
        intelligence: 50
    },

    equipment: {}
};
/* harmony export (immutable) */ __webpack_exports__["a"] = baseChar;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__character__ = __webpack_require__(4);


class playerCharacter extends __WEBPACK_IMPORTED_MODULE_0__character__["a" /* default */] {
    constructor(initialization) {
        super(initialization);
        this.equipement = initialization.equipment;
    }

    // getMove() {}
}

/* harmony default export */ __webpack_exports__["a"] = (playerCharacter);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map