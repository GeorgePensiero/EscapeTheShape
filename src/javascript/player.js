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
       
        const dx = (this.canvas.width / 2) + ((this.radius) * Math.cos(this.angle * Math.PI / 180));
        const dy = (this.canvas.height / 2) + ((this.radius) * Math.sin(this.angle * Math.PI / 180));
        this.angle = this.angle + (this.direction * this.speed);

        if(this.angle < 0) {
            this.angle = 360 - this.angle;
        }
        else if(this.angle > 360){
            this.angle %= 360;
        }
        // this.ctx.save();
        this.ctx.translate(dx, dy);
        this.ctx.rotate(this.angle * Math.PI / 180);
        // this.ctx.restore();
        this.ctx.translate(-dx, -dy);

        this.ctx.beginPath();
        this.ctx.fillStyle = "#FFD700";
        this.ctx.moveTo(dx - this.size, dy - this.size);
        this.ctx.lineTo(dx + this.size, dy);
        this.ctx.lineTo(dx - this.size, dy + this.size);
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.translate(dx, dy);
        this.ctx.rotate(-this.angle * Math.PI / 180);
        this.ctx.translate(-dx, -dy);

        
        // console.log("dx" + dx);
        // console.log("dy" + dy);
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

    getPosition(){
        return this.angle;
    }
}

