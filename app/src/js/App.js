/* eslint-disable @typescript-eslint/no-unused-vars */
import { press, release } from "./Input.js";
import { Rect } from "./LinearAlgebra.js";
import { SnakeGame } from "./Snake/SnakeGame.js";
window.onkeydown = press;
window.onkeyup = release;
new SnakeGame(document.querySelector("#game"), new Rect(0, 0, 500, 400))
    .build()
    .run();
