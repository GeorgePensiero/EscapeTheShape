
export default class Wall {
    constructor(ctx, x, y, radius, color) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.time = new Date().getTime();
        this.angle = 0;
    }

    draw(){
        const newTime = new Date().getTime();
        let diff = newTime - this.time;
        this.time = newTime;
        this.ctx.beginPath();
        this.ctx.arc(this.x,  this.y, this.radius, 0 + this.angle, 2 * Math.PI - .90 + this.angle, false);
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 8;
        this.ctx.stroke();
        this.angle += diff * 0.001;
        this.angle %= 2 * Math.PI;
    }

    update(){
        if(this.radius > 30) {
            this.radius -= 3;
        } 
        this.draw();
    }
}