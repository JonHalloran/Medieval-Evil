import battle from "./battle";
import playerCharacter from "./playerCharacter";
import {baseChar} from "./information/playerTemplate";

document.addEventListener("DOMContentLoaded", new battle(new playerCharacter(baseChar)));