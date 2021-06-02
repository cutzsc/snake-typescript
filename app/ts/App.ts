namespace App {
	interface GameBehavior {
		update(deltaTime: number): void,
		draw(ctx: CanvasRenderingContext2D): void
	}

	interface ClientBounds {
		width: number,
		height: number
	}
	
	const canvas = document.getElementById("game") as HTMLCanvasElement;
	const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

	const clientBounds: ClientBounds = {
		width: 500,
		height: 400
	};
	
	canvas.width = clientBounds.width;
	canvas.height = clientBounds.height;

	
	const game: GameBehavior | null = null;

	game!.update(1);
	game!.draw(ctx);
}