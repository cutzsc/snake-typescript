import { rangeInt, rgba } from "../Extensions.js";
import { Vector2 } from "../LinearAlgebra.js";
import { Entity } from "./Entity.js";
import { LevelInfo } from "./LevelInfo.js";

export class Food extends Entity {
	private position: Vector2 = Vector2.zero();
	private cellSize!: Vector2;

	public initilize(): void {
		this.cellSize = LevelInfo.getCellSize();
		this.nextPosition();
	}

	public update(deltaTime: number): void {
		// anti annoying eslint
		{deltaTime}
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = rgba(200, 30, 30);
		ctx.fillRect(this.position.x * this.cellSize.x, this.position.y * this.cellSize.y, this.cellSize.x, this.cellSize.y);
	}
	
	public nextPosition(): void {
		// TODO: res food where no snake
		this.position.x = rangeInt(0, LevelInfo.FIELD_WIDTH - 1);
		this.position.y = rangeInt(0, LevelInfo.FIELD_HEIGHT - 1);
	}
	
	public getPosition(): Vector2 {
		return this.position;
	}
}