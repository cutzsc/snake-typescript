"use strict";
var App;
(function (App) {
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");
    const clientBounds = {
        width: 500,
        height: 400
    };
    canvas.width = clientBounds.width;
    canvas.height = clientBounds.height;
    const game = null;
    game.update(1);
    game.draw(ctx);
})(App || (App = {}));
