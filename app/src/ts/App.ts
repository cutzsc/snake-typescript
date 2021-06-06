/* eslint-disable @typescript-eslint/no-unused-vars */

import { Game } from "./GameBehaviour.js";
import { Rect } from "./LinearAlgebra.js";
import { SnakeGame } from "./SnakeGame.js";


const canvas = document.getElementById("game") as HTMLCanvasElement;
const clientBounds: Rect = new Rect(0, 0, 500, 400);

const game: Game = (new SnakeGame(canvas, clientBounds)).build().run();