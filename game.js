import battle from "./battle";
import character from "./character";
import playerTemplate from "./information/playerTemplate";

document.addEventListener("DOMContentLoaded", new battle(character(playerTemplate)));