export default class Player {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.playerPos = "left";
        this.draw = this.draw.bind(this);
    }

    draw() {
        switch (this.playerPos) {
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
                this.ctx.lineTo(this.canvas.width / 2 + 30, this.canvas.height / 2 - 5);
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
        e.preventDefault();
        switch (e.key) {
            case 'ArrowUp':
                this.playerPos = "up";
                break;
            case 'ArrowDown':
                this.playerPos = "down";
                break;
            case 'ArrowLeft':
                this.playerPos = "left";
                break;
            case 'ArrowRight':
                this.playerPos = "right";
                break;
        }
    }

}
