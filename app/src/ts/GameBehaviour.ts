import { Rect } from "./LinearAlgebra.js";

/* eslint-disable @typescript-eslint/no-unused-vars */
export abstract class Game {
	protected readonly canvas: HTMLCanvasElement;
	protected readonly context: CanvasRenderingContext2D;
	protected readonly clientBounds: Rect;
	
	private previousTime!: number;

	// initialization
	constructor(canvas: HTMLCanvasElement, clientBounds: Rect) {
		this.canvas = canvas;
		this.context = canvas?.getContext("2d") as CanvasRenderingContext2D;
		if (!this.context) {
			throw new Error("2d rendering is not supported.");
		}
		this.clientBounds = clientBounds;
	}

	// calculation
	public build(): this {
		this.canvas.width = this.clientBounds.width;
		this.canvas.height = this.clientBounds.height;
		this.previousTime = 0;
		return this;
	}

	// launch
	public run(): this {
		this.initialize();
		requestAnimationFrame(this.loop.bind(this));
		return this;
	}

	// logic
	private loop(timestamp: number): void {
		const elapsedTime = timestamp - this.previousTime;
		this.previousTime = timestamp;

		this.update(elapsedTime / 1000);
		this.draw(this.context);

		requestAnimationFrame(this.loop.bind(this));
	}

	protected abstract initialize(): void;
	protected abstract update(deltaTime: number): void;
	protected abstract draw(ctx: CanvasRenderingContext2D): void;
}
