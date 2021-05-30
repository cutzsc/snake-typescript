"use strict";
var LinearAlgebra;
(function (LinearAlgebra) {
    class Vector2 {
        _x;
        _y;
        _length;
        _propertyChanged;
        constructor(x, y) {
            this._x = x;
            this._y = y;
            this._length = 0;
            this._propertyChanged = true;
        }
        get x() {
            return this._x;
        }
        set x(value) {
            this._x = value;
            this._propertyChanged = true;
        }
        get y() {
            return this._y;
        }
        set y(value) {
            this._y = value;
            this._propertyChanged = true;
        }
        length() {
            if (this._propertyChanged) {
                this._length = Math.sqrt(this._x * this._x + this._y * this._y);
            }
            return this._length;
        }
    }
})(LinearAlgebra || (LinearAlgebra = {}));
