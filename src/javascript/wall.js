
export default class Wall {
    constructor(ctx, x, y, radius, color) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.x,  this.y, this.radius, 0, 2 * Math.PI - .90, false);
        this.ctx.strokeStyle = this.color;
        this.ctx.stroke();
    }

    update(){
        if(this.radius > 30) {
            this.radius -= 3;
        } else {
            this.radius = 500;
        }
        this.draw();
    }
}