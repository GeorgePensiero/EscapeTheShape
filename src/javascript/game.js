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
        this.timer = null;
        
    }


    addWall(){
        const rotations = [-.0015, .0015, -.002, .002, -.002, -.003, .003];
        const wall = new Wall(this.ctx, this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2, "#388697", rotations[Math.floor(Math.random() * rotations.length)])
        this.walls.push(wall);
        this.timer = null;
    }

    allWalls(){
        return this.walls;
    }

    


    draw() {
        this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
        const centerX = DIM_X / 2;
        const centerY = DIM_Y / 2;
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "black"
        this.ctx.strokeRect(centerX - 25, centerY - 25, 50, 50);
        this.walls.forEach(wall => {
            wall.update();
            // wall.gap.update();
        })
        this.player.draw(5);
        if(this.walls.length){
            this.checkCollision(this.player, this.walls[0].gap);
        }
        // this.ctx.stroke();
        // this.ctx.closePath();
    }

    update(){
        if(this.walls.length < 8 && this.timer === null){
            this.timer = setTimeout(() => this.addWall(), 1000);
        }
        if (this.walls.length > 0 && this.walls[0].radius < 30) { this.walls.shift()}
        this.draw();
        }

    checkCollision(player, gap){
        let collision = false;
        let gapPos = gap.getPosition();
        let playerPos = player.getPosition();

        if(gap.radius === 55){
            if(playerPos > gapPos[start] && playerPos < gapPos[end]) collision = true;
        }
        if(collision === true){
            this.ctx.strokeStyle = 'blue'
            this.ctx.strokeRect(DIM_X / 2 - 25, DIM_Y / 2 - 25, 50, 50)
        }
    }
}