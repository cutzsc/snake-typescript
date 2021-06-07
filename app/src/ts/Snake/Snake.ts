import { Rect, Vector2 } from "../LinearAlgebra.js";
import { rgba } from "../Extensions.js";
import { Entity } from "./Entity.js";
import { LevelInfo } from "./Level.js";

export class Snake extends Entity {
	private body: Array<Rect> = [];
	private elapsedSinceLastMove!: number;
	private bodyCell!: Rect;
	
	public initilize(): void {
		this.elapsedSinceLastMove = 0;

		// TODO: setup body array
		const cellSize: Vector2 = LevelInfo.getCellSize();
		this.bodyCell = new Rect(
			Math.floor(LevelInfo.FIELD_WIDTH / 2) * cellSize.x,
			Math.floor(LevelInfo.FIELD_HEIGHT / 2) * cellSize.y,
			cellSize.x, cellSize.y);
			
		this.body = [];
		for (let i = 0; i < LevelInfo.INITIAL_SNAKE_SIZE; i++) {
			this.body.push(new Rect(
				this.bodyCell.x,
				this.bodyCell.y - i * this.bodyCell.height,
				this.bodyCell.width, this.bodyCell.height
			));
		}
	}

	public update(deltaTime: number): void {
		// TODO: input, change direction

		
		// this.move(deltaTime);
		
		// TODO: check collision
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = LevelInfo.SNAKE_COLOR;
		ctx.beginPath();
		for (let i = 0; i < this.body.length; i++) {
			ctx.rect(
				this.body[i].x + LevelInfo.SNAKE_BODY_PADDING,
				this.body[i].y + LevelInfo.SNAKE_BODY_PADDING,
				this.body[i].width - LevelInfo.SNAKE_BODY_PADDING,
				this.body[i].height - LevelInfo.SNAKE_BODY_PADDING);
		}
		ctx.closePath();
		ctx.fill();
	}

	private move(deltaTime: number): void {
		// TODO: move head
		this.elapsedSinceLastMove += deltaTime;
		if (this.elapsedSinceLastMove > LevelInfo.SNAKE_SPEED) {
			this.elapsedSinceLastMove -= LevelInfo.SNAKE_SPEED;
		
			for (let i = 1; i < this.body.length; i++) {
				this.body[i].setPosition(this.body[i - 1]);
			}
		}
	}
}