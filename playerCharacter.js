import character from './character';

class playerCharacter extends character {
    constructor(initialization, enemyIncrement) {
        super(initialization, enemyIncrement);
        this.equipement = initialization.equipment;
    }
}

export default playerCharacter;