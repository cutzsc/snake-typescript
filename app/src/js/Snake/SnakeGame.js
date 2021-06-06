/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { rgba } from "../Extensions.js";
import { Game } from "../GameBehaviour.js";
export class SnakeGame extends Game {
    initialize() {
        throw new Error("Method not implemented.");
    }
    update(deltaTime) {
        console.log(`fps ${1 / deltaTime}`);
    }
    draw(ctx) {
        ctx.clearRect(this.clientBounds.x, this.clientBounds.y, this.clientBounds.width, this.clientBounds.height);
        ctx.fillStyle = rgba(0, 0, 0);
        ctx.fillRect(this.clientBounds.x, this.clientBounds.y, this.clientBounds.width, this.clientBounds.height);
        ctx.strokeStyle = rgba(255, 255, 255, 255);
        ctx.beginPath();
        ctx.moveTo(20, 20);
        ctx.lineTo(200, 20);
        ctx.lineTo(120, 120);
        ctx.closePath();
        ctx.stroke();
        ctx.closePath();
    }
}
