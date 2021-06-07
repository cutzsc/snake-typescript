import { GameInfo } from "../GameInfo.js";
import { Vector2 } from "../LinearAlgebra.js";
export const LevelInfo = {
    SNAKE_SPEED: 500,
    FIELD_WIDTH: 30,
    FIELD_HEIGHT: 25,
    SNAKE_BODY_PADDING: 2,
    INITIAL_SNAKE_SIZE: 3,
    SNAKE_COLOR: "rgba(255, 255, 255, 255)",
    getCellSize() {
        return new Vector2(GameInfo.CLIENT_WIDTH / LevelInfo.FIELD_WIDTH, GameInfo.CLIENT_HEIGHT / LevelInfo.FIELD_HEIGHT);
    }
};
