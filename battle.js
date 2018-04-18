import {goblin, darkElf, evilWizard, skeleton} from "./information/enemies";
import character from "./character";

class battle {
    constructor(character1, character2) {
        this.player = character1;
        this.enemy = character2 || new character(skeleton);
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
export default battle;