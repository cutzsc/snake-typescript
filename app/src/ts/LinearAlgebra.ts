/* eslint-disable @typescript-eslint/no-unused-vars */
export class Vector2 {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	public set(other: Vector2): void {
		this.x = other.x;
		this.y = other.y;
	}

	public length(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	public add(other: Vector2): this {
		this.x += other.x;
		this.y += other.y;
		return this;
	}

	public scale(rate: number): this {
		this.x *= rate;
		this.y *= rate;
		return this;
	}

	public compare(other: Vector2): boolean {
		return	this.x == other.x &&
				this.y == other.y;
	}

	public clone(): Vector2 {
		return new Vector2(this.x, this.y);
	}

	public static zero(): Vector2 {
		return new Vector2(0, 0);
	}

	public static up(): Vector2 {
		return new Vector2(0, -1);
	}

	public static down(): Vector2 {
		return new Vector2(0, 1);
	}

	public static left(): Vector2 {
		return new Vector2(-1, 0);
	}

	public static right(): Vector2 {
		return new Vector2(1, 0);
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

	public setPosition(other: Rect): void {
		this.x = other.x;
		this.y = other.y;
	}
}
