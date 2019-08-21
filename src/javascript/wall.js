import Gap from "./gap";

export default class Wall {
    constructor(ctx, x, y, radius, color, rotation) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.time = new Date().getTime();
        this.angle = Math.random() * 360;
        this.rotation = rotation;
        this.endAngle = 2 * Math.PI - 1.2;
        this.gap = new Gap(this.ctx, this.x, this.y, this.radius, this.angle, this.rotation, this.time);
    }

    draw(){
        const newTime = new Date().getTime();
        let diff = newTime - this.time;
        this.time = newTime;
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 8;
        this.ctx.arc(this.x, this.y, this.radius, this.angle, this.endAngle + this.angle, false);
        this.ctx.stroke();
        this.ctx.closePath();
        this.angle += diff * this.rotation;
        this.gap.angle += diff * this.rotation;
        this.angle %= 2 * Math.PI;
        this.gap.angle %= 2 * Math.PI;
    }

    update(){
        if(this.radius > 30) {
            this.radius -= 3;
            this.gap.radius -= 3;
        } 
        this.gap.draw();
        this.draw();
    }
}