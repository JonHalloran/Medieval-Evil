import character from './character';

class playerCharacter extends character {
    constructor(initialization) {
        super(initialization);
        this.equipement = initialization.equipment;
    }

    getMove() {
        this.renderAction(this.rendStart, this.rendStep);
    }
}

export default playerCharacter;