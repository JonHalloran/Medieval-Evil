import battle from "./battle";
import playerCharacter from "./playerCharacter";
import character from "./character";
import * as characters from "./information/characters";
import {informationModal, startGameModal} from "./modals";

document.addEventListener("DOMContentLoaded", () => {
    // startGame();
    let questionButton = document.getElementsByClassName("question-button")[0];
    questionButton.addEventListener('click', () => informationModal());
    startGameModal();
    let newGame = document.getElementsByClassName("start-button")[0];
    newGame.addEventListener("click", () => {
        startGame();
        let modalBackground = document.getElementsByClassName("modal-background")[0];
        modalBackground.remove();
    });
});

export const startGame = () => {
    let player = new character(characters.golden, 0);
    new battle(player);
};