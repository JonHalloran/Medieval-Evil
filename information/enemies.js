import * as moves from './moves';

export const goblin = {
    moves: [moves.basicAttack],

    attributes: {
        speed: 50,
        strength: 50,
        dexterity: 50,
        constitution: 50,
        intelligence: 50
    },

    equipment: {},

    sprites: "./assets/sprites/goblin.png",

    render: {
        step: 64,
        start: -10,
        height: 850,
        max: 320
    },

    death: {
        step: 64,
        start: -10,
        height: 1298,
        max: 320
    }
};

export const darkElf = {
    moves: [moves.basicAttack],

    attributes: {
        speed: 50,
        strength: 50,
        dexterity: 50,
        constitution: 50,
        intelligence: 50
    },

    equipment: {},

    sprites: "./assets/sprites/darkElf.png",

    render: {
        step: 64,
        start: -10,
        height: 1106,
        max: 800
    },

    death: {
        step: 64,
        start: -10,
        height: 1298,
        max: 320
    }
};

export const evilWizard = {
    moves: [moves.basicAttack],

    attributes: {
        speed: 50,
        strength: 50,
        dexterity: 50,
        constitution: 50,
        intelligence: 50
    },

    equipment: {},

    sprites: "./assets/sprites/skeleton.png",

    render: {
        step: 64,
        start: -10,
        height: 850,
        max: 320
    },

    death: {
        step: 64,
        start: -10,
        height: 1298,
        max: 320
    }
};