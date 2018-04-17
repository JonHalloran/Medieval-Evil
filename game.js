import battle from "./battle";
import playerCharacter from "./playerCharacter";
import {baseChar} from "./information/playerTemplate";

document.addEventListener("DOMContentLoaded", () => startGame());

const startGame = () => {
    let player = new playerCharacter(baseChar);
    new battle(player);
};