import { rgba } from "../Extensions.js";
import { Entity } from "./Entity.js";
export class Snake extends Entity {
    body = [];
    speed;
    elapsedSinceLastMove;
    initilize() {
        this.elapsedSinceLastMove = 0;
        this.speed = 500;
    }
    update(deltaTime) {
        this.elapsedSinceLastMove += deltaTime;
        if (this.elapsedSinceLastMove > this.speed) {
            this.elapsedSinceLastMove -= this.speed;
            for (let i = 1; i < this.body.length; i++) {
                const rect = this.body[i];
            }
        }
    }
    draw(ctx) {
        ctx.fillStyle = rgba(255, 255, 255);
        ctx.beginPath();
        for (let i = 0; i < this.body.length; i++) {
            const rect = this.body[i];
            ctx.rect(rect.x, rect.y, rect.width, rect.height);
        }
        ctx.closePath();
        ctx.fill();
    }
}
