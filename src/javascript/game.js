import Player from "./player";

const DIM_X = 1000;
const DIM_Y = 600;

export default class Game {
    constructor(canvas, ctx) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.player = new Player(this.canvas, this.ctx)
    }






    draw() {
        this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
        const centerX = DIM_X / 2;
        const centerY = DIM_Y / 2;
        this.ctx.strokeRect(centerX - 25, centerY - 25, 50, 50);
        this.ctx.stroke();

        this.player.draw();
    }
}