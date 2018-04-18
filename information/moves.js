export const BASIC_ATTACK = "BASIC_ATTACK";
export const MEDITATE = "MEDITATE";
export const DEFEND = "DEFEND";
export const SHIELD_ATTACK = "SHIELD_ATTACK";
export const PARRY = "PARRY";

export const basicAttack = {
    move: BASIC_ATTACK,
    image: "./assets/moves/pointy-sword.svg",
    render: {
        step: 192,
        start: 70,
        height: 1998,
        max: 1100
    }
};

export const meditate = {
    move: MEDITATE,
    image: "./assets/moves/meditation.svg",
    render: {
        step: 64,
        start: 6,
        height: 206,
        max: 400
    }
};

export const defend = {
    move: DEFEND,
    image: "./assets/moves/shield.svg",
    render: {
        step: 64,
        start: 6,
        height: 462,
        max: 400
    }
};

export const shieldAttack = {
    move: SHIELD_ATTACK,
    image: "./assets/moves/shield-bounces.svg",
    render: {
        step: -1,
        start: 326,
        height: 462,
        max: 316
    }
};

export const parry = {
    move: PARRY,
    image: "./assets/moves/crossed-swords.svg",
    render: {
        step: 192,
        start: 70,
        height: 1998,
        max: 1100
    }
};