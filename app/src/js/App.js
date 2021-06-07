/* eslint-disable @typescript-eslint/no-unused-vars */
import { press, release } from "./Input.js";
import { SnakeGame } from "./Snake/SnakeGame.js";
window.onkeydown = press;
window.onkeyup = release;
(new SnakeGame(document.querySelector("#game"))).build().run();
