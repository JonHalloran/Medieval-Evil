import {goblin} from "./information/enemies";
import character from "./character";

class battle {
    constructor(character1, character2) {
        this.player = character1;
        this.enemy = character2 || new character(goblin);
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
export default battle;