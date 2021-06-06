import { Rect } from "./LinearAlgebra.js";

/* eslint-disable @typescript-eslint/no-unused-vars */
export abstract class Game {

	protected readonly _context: CanvasRenderingContext2D;
	protected readonly _clientBounds: Rect;

	private readonly _canvas: HTMLCanvasElement;

	constructor(readonly canvas: HTMLCanvasElement, readonly clientBounds: Rect) {
		this._canvas = canvas;
		this._clientBounds = clientBounds;
		this._canvas.width = clientBounds.width;
		this._canvas.height = clientBounds.height;
		
		this._context = canvas.getContext("2d") as CanvasRenderingContext2D;
	}

	public build(): this {
		return this;
	}

	public run(): this {
		this.update(16 / 1000);
		this.draw(this._context);
		return this;
	}

	protected abstract initialize(): void;
	protected abstract update(deltaTime: number): void;
	protected abstract draw(ctx: CanvasRenderingContext2D): void;
}
