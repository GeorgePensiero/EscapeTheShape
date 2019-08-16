import Player from "./player";
import Wall from "./wall";

const DIM_X = 1000;
const DIM_Y = 600;
const COLOR_SCHEME = ["#CC29336", "EBBAB9", "#388697", "#BFFFE1"]
export default class Game {
    constructor(canvas, ctx) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.player = new Player(this.canvas, this.ctx)
        this.walls = [];
    }


    addWall(){
        const wall = new Wall(this.ctx, this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2, COLOR_SCHEME[Math.floor(Math.random() * COLOR_SCHEME.length)])
        this.walls.push(wall);
    }

    allWalls(){
        return this.walls;
    }




    draw() {
        this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
        const centerX = DIM_X / 2;
        const centerY = DIM_Y / 2;
        this.walls.forEach(wall => {
            wall.update();
        })
    
        this.ctx.strokeRect(centerX - 25, centerY - 25, 50, 50);
        this.ctx.stroke();
        
        this.player.draw();
    }

    update(){
        if(this.walls.length < 8){
            setTimeout(this.addWall(), 1000);
        }
        this.draw();
        }
}