

export default class Gap {
    constructor(ctx, x , y, radius, angle, rotation, time){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius; 
        this.rotation = rotation;
        this.angle = angle;
        this.partialCircleAngle = 2 * Math.PI - 1.2;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.globalAlpha = 0.0;
        this.ctx.lineWidth = 8;
        this.ctx.arc(this.x, this.y, this.radius, this.angle, this.partialCircleAngle + this.angle, true);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.globalAlpha = 1.0;
    }

    update() {
        if (this.radius > 30) {
            this.radius -= 3;
        }
        this.draw();
    }

    getPosition(){
       const position = {
           start: this.angle,
           end: this.partialCircleAngle + this.angle,
       }
       return position;
    }

    getPoint(c1, c2, radius, angle) {
        return [c1 + Math.cos(angle) * radius, c2 + Math.sin(angle) * radius];
    }
}