import Player from "./player";
import Wall from "./wall";
import Circle from './circle';
import Sound from './sound';
const DIM_X = 1000;
const DIM_Y = 600;
const COLOR_SCHEME = ["#ffce00", "c9ff00", "#49ff00", "#00ffec", "#00d2ff"]
const colors = [
    "#00bdff",
    "#4d39ce",
    "#088eff",
];
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
        this.bg = "#48639c";
        this.highScore = 0;
        this.speed = [-.001, .001];
        this.themeSong = new Sound("gametheme.mp3");
        this.gameOverSong = new Sound("gameOver.mp3");
        this.gOLoop = true;
    }

    randomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    changeBG() {
        const randomColor = COLOR_SCHEME[Math.floor(Math.random() * COLOR_SCHEME.length)];
        const canvas = document.getElementById("myCanvas");
        this.bg = canvas.style.backgroundColor = randomColor;
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
        const wall = new Wall(this.ctx, this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2, "#223142", this.speed[Math.floor(Math.random() * this.speed.length)])
        this.walls.push(wall);
        this.timer = null;
    }

    increaseDifficulty(){
        let radius;
        if(this.walls.length) { radius = this.walls[0].radius}
        if(this.score === 10 && radius === 47){
            this.increaseSpeed(this.walls);
            
        } else if(this.score === 20 && radius === 47){
            this.increaseSpeed(this.walls);
        } else if(this.score === 30 && radius === 47){
            this.increaseSpeed(this.walls);
        }
        else if(this.score === 40 && radius === 47){
            this.increaseSpeed(this.walls);
        }
        else if (this.score === 50 && radius === 47) {
            this.increaseSpeed(this.walls);
        }
        else if (this.score === 60 && radius === 47) {
            this.increaseSpeed(this.walls);
        }
        else if (this.score === 70 && radius === 47) {
            this.increaseSpeed(this.walls);
        }
        else if (this.score === 80 && radius === 47){
            this.speed = this.speed.map(speed => speed * 10);
        }
        if(this.score > 30){
            this.walls.forEach(wall => {
                wall.reverse();
            });
        }
        }
    

    increaseSpeed(walls){
        this.speed = this.speed.map(speed => speed * 1.2);
    }

    allWalls(){
        return this.walls;
    }

    showScore(){
        this.ctx.beginPath();
        this.ctx.font = "20px Orbitron";
        this.ctx.fillText("Score: " + this.score, this.canvas.width - 100, 30);
        this.ctx.closePath();
    }

    centerText(text, y){
        const measurement = this.ctx.measureText(text);
        const measurementwidth = (this.canvas.width - measurement.width) / 2;
        const x = (this.canvas.width - measurement.width) / 2;
        this.ctx.fillText(text, x, y);
    }
    
    draw() {
        this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
        const centerX = DIM_X / 2;
        const centerY = DIM_Y / 2;
        this.ctx.beginPath();
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "black";
        this.ctx.arc(centerX, centerY, 30, 0, 2 * Math.PI, false);
        this.ctx.stroke();
        this.ctx.closePath();
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
            const isWallOnPlayer = this.walls[0].radius <= this.player.radius + this.player.size + 6 && this.walls[0].radius >= this.player.radius;
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
        this.increaseDifficulty();
        this.draw();
        this.updateScore();
        }

    updateScore(){
        if(this.walls.length){
            if (this.walls[0].radius === 32) { 
                this.score += 1;
                this.changeBG();
            }
        }
        
    }

    checkCollision(player, gap){
        let collision = false;
        let gapPos = gap.getPosition();
        let playerAngle = player.getPosition() * Math.PI / 180;
        let playerLeft = (this.canvas.height / 2) + ((this.radius) * Math.sin(this.angle * Math.PI / 180));
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
        }
        return collision;
    }

    startScreen(){
        let y = this.canvas.height / 2;
        let color = "#CC29336";
        let title = "Escape the Shape";
        let enter = "Press Enter";
        const gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, 0);
        gradient.addColorStop("0", "#C873C8");
        gradient.addColorStop("0.5", "#91D7A1");
        gradient.addColorStop("1.0", "#DDD830");
        this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
        this.ctx.fillStyle = gradient;
        this.ctx.font = "48px Orbitron";
        this.centerText(title, y);
        
        this.ctx.fillStyle = color;
        this.ctx.font = "24px Orbitron";
        this.centerText(enter, y + 30);
        document.addEventListener('keydown', e => this.gameStart(e));
    }

    gameOver() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
        }
        this.themeSong.stop();
        if (this.gOLoop) {
            this.gameOverSong.play();
            this.gOLoop = false;
        }
        const canvas = document.getElementById("myCanvas");
        canvas.style.backgroundColor = ("#48639c");
        const gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, 0);
        gradient.addColorStop("0", "#262224");
        gradient.addColorStop("0.5", "#F1DF0C");
        gradient.addColorStop("1.0", "#F7042C");
        this.walls = [];
        this.speed = [-.001, .001];
        let y = this.canvas.height / 2;
        let color = "#FF0000";
        let title = "Game Over";
        let enter = "Press enter to try again";
        let score = `Score: ${this.score}`;
        let highScore = `High Score: ${this.highScore}`;
        this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
        this.ctx.fillStyle = gradient;
        this.ctx.font = "48px Orbitron";
        this.centerText(title, y + 60);

        this.ctx.font = "48px Orbitron";
        this.centerText(highScore, y - 120);
        this.centerText(score, y - 50);
        this.ctx.font = "24px Orbitron";
        this.centerText(enter, y + 100);
        document.addEventListener('keydown', e => this.gameStart(e));
    }

    gameStart(e){
        e.preventDefault();
        this.gOLoop = true;
        if(e.which === 13 || e.keyCode === 13) {
            this.themeSong.play();
            this.inGame = true;
            this.bg = "#48639c"
            this.dead = false;
            this.score = 0;
        }
    }
}