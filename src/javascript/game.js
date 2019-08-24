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
        this.score = 0;
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

        const doWallsExist = this.walls.length > 0;
        if(doWallsExist){

            //TODO: we check for collision when the wall is literally ontop of the player
            // maybe find a sweet spot with this.player.radius + 1 or something cause the triangle has
            // a size to it.
            const isWallOnPlayer = this.walls[0].radius <= this.player.radius + this.player.size;
            if (isWallOnPlayer){
                this.checkCollision(this.player, this.walls[0].gap);
                // console.log(this.walls[0].angle);
            }
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

    updateScore(){
        this.score += 1;
    }

    checkCollision(player, gap){
        let collision = false;
        let gapPos = gap.getPosition();
        let playerAngle = player.getPosition() * Math.PI / 180;
        let endAngle = gap.angle - (2 * Math.PI - gap.partialCircleAngle);
        if (endAngle < 0) {
            endAngle += 2*Math.PI;
        }

        // if(playerPos > gapPos[start] && playerPos < gapPos[end]) collision = true;

        // the case when the gap straddles the horizontal

        if (gap.angle < endAngle){
            if ((playerAngle  > endAngle 
                && playerAngle < 2 * Math.PI) 
                || playerAngle < gap.angle && playerAngle > 0){
                collision = true;
            }
        }

        if (playerAngle < gap.angle &&
            playerAngle > endAngle) {
                collision = true;
            }

        if(collision === true){
            // this.ctx.strokeStyle = 'blue'
            // this.ctx.strokeRect(DIM_X / 2 - 25, DIM_Y / 2 - 25, 50, 50)
            this.updateScore();
            console.log(this.score);
        }
    }
}