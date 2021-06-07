/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { rgba } from "../Extensions.js";
import { Game } from "../GameBehaviour.js";
import { input } from "../Input.js";
import { Snake } from "./Snake.js";
import { Food } from "./Food.js";
export class SnakeGame extends Game {
    entities = [];
    restartPressed;
    loadContent() {
        const snake = new Snake();
        const food = new Food();
        snake.restartCallback = this.restart.bind(this);
        snake.food = food;
        this.entities.push(snake);
        this.entities.push(food);
    }
    initialize() {
        this.restartPressed = false;
        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].initilize();
        }
    }
    update(deltaTime) {
        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].update(deltaTime);
        }
        if (this.restartPressed && !input.restart) {
            this.restart();
        }
        this.restartPressed = input.restart;
    }
    draw(ctx) {
        this.clear(ctx, rgba(0, 0, 0));
        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].draw(ctx);
        }
    }
    clear(ctx, color) {
        ctx.fillStyle = color;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    restart() {
        this.initialize();
    }
}
