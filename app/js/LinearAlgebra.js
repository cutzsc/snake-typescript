"use strict";
var LinearAlgebra;
(function (LinearAlgebra) {
    class Vector2 {
        _x;
        _y;
        constructor(x, y) {
            this._x = x;
            this._y = y;
        }
        get x() {
            return this._x;
        }
        set x(value) {
            this._x = value;
        }
        get y() {
            return this._y;
        }
        set y(value) {
            this._y = value;
        }
        length() {
            return Math.sqrt(this._x * this._x + this._y * this._y);
        }
    }
})(LinearAlgebra || (LinearAlgebra = {}));
