/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Rect } from "../LinearAlgebra.js";
import { rgba } from "../Extensions.js";
import { Game } from "../GameBehaviour.js";
import { input } from "../Input.js";
import { Entity } from "./Entity.js";
import { Snake } from "./Snake.js";
import { Food } from "./Food.js";

export class SnakeGame extends Game {
	
	private entities: Entity[] = [];

	protected initialize(): void {
		this.entities = [];
		this.entities.push(new Snake());
		this.entities.push(new Food());

		for (let i = 0; i < this.entities.length; i++) {
			this.entities[i].initilize();
		}
	}

	protected update(deltaTime: number): void {
		for (let i = 0; i < this.entities.length; i++) {
			this.entities[i].update(deltaTime);
		}
	}

	protected draw(ctx: CanvasRenderingContext2D): void {
		this.clear(ctx, rgba(0, 0, 0));
		
		for (let i = 0; i < this.entities.length; i++) {
			this.entities[i].draw(ctx);
		}
	}

	private clear(ctx: CanvasRenderingContext2D, color: string) {
		ctx.fillStyle = color;
		ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}
}
