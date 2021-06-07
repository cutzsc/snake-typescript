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
    add(other) {
        this.x = other.x;
        this.y = other.y;
        return this;
    }
    scale(rate) {
        this.x *= rate;
        this.y *= rate;
        return this;
    }
    compare(other) {
        return this.x == other.x &&
            this.y == other.y;
    }
    static zero() {
        return new Vector2(0, 0);
    }
    static up() {
        return new Vector2(0, -1);
    }
    static down() {
        return new Vector2(0, 1);
    }
    static left() {
        return new Vector2(-1, 0);
    }
    static right() {
        return new Vector2(1, 0);
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
    setPosition(other) {
        this.x = other.x;
        this.y = other.y;
    }
}
