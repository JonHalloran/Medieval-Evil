import {goblin} from "./information/enemies";
import character from "./character";

class battle {
    constructor(character1, character2) {
        this.player = character1;
        this.enemy = character2 || new character(goblin);
        let timeP1 = 0;
        let timeP2 = 0;
        // this.fight(this.player, this.enemy);
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

export default battle;