import { input } from "../Input.js";
import { Vector2 } from "../LinearAlgebra.js";
import { Entity } from "./Entity.js";
import { Food } from "./Food.js";
import { LevelInfo } from "./LevelInfo.js";

export class Snake extends Entity {
	private body: Vector2[] = [];
	private elapsedSinceLastMove!: number;
	private cellSize!: Vector2;
	private snakeBodyPadding!: Vector2;
	private direction!: Vector2;
	private nextDirection!: Vector2;

	public food!: Food;
	public restartCallback!: () => void;
	
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
		this.elapsedSinceLastMove += deltaTime;
		this.changeDirection(this.userInput());

		if (this.elapsedSinceLastMove > LevelInfo.SNAKE_SPEED) {
			this.elapsedSinceLastMove -= LevelInfo.SNAKE_SPEED;
			this.move();
			if (this.checkCollision()) {
				this.restartCallback();
			}
			if (this.food.getPosition().compare(this.body[0])) {
				this.food.nextPosition();
				this.body.push(this.body[this.body.length - 1].clone());
			}
		}
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = LevelInfo.SNAKE_COLOR;
		ctx.beginPath();
		for (let i = 0; i < this.body.length; i++) {
			ctx.rect(
				this.body[i].x * this.cellSize.x + this.snakeBodyPadding.x,
				this.body[i].y * this.cellSize.y + this.snakeBodyPadding.y,
				this.cellSize.x - this.snakeBodyPadding.x * 2,
				this.cellSize.y - this.snakeBodyPadding.y * 2);
		}
		ctx.closePath();
		ctx.fill();
	}

	private move(): void {
		this.direction = this.nextDirection;
		for (let i = this.body.length - 1; i > 0; i--) {
			this.body[i].set(this.body[i - 1]);
		}
		this.body[0].add(this.direction);
		
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

	private checkCollision(): boolean {
		if (this.body[0].x > LevelInfo.FIELD_WIDTH - 1 ||
			this.body[0].y > LevelInfo.FIELD_HEIGHT - 1 ||
			this.body[0].x < 0 ||
			this.body[0].y < 0) {
			return true;
		}
		
		for (let i = 1; i < this.body.length; i++) {
			const pos = this.body[i];
			if (pos.compare(this.body[0])) {
				return true;
			}
		}
		
		return false;
	}
}