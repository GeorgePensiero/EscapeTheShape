export default class GameView { 
    constructor(canvas, game, ctx){
        this.game = game;
        this.ctx = ctx;
        this.canvas = canvas;
    }


    animate(){
        this.game.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    }
}