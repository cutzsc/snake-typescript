import { GameInfo } from "../GameInfo.js";
import { Vector2 } from "../LinearAlgebra.js";
export const LevelInfo = {
    SNAKE_SPEED: 500 / 1000,
    FIELD_WIDTH: 30,
    FIELD_HEIGHT: 25,
    SNAKE_BODY_PADDING: 10 / 100,
    INITIAL_SNAKE_SIZE: 3,
    SNAKE_COLOR: "rgba(255, 255, 255, 255)",
    getCellSize() {
        return new Vector2(GameInfo.CLIENT_WIDTH / this.FIELD_WIDTH, GameInfo.CLIENT_HEIGHT / this.FIELD_HEIGHT);
    },
    getSnakeBodyPadding() {
        return this.getCellSize().scale(this.SNAKE_BODY_PADDING);
    }
};
