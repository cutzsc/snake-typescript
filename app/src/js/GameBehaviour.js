/* eslint-disable @typescript-eslint/no-unused-vars */
export class Game {
    canvas;
    clientBounds;
    _context;
    _clientBounds;
    _canvas;
    constructor(canvas, clientBounds) {
        this.canvas = canvas;
        this.clientBounds = clientBounds;
        this._canvas = canvas;
        this._clientBounds = clientBounds;
        this._canvas.width = clientBounds.width;
        this._canvas.height = clientBounds.height;
        this._context = canvas.getContext("2d");
    }
    build() {
        return this;
    }
    run() {
        this.update(16 / 1000);
        this.draw(this._context);
        return this;
    }
}
