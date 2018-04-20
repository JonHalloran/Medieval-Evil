import character from "./character";
import * as characters from "./information/characters";
import {startGame} from "./game";

export const gameOverModal = (message, battle) => {
    console.log("gameOver");
    let game = document.getElementsByClassName("game")[0];
    let modalBackground = document.createElement("DIV");
    modalBackground.setAttribute("class", "modal-background");
    game.appendChild(modalBackground);
    let modal = document.createElement("div");
    modal.setAttribute("class", "announce modal");
    modalBackground.appendChild(modal);
    let goMsg = document.createElement("DIV");
    goMsg.innerHTML += message;
    modal.appendChild(goMsg);
    let goButtons = document.createElement("DIV");
    goButtons.setAttribute("class", "go-buttons");
    modal.appendChild(goButtons);
    let playAgainButton = document.createElement("div");
    playAgainButton.innerHTML = "Play Again";
    playAgainButton.setAttribute("class", "button");
    playAgainButton.addEventListener("click", () => {
        let moveLi = document.getElementsByClassName("moves-list")[0];
        console.log(moveLi);
        while (moveLi.firstChild) 
            moveLi.removeChild(moveLi.firstChild);
        let enemies = document.getElementsByClassName("enemy-chars")[0];
        enemies.innerHTML = '';
        let player = document.getElementsByClassName("player-chars")[0];
        player.innerHTML = '';
        let announce = document.getElementsByClassName("announce")[0];
        announce.remove();
        modalBackground.remove();
        startGame();
    });

    goButtons.appendChild(playAgainButton);
};

export const informationModal = () => {
    let game = document.getElementsByClassName("game")[0];
    let modalBackground = document.createElement("DIV");
    modalBackground.setAttribute("class", "modal-background");
    game.appendChild(modalBackground);
    let modal = document.createElement("div");
    modal.setAttribute("class", "announce modal");
    modalBackground.appendChild(modal);
    let image = document.createElement("img");
    image.src = "/Users/jonathanhalloran/Desktop/Browser-RPG/assets/moves/moveChart.png";
    modal.appendChild(image);
    let gotItButton = document.createElement('div');
    gotItButton.innerHTML = "Got it";
    gotItButton.setAttribute("class", "button");
    gotItButton.addEventListener("click", () => {
        modalBackground.remove();
    });
    modal.appendChild(gotItButton);

};