import {goblin} from "./information/enemies";
import character from "./character";

class battle {
    constructor(character1, character2) {
        this.player = character1;
        this.enemy = character2 || new character(goblin);
        this.timeP1 = 0;
        this.timeP2 = 0;
        this.fight(this.player, this.enemy);
        this.addButtons(this.player);
        this.renderChar(this.enemy);
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

                console.log("p1 time", this.timeP1, "p2 time", this.timeP2);
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
        let pHealth = document.querySelector('.player-health');
        pHealth.style.width = `${ (this.player.hitPoints * 100) / this.player.attributes.constitution}%`;
        let eHealth = document.querySelector('.enemy-health');
        eHealth.style.width = `${ (this.enemy.hitPoints * 100) / this.enemy.attributes.constitution}%`;

    }

    renderChar(char) {
        console.log(char);
        let div = document.querySelector(".enemy");
        let bIm = `url(${char.sprites})`;
        console.log(bIm);
        div.style.backgroundImage = bIm;
        div.style.backgroundPosition = "0 1000px";
    }
}
export default battle;