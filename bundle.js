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




document.addEventListener("DOMContentLoaded", () => startGame());

const startGame = () => {
    let player = new __WEBPACK_IMPORTED_MODULE_1__playerCharacter__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__information_playerTemplate__["a" /* baseChar */]);
    new __WEBPACK_IMPORTED_MODULE_0__battle__["a" /* default */](player);
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__information_enemies__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character__ = __webpack_require__(4);



class battle {
    constructor(character1, character2) {
        this.player = character1;
        this.enemy = character2 || new __WEBPACK_IMPORTED_MODULE_1__character__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__information_enemies__["a" /* skeleton */]);
        this.addButtons(this.player);
        this
            .player
            .renderChar("player");
        this
            .enemy
            .renderChar("enemy");
    }

    addButtons(player) {
        let moves = document.querySelector(".moves-list");
        player
            .moves
            .forEach(move => {
                let moveLi = document.createElement('IMG');
                moveLi.setAttribute('src', move.image);
                moveLi.setAttribute("class", "move");
                moveLi.addEventListener("click", () => {
                    console.log("calcMove", move);
                    this.handleMove(move);
                    this
                        .player
                        .renderMove(move.render.start, move);
                });
                moves.appendChild(moveLi);
            });
    }

    handleMove(move, attacker, defender) {
        console.log("move in handle", move);
        let enemyMove = this
            .enemy
            .getMove();
        this.handleHp();
        console.log("enemyMove", enemyMove);
        console.log(this.player.hitPoints, this.enemy.hitPoints);
    }

    handleHp() {
        console.log("HP");
        let pHealth = document.getElementsByClassName(this.player.identifier)[0];
        pHealth.style.width = `${ (this.player.hitPoints * 100) / 50}%`;
        let eHealth = document.getElementsByClassName(this.enemy.identifier)[0];
        eHealth.style.width = `${ (this.enemy.hitPoints * 100) / 50}%`;
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

    equipment: {},

    sprites: "./assets/sprites/goblin.png",

    render: {
        step: 64,
        start: -10,
        height: 850,
        max: 320
    },

    death: {
        step: 64,
        start: -10,
        height: 1298,
        max: 320
    }
};
/* unused harmony export goblin */


const darkElf = {
    moves: [__WEBPACK_IMPORTED_MODULE_0__moves__["a" /* basicAttack */]],

    attributes: {
        speed: 50,
        strength: 50,
        dexterity: 50,
        constitution: 50,
        intelligence: 50
    },

    equipment: {},

    sprites: "./assets/sprites/darkElf.png",

    render: {
        step: 64,
        start: -10,
        height: 1106,
        max: 800
    },

    death: {
        step: 64,
        start: -10,
        height: 1298,
        max: 320
    }
};
/* unused harmony export darkElf */


const evilWizard = {
    moves: [__WEBPACK_IMPORTED_MODULE_0__moves__["a" /* basicAttack */]],

    attributes: {
        speed: 50,
        strength: 50,
        dexterity: 50,
        constitution: 50,
        intelligence: 50
    },

    equipment: {},

    sprites: "./assets/sprites/evilWizard.png",

    render: {
        step: 64,
        start: -10,
        height: 850,
        max: 320
    },

    death: {
        step: 64,
        start: -10,
        height: 1298,
        max: 320
    }
};
/* unused harmony export evilWizard */


const skeleton = {
    moves: [__WEBPACK_IMPORTED_MODULE_0__moves__["a" /* basicAttack */]],

    attributes: {
        speed: 50,
        strength: 50,
        dexterity: 50,
        constitution: 50,
        intelligence: 50
    },

    equipment: {},

    sprites: "./assets/sprites/skeleton.png",

    render: {
        step: 64,
        start: 0,
        height: 333,
        max: 320
    },

    death: {
        step: 64,
        start: -10,
        height: 1298,
        max: 320
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = skeleton;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const BASIC_ATTACK = "BASIC_ATTACK";
/* unused harmony export BASIC_ATTACK */

const MEDITATE = "MEDITATE";
/* unused harmony export MEDITATE */

const DEFEND = "DEFEND";
/* unused harmony export DEFEND */

const SHIELD_ATTACK = "SHIELD_ATTACK";
/* unused harmony export SHIELD_ATTACK */

const PARRY = "PARRY";
/* unused harmony export PARRY */


const basicAttack = {
    move: BASIC_ATTACK,
    image: "./assets/moves/pointy-sword.svg",
    render: {
        step: 192,
        start: 70,
        height: 1998,
        max: 1100
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = basicAttack;


const meditate = {
    move: MEDITATE,
    image: "./assets/moves/meditation.svg",
    render: {
        step: 64,
        start: 6,
        height: 206,
        max: 400
    }
};
/* harmony export (immutable) */ __webpack_exports__["c"] = meditate;


const defend = {
    move: DEFEND,
    image: "./assets/moves/shield.svg",
    render: {
        step: 64,
        start: 6,
        height: 462,
        max: 400
    }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = defend;


const shieldAttack = {
    move: SHIELD_ATTACK,
    image: "./assets/moves/shield-bounces.svg",
    render: {
        step: -1,
        start: 326,
        height: 462,
        max: 316
    }
};
/* harmony export (immutable) */ __webpack_exports__["e"] = shieldAttack;


const parry = {
    move: PARRY,
    image: "./assets/moves/crossed-swords.svg",
    render: {
        step: 192,
        start: 70,
        height: 1998,
        max: 1100
    }
};
/* harmony export (immutable) */ __webpack_exports__["d"] = parry;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class character {
    constructor(initializaton) {
        this.moves = initializaton.moves;
        this.hitPoints = 50;
        this.sprites = initializaton.sprites;
        this.rendStart = initializaton.render.start;
        this.rendStep = initializaton.render.step;
        this.rendHeight = initializaton.render.height;
        this.rendMax = initializaton.render.max;
        this.death = initializaton.death;
        this.identifier = Math
            .random()
            .toString();
    }

    getMove() {
        let randomMove = this.moves[0];
        this.renderMove(randomMove.render.start, randomMove);
        return randomMove;
    }

    getTime() {
        return 1 / this.attributes.speed;
    }

    alive() {
        if (this.hitPoints > 0) {
            return true;
        } else {
            this.renderDeath(this.death.start, this.death.step);
            return false;
        }
    }

    renderChar(side) {
        let char = this;
        let field = document.querySelector(`.${side}-chars`);
        let charLi = document.createElement("LI");
        charLi.setAttribute("class", "char");
        field.appendChild(charLi);
        let charCanvas = document.createElement('CANVAS');
        charCanvas.setAttribute('id', char.identifier);
        charCanvas.style.width = "200px";
        charCanvas.style.height = "200px";
        charLi.appendChild(charCanvas);
        let progress = document.createElement("DIV");
        progress.setAttribute("class", "progress");
        charLi.appendChild(progress);
        let health = document.createElement("DIV");
        health.setAttribute("class", `health ${char.identifier}`);
        progress.appendChild(health);
        let charImg = new Image();
        let canvas = document.getElementById(char.identifier);
        charImg.src = char.sprites;
        console.log(canvas);
        console.log(charImg);
        let context = canvas.getContext("2d");

        charImg.onload = function () {
            context.drawImage(charImg, char.rendStart, char.rendHeight, 64, 64, 0, 0, 200, 200);
        };
    }

    renderMove(start, move) {
        console.log("start", start);
        // console.log('render action', this, start);
        let canvas = document.getElementById(this.identifier);
        let context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        let image = new Image();
        image.src = this.sprites;
        if (start != move.render.max) {
            context.drawImage(image, start, move.render.height, 64, 64, -0, 0, 200, 200);
            setTimeout(() => this.renderMove((start + move.render.step), move), 100);
        } else {
            context.drawImage(image, this.rendStart, this.rendHeight, 64, 64, 0, 0, 200, 200);
        }
    }

    renderDeath(start, step) {
        console.log(this.death);
        console.log('render death', this, start);
        let canvas = document.getElementById(this.identifier);
        let context = canvas.getContext("2d");
        // context.clearRect(0, 0, canvas.width, canvas.height);
        let image = new Image();
        image.src = this.sprites;
        if (start < this.death.max) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(image, start, this.death.height, 64, 64, -0, 0, 200, 200);
            setTimeout(() => this.renderDeath((start + step), step), 100);
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (character);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moves__ = __webpack_require__(3);


const baseChar = {
    moves: [
        __WEBPACK_IMPORTED_MODULE_0__moves__["a" /* basicAttack */], __WEBPACK_IMPORTED_MODULE_0__moves__["c" /* meditate */], __WEBPACK_IMPORTED_MODULE_0__moves__["b" /* defend */], __WEBPACK_IMPORTED_MODULE_0__moves__["e" /* shieldAttack */], __WEBPACK_IMPORTED_MODULE_0__moves__["d" /* parry */]
    ],

    sprites: "./assets/sprites/male.png",

    render: {
        step: 192,
        start: 70,
        height: 1998,
        max: 1100
    }
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
}

/* harmony default export */ __webpack_exports__["a"] = (playerCharacter);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map