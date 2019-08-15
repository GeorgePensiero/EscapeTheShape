

export default class Player { 
    constructor(canvas, size, ctx) {
        this.canvas = canvas;
        this.size = size;
        this.ctx = ctx;
        this.playerPos = "left";
        
    }

    draw(){
        switch(this.playerPos){
            case "left":
                this.ctx.beginPath();
                this.ctx.moveTo(this.canvas.width / 2 - 30, this.canvas.height / 2 + 5);
                this.ctx.lineTo(this.canvas.width / 2 - 40, this.canvas.height / 2);
                this.ctx.lineTo(this.canvas.width / 2 - 30, this.canvas.height / 2 - 5);
                this.ctx.fill();
                break;
            case "up":
                this.ctx.beginPath();
                this.ctx.moveTo(this.canvas.width / 2 - 5, this.canvas.height / 2 - 30);
                this.ctx.lineTo(this.canvas.width / 2, this.canvas.height / 2 - 40);
                this.ctx.lineTo(this.canvas.width / 2 + 5, this.canvas.height / 2 - 30);
                this.ctx.fill();
                break;
            case "right":
                this.ctx.beginPath();
                this.ctx.moveTo(this.canvas.width / 2 + 30, this.canvas.height / 2 + 5);
                this.ctx.lineTo(this.canvas.width / 2 + 40, this.canvas.height / 2);
                this.ctx.lineTo(this.canvas.width / 2 +30, this.canvas.height / 2 - 5);
                this.ctx.fill();
                break;
            case "down":
                this.ctx.beginPath();
                this.ctx.moveTo(this.canvas.width / 2 - 5, this.canvas.height / 2 + 30);
                this.ctx.lineTo(this.canvas.width / 2, this.canvas.height / 2 + 40);
                this.ctx.lineTo(this.canvas.width / 2 + 5, this.canvas.height / 2 + 30);
                this.ctx.fill();
                break;
            default: 
                return null;
        }
    }

    handlePress(e) {
    switch (e.key) {
        case 'ArrowUp':
            this.player.playerPos = "up";
            break;
        case 'ArrowDown':
            this.player.playerPos = "down";
            break;
        case 'ArrowLeft':
            this.player.playerPos = "left";
            break;
        case 'ArrowRight':
            this.player.playerPos = "right";
            break;
    }
    }
}
