import * as moves from "./moves";

export const baseChar = {
    moves: [
        moves.basicAttack, moves.basicAttack, moves.basicAttack, moves.basicAttack
    ],

    attributes: {
        speed: 50,
        strength: 50,
        dexterity: 50,
        constitution: 50,
        intelligence: 50
    },

    equipment: {}
};