/* eslint-disable @typescript-eslint/no-unused-vars */
export class Game {
    canvas;
    context;
    clientBounds;
    previousTime;
    // initialization
    constructor(canvas, clientBounds) {
        this.canvas = canvas;
        this.context = canvas?.getContext("2d");
        if (!this.context) {
            throw new Error("2d rendering is not supported.");
        }
        this.clientBounds = clientBounds;
    }
    // calculation
    build() {
        this.canvas.width = this.clientBounds.width;
        this.canvas.height = this.clientBounds.height;
        this.previousTime = 0;
        return this;
    }
    // launch
    run() {
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
