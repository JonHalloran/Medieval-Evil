export const gameOverModal = (message) => {
    console.log("gameOver");
    let game = document.getElementsByClassName("game")[0];
    let modalBackground = document.createElement("DIV");
    modalBackground.setAttribute("class", "modal-background");
    game.appendChild(modalBackground);

    let modal = document.createElement("div");
    modal.setAttribute("class", "announce modal");
    console.log(modal);
    modal.innerHTML += gOMsg;
    modalBackground.appendChild(modal);
};