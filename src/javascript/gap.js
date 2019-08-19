

export default class Gap {
    constructor(ctx, x , y, radius, angle, rotation){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius; 
        this.rotation = rotation;
        this.angle = angle;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0 + this.angle, 2 * Math.PI - 1.2 + this.angle, true);
        this.ctx.strokeStyle = "#48639c"
        this.ctx.lineWidth = 8;
        this.ctx.stroke();
        this.ctx.closePath();
    }

    update() {
        if (this.radius > 30) {
            this.radius -= 3;
        }
        this.draw();
    }
}