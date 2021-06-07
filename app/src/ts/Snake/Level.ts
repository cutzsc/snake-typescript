import { GameInfo } from "../GameInfo.js";
import { Vector2 } from "../LinearAlgebra.js";

export const LevelInfo = {
	SNAKE_SPEED:			500, // 1 move per snakeSpeed (milliseconds)
	FIELD_WIDTH:			30, // Number of cells in width
	FIELD_HEIGHT:			25, // Number of cells in height
	SNAKE_BODY_PADDING:		2, // Padding for body inside cell
	INITIAL_SNAKE_SIZE:		3,
	SNAKE_COLOR:			"rgba(255, 255, 255, 255)",

	getCellSize(): Vector2 {
		return new Vector2(GameInfo.CLIENT_WIDTH / LevelInfo.FIELD_WIDTH, GameInfo.CLIENT_HEIGHT / LevelInfo.FIELD_HEIGHT);
	}
}
