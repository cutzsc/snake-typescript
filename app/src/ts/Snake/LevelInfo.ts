import { GameInfo } from "../GameInfo.js";
import { Vector2 } from "../LinearAlgebra.js";

export const LevelInfo = {
	SNAKE_SPEED:			100 / 1000, // 1 move per snakeSpeed (seconds)
	FIELD_WIDTH:			30, // Number of cells in width
	FIELD_HEIGHT:			25, // Number of cells in height
	SNAKE_BODY_PADDING:		5 / 100, // Padding (%) for body inside cell
	INITIAL_SNAKE_SIZE:		4,
	SNAKE_COLOR:			"rgba(255, 255, 255, 255)",

	getCellSize(): Vector2 {
		return new Vector2(GameInfo.CLIENT_WIDTH / this.FIELD_WIDTH, GameInfo.CLIENT_HEIGHT / this.FIELD_HEIGHT);
	},

	getSnakeBodyPadding(): Vector2 {
		return this.getCellSize().scale(this.SNAKE_BODY_PADDING);
	}
}