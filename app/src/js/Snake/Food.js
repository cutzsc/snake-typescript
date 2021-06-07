import { rangeInt, rgba } from "../Extensions.js";
import { Vector2 } from "../LinearAlgebra.js";
import { Entity } from "./Entity.js";
import { LevelInfo } from "./LevelInfo.js";
export class Food extends Entity {
    position = Vector2.zero();
    cellSize;
    initilize() {
        this.cellSize = LevelInfo.getCellSize();
        this.nextPosition();
    }
    update(deltaTime) {
        // focking eslint
        {
            deltaTime;
        }
    }
    draw(ctx) {
        ctx.fillStyle = rgba(200, 30, 30);
        ctx.fillRect(this.position.x * this.cellSize.x, this.position.y * this.cellSize.y, this.cellSize.x, this.cellSize.y);
    }
    nextPosition() {
        // TODO: res food where no snake
        this.position.x = rangeInt(0, LevelInfo.FIELD_WIDTH - 1);
        this.position.y = rangeInt(0, LevelInfo.FIELD_HEIGHT - 1);
    }
}
