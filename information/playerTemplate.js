import * as moves from "./moves";

export const baseChar = {
    moves: [
        moves.basicAttack, moves.meditate, moves.defend, moves.shieldAttack, moves.parry
    ],

    sprites: "./assets/sprites/male.png",

    render: {
        step: 64,
        start: 6,
        height: 718,
        max: 1100
    }
};