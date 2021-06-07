import { GameInfo } from "./GameInfo.js";
/* eslint-disable @typescript-eslint/no-unused-vars */
export class Game {
    canvas;
    context;
    previousTime;
    // initialization
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas?.getContext("2d");
        if (!this.context) {
            throw new Error("2d rendering is not supported.");
        }
    }
    // calculation
    build() {
        this.canvas.width = GameInfo.CLIENT_WIDTH;
        this.canvas.height = GameInfo.CLIENT_HEIGHT;
        this.previousTime = 0;
        return this;
    }
    // launch
    run() {
        this.loadContent();
        this.initialize();
        requestAnimationFrame(this.loop.bind(this));
        return this;
    }
    // logic
    loop(timestamp) {
        const elapsedTime = timestamp - this.previousTime;
        this.previousTime = timestamp;
        this.update(elapsedTime / 1000);
        this.draw(this.context);
        requestAnimationFrame(this.loop.bind(this));
    }
}
