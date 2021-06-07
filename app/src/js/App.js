/* eslint-disable @typescript-eslint/no-unused-vars */
import { keyDown, keyUp } from "./Input.js";
import { SnakeGame } from "./Snake/SnakeGame.js";
window.onkeydown = keyDown;
window.onkeyup = keyUp;
(new SnakeGame(document.querySelector("#game"))).build().run();
