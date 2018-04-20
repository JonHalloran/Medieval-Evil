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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class character {
    constructor(initializaton, enemyIncrement) {
        this.moves = initializaton.moves;
        this.hitPoints = 50;
        this.sprites = initializaton.sprites;
        this.rendStart = initializaton.render.start;
        this.rendStep = initializaton.render.step;
        this.rendHeight = initializaton.render.height;
        this.rendMax = initializaton.render.max;
        this.death = initializaton.death;
        this.enemyIncrement = enemyIncrement;
        this.identifier = Math
            .random()
            .toString();
    }

    getMove() {
        let randomMove = this.moves[Math.floor(Math.random() * this.moves.length)];
        this.renderMove(randomMove.render.start - 11, randomMove);
        return randomMove;
    }

    getTime() {
        return 1 / this.attributes.speed;
    }

    alive() {
        return this.hitPoints > 0;
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
        let context = canvas.getContext("2d");

        charImg.onload = function () {
            context.drawImage(charImg, char.rendStart, char.rendHeight + char.enemyIncrement, 64, 64, 50, 0, 200, 200);
        };
    }

    renderMove(start, move) {
        let canvas = document.getElementById(this.identifier);
        let context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        let image = new Image();
        image.src = this.sprites;
        let end = move.render.max;
        if (this.enemyIncrement) {
            end -= 11;
        }
        if (start !== end) {
            context.drawImage(image, start, move.render.height + this.enemyIncrement, 64, 64, 50, 0, 200, 200);
            setTimeout(() => this.renderMove((start + move.render.step), move), 100);
        } else {
            context.drawImage(image, this.rendStart, this.rendHeight + this.enemyIncrement, 64, 64, 50, 0, 200, 200);
        }
    }

    renderDeath(start) {
        console.log("death", start);
        let canvas = document.getElementById(this.identifier);
        let context = canvas.getContext("2d");
        let image = new Image();
        console.log(canvas, context, image);
        image.src = this.sprites;

        if (start <= 390) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(image, start, 1294, 64, 64, 0, 0, 200, 200);
            setTimeout(() => this.renderDeath(start + 64), 100);
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (character);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moves__ = __webpack_require__(3);


const golden = {
    moves: [
        __WEBPACK_IMPORTED_MODULE_0__moves__["f" /* basicAttack */], __WEBPACK_IMPORTED_MODULE_0__moves__["h" /* meditate */], __WEBPACK_IMPORTED_MODULE_0__moves__["g" /* defend */], __WEBPACK_IMPORTED_MODULE_0__moves__["j" /* shieldAttack */], __WEBPACK_IMPORTED_MODULE_0__moves__["i" /* parry */]
    ],

    sprites: "./assets/sprites/golden.png",

    render: {
        step: 64,
        start: 6,
        height: 718,
        max: 1100
    }
};
/* harmony export (immutable) */ __webpack_exports__["golden"] = golden;


const male = {
    moves: [
        __WEBPACK_IMPORTED_MODULE_0__moves__["f" /* basicAttack */], __WEBPACK_IMPORTED_MODULE_0__moves__["h" /* meditate */], __WEBPACK_IMPORTED_MODULE_0__moves__["g" /* defend */], __WEBPACK_IMPORTED_MODULE_0__moves__["j" /* shieldAttack */], __WEBPACK_IMPORTED_MODULE_0__moves__["i" /* parry */]
    ],

    sprites: "./assets/sprites/male.png",

    render: {
        step: 64,
        start: 6,
        height: 718,
        max: 1100
    }
};
/* harmony export (immutable) */ __webpack_exports__["male"] = male;


const orc = {
    moves: [
        __WEBPACK_IMPORTED_MODULE_0__moves__["f" /* basicAttack */], __WEBPACK_IMPORTED_MODULE_0__moves__["h" /* meditate */], __WEBPACK_IMPORTED_MODULE_0__moves__["g" /* defend */], __WEBPACK_IMPORTED_MODULE_0__moves__["j" /* shieldAttack */], __WEBPACK_IMPORTED_MODULE_0__moves__["i" /* parry */]
    ],

    sprites: "./assets/sprites/orc.png",

    render: {
        step: 64,
        start: 6,
        height: 718,
        max: 1100
    }
};
/* harmony export (immutable) */ __webpack_exports__["orc"] = orc;


const skeleton = {
    moves: [
        __WEBPACK_IMPORTED_MODULE_0__moves__["f" /* basicAttack */], __WEBPACK_IMPORTED_MODULE_0__moves__["h" /* meditate */], __WEBPACK_IMPORTED_MODULE_0__moves__["g" /* defend */], __WEBPACK_IMPORTED_MODULE_0__moves__["j" /* shieldAttack */], __WEBPACK_IMPORTED_MODULE_0__moves__["i" /* parry */]
    ],

    sprites: "./assets/sprites/skeleton.png",

    render: {
        step: 64,
        start: 6,
        height: 718,
        max: 1100
    }
};
/* harmony export (immutable) */ __webpack_exports__["skeleton"] = skeleton;


const steel = {
    moves: [
        __WEBPACK_IMPORTED_MODULE_0__moves__["f" /* basicAttack */], __WEBPACK_IMPORTED_MODULE_0__moves__["h" /* meditate */], __WEBPACK_IMPORTED_MODULE_0__moves__["g" /* defend */], __WEBPACK_IMPORTED_MODULE_0__moves__["j" /* shieldAttack */], __WEBPACK_IMPORTED_MODULE_0__moves__["i" /* parry */]
    ],

    sprites: "./assets/sprites/steel.png",

    render: {
        step: 64,
        start: 6,
        height: 718,
        max: 1100
    }
};
/* harmony export (immutable) */ __webpack_exports__["steel"] = steel;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__battle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__playerCharacter__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__information_characters__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals__ = __webpack_require__(6);






document.addEventListener("DOMContentLoaded", () => startGame());

const startGame = () => {
    let player = new __WEBPACK_IMPORTED_MODULE_2__character__["a" /* default */](__WEBPACK_IMPORTED_MODULE_3__information_characters__["golden"], 0);
    new __WEBPACK_IMPORTED_MODULE_0__battle__["a" /* default */](player);
    let questionButton = document.getElementsByClassName("question-button")[0];
    questionButton.addEventListener('click', () => Object(__WEBPACK_IMPORTED_MODULE_4__modals__["b" /* informationModal */])());
};
/* harmony export (immutable) */ __webpack_exports__["startGame"] = startGame;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const BASIC_ATTACK = "BASIC_ATTACK";
/* harmony export (immutable) */ __webpack_exports__["a"] = BASIC_ATTACK;

const MEDITATE = "MEDITATE";
/* harmony export (immutable) */ __webpack_exports__["c"] = MEDITATE;

const DEFEND = "DEFEND";
/* harmony export (immutable) */ __webpack_exports__["b"] = DEFEND;

const SHIELD_ATTACK = "SHIELD_ATTACK";
/* harmony export (immutable) */ __webpack_exports__["e"] = SHIELD_ATTACK;

const PARRY = "PARRY";
/* harmony export (immutable) */ __webpack_exports__["d"] = PARRY;


const basicAttack = {
    move: BASIC_ATTACK,
    image: "./assets/moves/pointy-sword.svg",
    render: {
        step: 64,
        start: 6,
        height: 974,
        max: 390
    }
};
/* harmony export (immutable) */ __webpack_exports__["f"] = basicAttack;


const meditate = {
    move: MEDITATE,
    image: "./assets/moves/meditation.svg",
    render: {
        step: 64,
        start: 6,
        height: 206,
        max: 390
    }
};
/* harmony export (immutable) */ __webpack_exports__["h"] = meditate;


const defend = {
    move: DEFEND,
    image: "./assets/moves/shield.svg",
    render: {
        step: 64,
        start: 6,
        height: 462,
        max: 454
    }
};
/* harmony export (immutable) */ __webpack_exports__["g"] = defend;


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
/* harmony export (immutable) */ __webpack_exports__["j"] = shieldAttack;


const parry = {
    move: PARRY,
    image: "./assets/moves/crossed-swords.svg",
    render: {
        step: 64,
        start: 6,
        height: 974,
        max: 390
    }
};
/* harmony export (immutable) */ __webpack_exports__["i"] = parry;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__information_characters__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__information_resolutions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals__ = __webpack_require__(6);





class battle {
    constructor(character1, character2) {
        this.player = character1;
        let enemies = Object.values(__WEBPACK_IMPORTED_MODULE_0__information_characters__);
        let enemy = enemies[Math.floor(Math.random() * enemies.length)];
        // let enemy = enemies[3];
        console.log(enemies);
        this.enemy = new __WEBPACK_IMPORTED_MODULE_1__character__["a" /* default */](enemy, -128);
        console.log(enemy);
        this.addButtons(this.player);
        this
            .player
            .renderChar("player");
        this
            .enemy
            .renderChar("enemy");
        this.checkWinner = this
            .checkWinner
            .bind(this);
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
                    this.handleMove(move);
                });
                moves.appendChild(moveLi);
            });
    }

    handleMove(move) {
        if (!(this.player.alive() && this.enemy.alive())) 
            return null;
        this
            .player
            .renderMove(move.render.start, move);
        let enemyMove = this
            .enemy
            .getMove();
        let resolution = Object(__WEBPACK_IMPORTED_MODULE_2__information_resolutions__["a" /* default */])(move.move, enemyMove.move);
        this.handleHp(resolution);
        let previous = document.getElementsByClassName('announce')[0];
        if (previous) {
            previous.remove();
        }
        let announce = document.createElement("DIV");
        announce.innerText = resolution.string;
        announce.setAttribute("class", "announce");
        let sky = document.getElementsByClassName('sky')[0];
        sky.appendChild(announce);
    }

    handleHp(resolution) {
        this.player.hitPoints -= resolution.player;
        this.enemy.hitPoints -= resolution.enemy;
        if (this.enemy.hitPoints > 50) 
            this.enemy.hitPoints = 50;
        if (this.player.hitPoints > 50) 
            this.player.hitPoints = 50;
        let pHealth = document.getElementsByClassName(this.player.identifier)[0];
        pHealth.style.width = `${ (this.player.hitPoints * 100) / 50}%`;
        let eHealth = document.getElementsByClassName(this.enemy.identifier)[0];
        eHealth.style.width = `${ (this.enemy.hitPoints * 100) / 50}%`;
        setTimeout(this.checkWinner, 1000);
    }

    checkWinner() {
        console.log(__WEBPACK_IMPORTED_MODULE_3__modals__["a" /* gameOverModal */]);
        if (!this.enemy.alive()) {
            this
                .enemy
                .renderDeath(10);

            Object(__WEBPACK_IMPORTED_MODULE_3__modals__["a" /* gameOverModal */])("Congratulats, you won!!!", this);
        } else if (!this.player.alive()) {
            this
                .player
                .renderDeath(10);
            Object(__WEBPACK_IMPORTED_MODULE_3__modals__["a" /* gameOverModal */])("I'm Sorry, you died", this);
        }
    }

    // gameOver(gOMsg) {     console.log("gameOver");     let game =
    // document.getElementsByClassName("game")[0];     let modalBackground =
    // document.createElement("DIV");     modalBackground.setAttribute("class",
    // "modal-background");     game.appendChild(modalBackground);     let modal =
    // document.createElement("div");     modal.setAttribute("class", "announce
    // modal");     console.log(modal);     modal.innerHTML += gOMsg;
    // modalBackground.appendChild(modal); }
}
/* harmony default export */ __webpack_exports__["a"] = (battle);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moves__ = __webpack_require__(3);


const getResolution = (playerMove, enemyMove) => {
    switch (playerMove) {
        case __WEBPACK_IMPORTED_MODULE_0__moves__["a" /* BASIC_ATTACK */]:
            switch (enemyMove) {
                case __WEBPACK_IMPORTED_MODULE_0__moves__["a" /* BASIC_ATTACK */]:
                    return aa;
                case __WEBPACK_IMPORTED_MODULE_0__moves__["c" /* MEDITATE */]:
                    return ab;
                case __WEBPACK_IMPORTED_MODULE_0__moves__["b" /* DEFEND */]:
                    return ac;
                case __WEBPACK_IMPORTED_MODULE_0__moves__["e" /* SHIELD_ATTACK */]:
                    return ad;
                case __WEBPACK_IMPORTED_MODULE_0__moves__["d" /* PARRY */]:
                    return ae;
            }
            break;
        case __WEBPACK_IMPORTED_MODULE_0__moves__["c" /* MEDITATE */]:
            switch (enemyMove) {
                case __WEBPACK_IMPORTED_MODULE_0__moves__["a" /* BASIC_ATTACK */]:
                    return ba;
                case __WEBPACK_IMPORTED_MODULE_0__moves__["c" /* MEDITATE */]:
                    return bb;
                case __WEBPACK_IMPORTED_MODULE_0__moves__["b" /* DEFEND */]:
                    return bc;
                case __WEBPACK_IMPORTED_MODULE_0__moves__["e" /* SHIELD_ATTACK */]:
                    return bd;
                case __WEBPACK_IMPORTED_MODULE_0__moves__["d" /* PARRY */]:
                    return be;
            }
            break;
        case __WEBPACK_IMPORTED_MODULE_0__moves__["b" /* DEFEND */]:
            switch (enemyMove) {
                case __WEBPACK_IMPORTED_MODULE_0__moves__["a" /* BASIC_ATTACK */]:
                    return ca;
                case __WEBPACK_IMPORTED_MODULE_0__moves__["c" /* MEDITATE */]:
                    return cb;
                case __WEBPACK_IMPORTED_MODULE_0__moves__["b" /* DEFEND */]:
                    return cc;
                case __WEBPACK_IMPORTED_MODULE_0__moves__["e" /* SHIELD_ATTACK */]:
                    return cd;
                case __WEBPACK_IMPORTED_MODULE_0__moves__["d" /* PARRY */]:
                    return ce;
            }
            break;

        case __WEBPACK_IMPORTED_MODULE_0__moves__["e" /* SHIELD_ATTACK */]:
            switch (enemyMove) {
                case __WEBPACK_IMPORTED_MODULE_0__moves__["a" /* BASIC_ATTACK */]:
                    return da;
                case __WEBPACK_IMPORTED_MODULE_0__moves__["c" /* MEDITATE */]:
                    return db;
                case __WEBPACK_IMPORTED_MODULE_0__moves__["b" /* DEFEND */]:
                    return dc;
                case __WEBPACK_IMPORTED_MODULE_0__moves__["e" /* SHIELD_ATTACK */]:
                    return dd;
                case __WEBPACK_IMPORTED_MODULE_0__moves__["d" /* PARRY */]:
                    return de;
            }
            break;
        case __WEBPACK_IMPORTED_MODULE_0__moves__["d" /* PARRY */]:
            switch (enemyMove) {
                case __WEBPACK_IMPORTED_MODULE_0__moves__["a" /* BASIC_ATTACK */]:
                    return ea;
                case __WEBPACK_IMPORTED_MODULE_0__moves__["c" /* MEDITATE */]:
                    return eb;
                case __WEBPACK_IMPORTED_MODULE_0__moves__["b" /* DEFEND */]:
                    return ec;
                case __WEBPACK_IMPORTED_MODULE_0__moves__["e" /* SHIELD_ATTACK */]:
                    return ed;
                case __WEBPACK_IMPORTED_MODULE_0__moves__["d" /* PARRY */]:
                    return ee;
            }
            break;
    }
};

const aa = {
    player: 10,
    enemy: 10,
    string: "You and the enemy both attacked each other doing some damage"
};

const ab = {
    player: 0,
    enemy: 20,
    string: "You attacked your enemy while he was meditating.  Harsh but effective"
};

const ac = {
    player: 10,
    enemy: 0,
    string: "Your enemy defended against your attack.  Somehow you got hurt... not sure how t" +
            "hat worked"
};

const ad = {
    player: 0,
    enemy: 10,
    string: "Your enemy tried hitting you with his shield but your sword was quicker.  Well d" +
            "one"
};

const ae = {
    player: 20,
    enemy: 0,
    string: "The enemy parried your attack and countered"
};

const ba = {
    player: 20,
    enemy: 0,
    string: "You tried mediating and your enemy stabbed you.  How rude!!!"
};

const bb = {
    player: -20,
    enemy: -20,
    string: "You and the enemy both meditated.  You do know this is a fighting game, right?"
};

const bc = {
    player: -20,
    enemy: 0,
    string: "You meditated while your enemy cowered behind his shield."
};

const bd = {
    player: 20,
    enemy: 0,
    string: "You tried meditating and they hit you with their shield.  An effective if ineleg" +
            "ant strategy"
};

const be = {
    player: -20,
    enemy: 0,
    string: "Your enemy tried parrying your meditation.  I think they are confused."
};

const ca = {
    player: 0,
    enemy: 20,
    string: "You successfully defended against your opponents attack.  Well done!"
};

const cb = {
    player: 0,
    enemy: -20,
    string: "You successfully defended against your opponents meditation... unsuccessfully..." +
            " not really sure what your plan was on that one"
};

const cc = {
    player: 0,
    enemy: 0,
    string: "You both cowered behind your shields... I'm going to get a drink this could take" +
            " a while."
};

const cd = {
    player: 5,
    enemy: 15,
    string: "Your oppenent hit your shield with his. You both are a bit shook up"
};

const ce = {
    player: 0,
    enemy: 0,
    string: "Your opponent tried parrying your defense.  Nothing much happened"
};

const da = {
    player: 10,
    enemy: 0,
    string: "You tried hitting your opponent with your shield but he got you with his sword. " +
            " Crafty bugger."
};

const db = {
    player: 0,
    enemy: 20,
    string: "Your opponent tried praying so you hit him in the head with your shield.  Good c" +
            "all."
};

const dc = {
    player: 15,
    enemy: 5,
    string: "Your hit your opponent with your shield while they were defending.  Shook you bo" +
            "th up a bit."
};

const dd = {
    player: 15,
    enemy: 15,
    string: "You both hit each other with your shields.  I don't think either of you were exp" +
            "ecting that outcome"
};

const de = {
    player: 0,
    enemy: 10,
    string: "Your opponent tried some fancy shield manouver so you hit him with yoru shield. " +
            " Effective!"
};

const ea = {
    player: 0,
    enemy: 20,
    string: "You parried your opponents attack and countered"
};

const eb = {
    player: 0,
    enemy: -20,
    string: "Not sure why you tried parrying your opponents mediation but it didn't really do" +
            "n anything."
};

const ec = {
    player: 0,
    enemy: 0,
    string: "You parry, they defend, nothing happens"
};

const ed = {
    player: 10,
    enemy: 0,
    string: "You tried and elaborate parry and your enemy hit you with his shield.  The barba" +
            "rian."
};

const ee = {
    player: 0,
    enemy: 0,
    string: "You and your enemy both parried each other.  A beutiful if pointless endeaveor."
};

/* harmony default export */ __webpack_exports__["a"] = (getResolution);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__character__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__information_characters__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game__ = __webpack_require__(2);




const gameOverModal = (message, battle) => {
    console.log("gameOver");
    let game = document.getElementsByClassName("game")[0];
    let modalBackground = document.createElement("DIV");
    modalBackground.setAttribute("class", "modal-background");
    game.appendChild(modalBackground);
    let modal = document.createElement("div");
    modal.setAttribute("class", "announce modal");
    modalBackground.appendChild(modal);
    let goMsg = document.createElement("DIV");
    goMsg.innerHTML += message;
    modal.appendChild(goMsg);
    let goButtons = document.createElement("DIV");
    goButtons.setAttribute("class", "go-buttons");
    modal.appendChild(goButtons);
    let playAgainButton = document.createElement("div");
    playAgainButton.innerHTML = "Play Again";
    playAgainButton.setAttribute("class", "button");
    playAgainButton.addEventListener("click", () => {
        let moveLi = document.getElementsByClassName("moves-list")[0];
        console.log(moveLi);
        while (moveLi.firstChild) 
            moveLi.removeChild(moveLi.firstChild);
        let enemies = document.getElementsByClassName("enemy-chars")[0];
        enemies.innerHTML = '';
        let player = document.getElementsByClassName("player-chars")[0];
        player.innerHTML = '';
        let announce = document.getElementsByClassName("announce")[0];
        announce.remove();
        modalBackground.remove();
        Object(__WEBPACK_IMPORTED_MODULE_2__game__["startGame"])();
    });

    goButtons.appendChild(playAgainButton);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = gameOverModal;


const informationModal = () => {
    let game = document.getElementsByClassName("game")[0];
    let modalBackground = document.createElement("DIV");
    modalBackground.setAttribute("class", "modal-background");
    game.appendChild(modalBackground);
    let modal = document.createElement("div");
    modal.setAttribute("class", "announce modal");
    modalBackground.appendChild(modal);
    let image = document.createElement("img");
    image.src = "/Users/jonathanhalloran/Desktop/Browser-RPG/assets/moves/moveChart.png";
    modal.appendChild(image);
    let gotItButton = document.createElement('div');
    gotItButton.innerHTML = "Got it";
    gotItButton.setAttribute("class", "button");
    gotItButton.addEventListener("click", () => {
        modalBackground.remove();
    });
    modal.appendChild(gotItButton);

};
/* harmony export (immutable) */ __webpack_exports__["b"] = informationModal;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__character__ = __webpack_require__(0);


class playerCharacter extends __WEBPACK_IMPORTED_MODULE_0__character__["a" /* default */] {
    constructor(initialization, enemyIncrement) {
        super(initialization, enemyIncrement);
        this.equipement = initialization.equipment;
    }
}

/* unused harmony default export */ var _unused_webpack_default_export = (playerCharacter);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map