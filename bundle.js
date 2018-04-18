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
        this.timeP1 = 0;
        this.timeP2 = 0;
        this.fight(this.player, this.enemy);
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
                moveLi.setAttribute('src', "./assets/actions/pointy-sword.svg");
                moveLi.setAttribute("class", "move");
                moveLi.addEventListener("click", () => {
                    this.handleMove(move(this.player)(this.enemy), this.player, this.enemy);
                    this.timeP1 -= 1;
                    this.fight();
                    this
                        .player
                        .getMove();
                });
                moves.appendChild(moveLi);
            });
    }

    fight() {
        while ((this.player.alive() && this.enemy.alive() && this.timeP1 < 1)) {
            this.playNextTurn();
        }
    }

    playNextTurn() {
        console.log("pnt");
        while (this.timeP1 < 1) {
            if (this.timeP2 > 1) {
                let moveEn = this
                    .enemy
                    .getMove(this.player);
                this.handleMove(this.enemy, this.player);
                console.log(moveEn);
                this.handleMove(moveEn, this.enemy, this.player);
                this.timeP2 -= 1;
            } else {
                this.timeP1 += this
                    .player
                    .getTime();
                this.timeP2 += this
                    .enemy
                    .getTime();
            }
        }
    }

    handleMove(move, attacker, defender) {
        console.log("move in handle", move);
        if (move.damage) {
            defender.hitPoints -= move.damage;
        }
        this.handleHp();
        console.log(this.player.hitPoints, this.enemy.hitPoints);
    }

    handleHp() {
        console.log("HP");
        let pHealth = document.getElementsByClassName(this.player.identifier)[0];
        pHealth.style.width = `${ (this.player.hitPoints * 100) / this.player.attributes.constitution}%`;
        let eHealth = document.getElementsByClassName(this.enemy.identifier)[0];
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
        this.attributes = initializaton.attributes;
        this.moves = initializaton.moves;
        this.hitPoints = this.attributes.constitution;
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

    getMove(defender) {
        if (this.health <= 0) {
            console.log("this death", this.death);
            console.log("TESSSSSTTTTTTT");
            this.renderDeath(this.death.start, this.death.step);
        }
        // let randomMove = this.moves[Math.floor(Math.random() * this.moves.length)];
        let randomMove = this.moves[0];
        console.log("randomMove", randomMove);
        this.renderAction(this.rendStart, this.rendStep);
        return randomMove(this)(defender);
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

    renderAction(start, step) {
        // console.log('render action', this, start);
        let canvas = document.getElementById(this.identifier);
        let context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        let image = new Image();
        image.src = this.sprites;

        if (start < this.rendMax) {
            context.drawImage(image, start, this.rendHeight, 64, 64, -0, 0, 200, 200);
            setTimeout(() => this.renderAction((start + step), step), 100);
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
        __WEBPACK_IMPORTED_MODULE_0__moves__["a" /* basicAttack */], __WEBPACK_IMPORTED_MODULE_0__moves__["a" /* basicAttack */], __WEBPACK_IMPORTED_MODULE_0__moves__["a" /* basicAttack */], __WEBPACK_IMPORTED_MODULE_0__moves__["a" /* basicAttack */]
    ],

    attributes: {
        speed: 50,
        strength: 50,
        dexterity: 50,
        constitution: 50,
        intelligence: 50
    },

    equipment: {},

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

    getMove() {
        this.renderAction(this.rendStart, this.rendStep);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (playerCharacter);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map