import Game from './game';

export default class GameView {
    constructor(canvas, ctx) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.game = new Game(this.canvas, this.ctx);
    }


    animate() {
        this.game.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    }
}