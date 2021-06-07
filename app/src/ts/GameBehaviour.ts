import { GameInfo } from "./GameInfo.js";

/* eslint-disable @typescript-eslint/no-unused-vars */
export abstract class Game {
	protected readonly canvas: HTMLCanvasElement;
	protected readonly context: CanvasRenderingContext2D;

	private previousTime!: number;

	// initialization
	constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.context = canvas?.getContext("2d") as CanvasRenderingContext2D;
		if (!this.context) {
			throw new Error("2d rendering is not supported.");
		}
	}

	// calculation
	public build(): this {
		this.canvas.width = GameInfo.CLIENT_WIDTH;
		this.canvas.height = GameInfo.CLIENT_HEIGHT;
		this.previousTime = 0;
		return this;
	}

	// launch
	public run(): this {
		this.loadContent();
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

	protected abstract loadContent(): void;
	protected abstract initialize(): void;
	protected abstract update(deltaTime: number): void;
	protected abstract draw(ctx: CanvasRenderingContext2D): void;
}
