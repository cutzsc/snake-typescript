import { Rect } from "../LinearAlgebra.js";
import { rgba } from "../Extensions.js";
import { Entity } from "./Entity.js";

export class Snake extends Entity {
	private body: Array<Rect> = [];
	private speed!: number;
	private elapsedSinceLastMove!: number;
	
	public initilize(): void {
		this.elapsedSinceLastMove = 0;
		this.speed = 500;
	}

	public update(deltaTime: number): void {
		this.elapsedSinceLastMove += deltaTime;

		if (this.elapsedSinceLastMove > this.speed) {
			this.elapsedSinceLastMove -= this.speed;
		
			for (let i = 1; i < this.body.length; i++) {
				const rect: Rect = this.body[i];
				
			}
		}
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = rgba(255, 255, 255);
		ctx.beginPath();
		for (let i = 0; i < this.body.length; i++) {
			const rect: Rect = this.body[i];
			ctx.rect(rect.x, rect.y, rect.width, rect.height);
		}
		ctx.closePath();
		ctx.fill();
	}
}