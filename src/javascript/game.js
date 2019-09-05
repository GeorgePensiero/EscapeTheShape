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
        this.inGame = false;
        this.dead = false;
    }

    init(){
        if(!this.inGame){
            this.startScreen();
        } else if(this.inGame && !this.dead){
            document.removeEventListener('keydown', e => this.gameStart(e));
            this.run();
        } else {
            this.gameOver();
        }
    }


    addWall(){
       const slowRotations = [-.001, .001];
       const medRotations = [-.002, .002];
       const fastRotations = [-.003, .003];
       if (this.score < 10){
        const wall = new Wall(this.ctx, this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2, "#388697", slowRotations[Math.floor(Math.random() * slowRotations.length)])
        this.walls.push(wall);
        this.timer = null;
       } else if (this.score < 20){
            const wall = new Wall(this.ctx, this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2, "#388697", medRotations[Math.floor(Math.random() * medRotations.length)])
            this.walls.push(wall);
            this.timer = null;
       } else {
            const wall = new Wall(this.ctx, this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2, "#388697", fastRotations[Math.floor(Math.random() * fastRotations.length)])
            this.walls.push(wall);
            this.timer = null;
       }
    }

    allWalls(){
        return this.walls;
    }

    showScore(){
        this.ctx.beginPath();
        this.ctx.font = "20px Georgia";
        this.ctx.fillText("Score: " + this.score, this.canvas.width - 100, 30);
        this.ctx.closePath();
    }

    centerText(text, y){
        const measurement = this.ctx.measureText(text);
        const x = (this.canvas.width - measurement.width) / 2;
        this.ctx.fillText(text, x, y);
    }
    
    draw() {
        this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
        const centerX = DIM_X / 2;
        const centerY = DIM_Y / 2;
        // this.ctx.beginPath();
        // this.ctx.lineWidth = 1;
        // this.ctx.strokeStyle = "black"
        // // this.ctx.arc(centerX, centerY, 30, 0, 2 * Math.PI, false);
        // this.ctx.stroke();
        // this.ctx.closePath();
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
            const isWallOnPlayer = this.walls[0].radius <= this.player.radius + this.player.size && this.walls[0].radius >= this.player.radius + this.player.size - 1;
            if (isWallOnPlayer){
                if(!this.checkCollision(this.player, this.walls[0].gap)){
                    this.dead = true;
                };
                // console.log(this.walls[0].angle);
            }
        }
        this.showScore();
        // this.ctx.stroke();
        // this.ctx.closePath();
    }

    run(){
        const wallSpace = 1000;
        if(this.walls.length < 8 && this.timer === null){
            this.timer = setTimeout(() => this.addWall(), wallSpace);
        }
        if (this.walls.length > 0 && this.walls[0].radius < 30) { this.walls.shift()}
        this.draw();
        }

    updateScore(){
        this.score += 1;
    }

    gameOver(){
        this.walls = [];
        let y = this.canvas.height / 2;
        let color = "#FF0000";
        let title = "Game Over";
        let enter = "Try again";
        let score = `Score: ${this.score}`;
        this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
        this.ctx.fillStyle = color;
        this.ctx.font = "48px monospace";
        this.centerText(title, y + 30);
        
        this.ctx.font = "24px monospace";
        this.centerText(score, y);
        this.ctx.fillStyle = color;
        this.ctx.font = "24px monospace";
        this.centerText(enter, y + 60);

        document.addEventListener('keydown', e => this.gameStart(e));
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
        }
        return collision;
    }

    startScreen(){
        let y = this.canvas.height / 2;
        let color = "#CC29336";
        let title = "Escape the Shape";
        let enter = "Press Enter";
        // let enterLength = this.ctx.measureText(enter);
        // let titleLength = this.ctx.measureText(title);
        // let enterX = (this.canvas.width - enterLength.width) / 2;
        // let x = (this.canvas.width - titleLength.width) / 2;
        this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
        this.ctx.fillStyle = "white";
        this.ctx.font = "48px monospace";
        this.centerText(title, y);
        
        this.ctx.fillStyle = color;
        this.ctx.font = "24px monospace";
        this.centerText(enter, y + 30);
        document.addEventListener('keydown', e => this.gameStart(e));
    }

    gameStart(e){
        e.preventDefault();
        if(e.which === 13 || e.keyCode === 13) {
            this.inGame = true;
            this.dead = false;
            this.score = 0;
        }
    }
}