import character from './character';

class playerCharacter extends character {
    constructor(initialization) {
        super(initialization);
        this.equipement = initialization.equipment;
    }
}

export default playerCharacter;