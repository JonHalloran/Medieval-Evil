import battle from "./battle";
import playerCharacter from "./playerCharacter";
import character from "./character";
import * as characters from "./information/characters";

document.addEventListener("DOMContentLoaded", () => startGame());

export const startGame = () => {
    let player = new character(characters.golden, 0);
    new battle(player);
};