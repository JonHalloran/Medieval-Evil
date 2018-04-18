import * as moves from "./moves";

export const baseChar = {
    moves: [
        moves.basicAttack, moves.meditate, moves.defend, moves.shieldAttack, moves.parry
    ],

    sprites: "./assets/sprites/male.png",

    render: {
        step: 192,
        start: 70,
        height: 1998,
        max: 1100
    }
};