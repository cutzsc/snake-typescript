/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Rect } from "../LinearAlgebra.js";
import { rgba } from "../Extensions.js";
import { Game } from "../GameBehaviour.js";
import { input } from "../Input.js";
export class SnakeGame extends Game {
    head = new Rect(80, 10, 30, 30);
    initialize() {
        console.log("initialization");
    }
    update(deltaTime) {
        if (input.right) {
            this.head.x += 50 * deltaTime;
            console.log(this.head);
        }
    }
    draw(ctx) {
        this.clear(ctx, rgba(0, 0, 0));
        // draw entities
        ctx.fillStyle = rgba(255, 255, 255);
        ctx.beginPath();
        ctx.rect(this.head.x, this.head.y, this.head.width, this.head.height);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = rgba(255, 0, 255);
        ctx.beginPath();
        ctx.rect(this.head.x + 50, this.head.y + 50, this.head.width, this.head.height);
        ctx.closePath();
        ctx.fill();
    }
    clear(ctx, color) {
        ctx.fillStyle = color;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
