export abstract class Entity {
	public abstract initilize(): void;
	public abstract update(deltaTime: number): void;
	public abstract draw(ctx: CanvasRenderingContext2D): void;
}