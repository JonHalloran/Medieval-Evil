import * as characters from "./information/characters";
import character from "./character";
import getResolution from "./information/resolutions";

class battle {
    constructor(character1, character2) {
        this.player = character1;
        this.enemy = character2 || new character(characters.skeleton, -128);
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

    handleMove(move) {
        let enemyMove = this
            .enemy
            .getMove();
        let resolution = getResolution(move.move, enemyMove.move);
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
        console.log(this.player.hitPoints, this.enemy.hitPoints);
    }

    handleHp(resolution) {
        this.player.hitPoints -= resolution.player;
        this.enemy.hitPoints -= resolution.enemy;
        if (this.enemy.hitPoints > 50) 
            this.enemy.hitPoints = 50;
        if (this.player.hitPoints > 50) 
            this.player.hitPoints = 50;
        console.log("HP");
        let pHealth = document.getElementsByClassName(this.player.identifier)[0];
        pHealth.style.width = `${ (this.player.hitPoints * 100) / 50}%`;
        let eHealth = document.getElementsByClassName(this.enemy.identifier)[0];
        eHealth.style.width = `${ (this.enemy.hitPoints * 100) / 50}%`;
    }
}
export default battle;