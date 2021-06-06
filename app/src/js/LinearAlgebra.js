/* eslint-disable @typescript-eslint/no-unused-vars */
export class Vector2 {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    add(vec) {
        this.x = vec.x;
        this.y = vec.y;
    }
    compare(other) {
        return this.x == other.x &&
            this.y == other.y;
    }
}
export class Rect {
    x;
    y;
    width;
    height;
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
