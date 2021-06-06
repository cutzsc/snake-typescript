/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { rgba } from "../Extensions.js";
import { Game } from "../GameBehaviour.js";

export class SnakeGame extends Game {
	protected initialize(): void {
		throw new Error("Method not implemented.");
	}

	protected update(deltaTime: number): void {
		console.log(`updating ${deltaTime}`);
	}

	protected draw(ctx: CanvasRenderingContext2D): void {

		ctx.clearRect(this.clientBounds.x, this.clientBounds.y, this.clientBounds.width, this.clientBounds.height);
		ctx.fillStyle = rgba(0, 0, 0);
		ctx.fillRect(this.clientBounds.x, this.clientBounds.y, this.clientBounds.width, this.clientBounds.height);

		ctx.strokeStyle = "white";

		ctx.beginPath();
		ctx.moveTo(20,20);
		ctx.lineTo(200,20);
		ctx.lineTo(120,120);
		ctx.closePath(); // рисует последнюю линию треугольника
		ctx.stroke();
		ctx.closePath();
	}
}
