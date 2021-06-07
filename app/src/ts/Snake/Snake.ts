import { input } from "../Input.js";
import { Rect, Vector2 } from "../LinearAlgebra.js";
import { Entity } from "./Entity.js";
import { LevelInfo } from "./Level.js";

export class Snake extends Entity {
	private body: Vector2[] = [];
	private elapsedSinceLastMove!: number;
	private cellSize!: Vector2;
	private snakeBodyPadding!: Vector2;
	private direction!: Vector2;
	private nextDirection!: Vector2;
	
	public initilize(): void {
		this.elapsedSinceLastMove = 0;
		this.cellSize = LevelInfo.getCellSize();
		this.snakeBodyPadding = LevelInfo.getSnakeBodyPadding();
		this.direction = Vector2.up();
		this.nextDirection = Vector2.up();

		this.body = [];
		for (let i = 0; i < LevelInfo.INITIAL_SNAKE_SIZE; i++) {
			this.body.push(new Vector2(
				Math.floor(LevelInfo.FIELD_WIDTH / 2),
				Math.floor(LevelInfo.FIELD_HEIGHT / 2) + i
			));
		}
	}

	public update(deltaTime: number): void {
		this.changeDirection(this.userInput());

		this.move(deltaTime);
		
		// TODO: check collision
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = LevelInfo.SNAKE_COLOR;
		ctx.beginPath();
		for (let i = 0; i < this.body.length; i++) {
			ctx.rect(
				this.body[i].x * this.cellSize.x + this.snakeBodyPadding.x,
				this.body[i].y * this.cellSize.y + this.snakeBodyPadding.y,
				this.cellSize.x - this.snakeBodyPadding.x,
				this.cellSize.y - this.snakeBodyPadding.y);
		}
		ctx.closePath();
		ctx.fill();
	}

	private move(deltaTime: number): void {
		this.elapsedSinceLastMove += deltaTime;
		if (this.elapsedSinceLastMove > LevelInfo.SNAKE_SPEED) {
			this.direction = this.nextDirection;
			this.elapsedSinceLastMove -= LevelInfo.SNAKE_SPEED;
			for (let i = this.body.length - 1; i > 0; i--) {
				this.body[i].set(this.body[i - 1]);
			}
			this.body[0].add(this.direction);
		}
	}

	private userInput(): Vector2 {
		if (input.up)		return Vector2.up();
		if (input.down)		return Vector2.down();
		if (input.left)		return Vector2.left();
		if (input.right)	return Vector2.right();
		return Vector2.zero();
	}

	private changeDirection(direction: Vector2): void {
		if (this.direction.y != 0) {	// if snake moves up or down
			if (direction.x != 0) {	// we can only move left or right
				this.nextDirection = direction;
			}
		}
		else if (this.direction.x != 0) {
			if (direction.y != 0) {
				this.nextDirection = direction;
			}
		}
	}
}