namespace LinearAlgebra {
	class Vector2 {
		_x: number;
		_y: number;
		_length: number;
		_propertyChanged: boolean;

		constructor(x: number, y: number) {
			this._x = x;
			this._y = y;
			this._length = 0;
			this._propertyChanged = true;
		}

		get x(): number {
			return this._x;
		}

		set x(value: number) {
			this._x = value;
			this._propertyChanged = true;
		}

		get y(): number {
			return this._y;
		}

		set y(value: number) {
			this._y = value;
			this._propertyChanged = true;
		}

		length(): number {
			if (this._propertyChanged)
			{
				this._length = Math.sqrt(this._x * this._x + this._y * this._y);
			}
			return this._length;
		}
	}
}