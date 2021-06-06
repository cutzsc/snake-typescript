namespace LinearAlgebra {
	class Vector2 {
		_x: number;
		_y: number;

		constructor(x: number, y: number) {
			this._x = x;
			this._y = y;
		}

		get x(): number {
			return this._x;
		}

		set x(value: number) {
			this._x = value;
		}

		get y(): number {
			return this._y;
		}

		set y(value: number) {
			this._y = value;
		}

		length(): number {
			return Math.sqrt(this._x * this._x + this._y * this._y);
		}
	}
}