import character from './character';

class playerCharacter extends character {
    constructor(initialization) {
        this.equipement = initialization.equipment;
        super(initialization);
    }

    getMove() {}
}