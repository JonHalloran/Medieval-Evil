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

    equipment: {},

    sprites: "./assets/sprites/male.png",

    render: {
        step: 192,
        start: 60,
        height: 1998,
        max: 1100
    }
};