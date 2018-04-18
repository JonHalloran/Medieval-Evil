import battle from "./battle";
import playerCharacter from "./playerCharacter";
import * as characters from "./information/characters";

document.addEventListener("DOMContentLoaded", () => startGame());

const startGame = () => {
    let player = new playerCharacter(characters.golden, 0);
    new battle(player);
};