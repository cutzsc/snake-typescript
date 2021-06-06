/* eslint-disable @typescript-eslint/no-unused-vars */
import { Rect } from "./LinearAlgebra.js";
import { SnakeGame } from "./SnakeGame.js";
const canvas = document.getElementById("game");
const clientBounds = new Rect(0, 0, 500, 400);
const game = (new SnakeGame(canvas, clientBounds)).build().run();
