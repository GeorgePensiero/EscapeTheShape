export default class Player {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.size = 5;
        this.radius = 55;
        this.speed = 7;
        this.direction = 0;
        this.angle = 30;
        this.playerPos = "left";
        this.draw = this.draw.bind(this);
    }

    draw() {
        // switch (this.playerPos) {
        //     case "left":
        //         this.ctx.beginPath();
        //         this.ctx.moveTo(this.canvas.width / 2 - 30, this.canvas.height / 2 + 5);
        //         this.ctx.lineTo(this.canvas.width / 2 - 40, this.canvas.height / 2);
        //         this.ctx.lineTo(this.canvas.width / 2 - 30, this.canvas.height / 2 - 5);
        //         this.ctx.fill();
        //         break;
        //     case "up":
        //         this.ctx.beginPath();
        //         this.ctx.moveTo(this.canvas.width / 2 - 5, this.canvas.height / 2 - 30);
        //         this.ctx.lineTo(this.canvas.width / 2, this.canvas.height / 2 - 40);
        //         this.ctx.lineTo(this.canvas.width / 2 + 5, this.canvas.height / 2 - 30);
        //         this.ctx.fill();
        //         break;
        //     case "right":
        //         this.ctx.beginPath();
        //         this.ctx.moveTo(this.canvas.width / 2 + 30, this.canvas.height / 2 + 5);
        //         this.ctx.lineTo(this.canvas.width / 2 + 40, this.canvas.height / 2);
        //         this.ctx.lineTo(this.canvas.width / 2 + 30, this.canvas.height / 2 - 5);
        //         this.ctx.fill();
        //         break;
        //     case "down":
        //         this.ctx.beginPath();
        //         this.ctx.moveTo(this.canvas.width / 2 - 5, this.canvas.height / 2 + 30);
        //         this.ctx.lineTo(this.canvas.width / 2, this.canvas.height / 2 + 40);
        //         this.ctx.lineTo(this.canvas.width / 2 + 5, this.canvas.height / 2 + 30);
        //         this.ctx.fill();
        //         break;
        //     default:
        //         return null;
        const dx = (this.canvas.width / 2) + ((this.radius) * Math.cos(this.angle * Math.PI / 180));
        const dy = (this.canvas.height / 2) + ((this.radius) * Math.sin(this.angle * Math.PI / 180));
        this.angle = this.angle + (this.direction * this.speed);

        if(this.angle < 0) {
            this.angle = 360 - this.angle;
        }
        else if(this.angle > 360){
            this.angle %= 360;
        }
        this.ctx.save();
        this.ctx.translate(dx, dy);
        this.ctx.rotate(this.angle * Math.PI / 180);
        this.ctx.restore();

        this.ctx.beginPath();
        this.ctx.moveTo(dx - this.size, dy - this.size);
        this.ctx.lineTo(dx + this.size, dy);
        this.ctx.lineTo(dx - this.size, dy + this.size);
        this.ctx.closePath();

        this.ctx.fill();

        
    }
    handlePress(e) {
        e.preventDefault();
        switch (e.key) {
            // case 'ArrowUp':
            //     this.playerPos = "up";
            //     break;
            // case 'ArrowDown':
            //     this.playerPos = "down";
            //     break;
            case 'ArrowLeft':
                this.direction = -1;
                break;
            case 'ArrowRight':
                this.direction = 1;
                break;
        }
    }

    handleKeyUp(e){
        this.direction = 0;
    }
}

