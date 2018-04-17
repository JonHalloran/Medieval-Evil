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

export default character;