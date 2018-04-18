import {goblin, darkElf, evilWizard, skeleton} from "./information/enemies";
import character from "./character";

class battle {
    constructor(character1, character2) {
        this.player = character1;
        this.enemy = character2 || new character(skeleton);
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
export default battle;