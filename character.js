class character {
    constructor(initializaton) {
        this.attributes = initializaton.attributes;
        this.moves = initializaton.moves;
    }

    getMove() {
        let randomMove = this.moves[Math.floor(Math.random() * this.moves.length)];
        return randomMove;
    }

    getTime() {
        return 1 / this.attributes.speed;
    }

    alive() {
        return this.attributes.hitPoints > 0;
    }

    placeCharacter() {
        document.getElementsByClassName;
    }
}

export default character;