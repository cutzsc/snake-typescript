/* eslint-disable @typescript-eslint/no-unused-vars */
export class Vector2 {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	length(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	add(other: Vector2): void {
		this.x = other.x;
		this.y = other.y;
	}

	compare(other: Vector2): boolean {
		return	this.x == other.x &&
				this.y == other.y;
	}
}

export class Rect {
	x: number;
	y: number;
	width: number;
	height: number;

	constructor(
		x: number,
		y: number,
		width: number,
		height: number)
		{
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
		}
}
