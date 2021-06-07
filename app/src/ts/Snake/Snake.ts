import { Rect, Vector2 } from "../LinearAlgebra.js";
import { Entity } from "./Entity.js";
import { LevelInfo } from "./Level.js";

export class Snake extends Entity {
	private body: Array<Rect> = [];
	private elapsedSinceLastMove!: number;
	private cellSize!: Vector2;
	private snakeBodyPadding!: Vector2;
	
	public initilize(): void {
		this.elapsedSinceLastMove = 0;
		this.cellSize = LevelInfo.getCellSize();
		this.snakeBodyPadding = LevelInfo.getSnakeBodyPadding();

		const bodyCell: Rect = new Rect(
			LevelInfo.FIELD_WIDTH / 2 * this.cellSize.x - this.cellSize.x / 2,
			LevelInfo.FIELD_HEIGHT / 2 * this.cellSize.y,
			this.cellSize.x, this.cellSize.y);
			
		this.body = [];
		for (let i = 0; i < LevelInfo.INITIAL_SNAKE_SIZE; i++) {
			this.body.push(new Rect(
				bodyCell.x,
				bodyCell.y + i * bodyCell.height - bodyCell.height,
				bodyCell.width, bodyCell.height
			));
		}
	}

	public update(deltaTime: number): void {
		// TODO: input, change direction

		this.move(deltaTime);
		
		// TODO: check collision
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = LevelInfo.SNAKE_COLOR;
		ctx.beginPath();
		for (let i = 0; i < this.body.length; i++) {
			ctx.rect(
				this.body[i].x + this.snakeBodyPadding.x,
				this.body[i].y + this.snakeBodyPadding.y,
				this.body[i].width - this.snakeBodyPadding.x,
				this.body[i].height - this.snakeBodyPadding.y);
		}
		ctx.closePath();
		ctx.fill();
	}

	private move(deltaTime: number): void {
		this.elapsedSinceLastMove += deltaTime;
		if (this.elapsedSinceLastMove > LevelInfo.SNAKE_SPEED) {
			this.elapsedSinceLastMove -= LevelInfo.SNAKE_SPEED;
			for (let i = this.body.length - 1; i > 0; i--) {
				this.body[i].setPosition(this.body[i - 1]);
			}
			this.body[0].y -= this.cellSize.x;
		}
	}
}