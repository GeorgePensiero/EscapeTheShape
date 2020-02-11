

export default class Hexagon{
    constructor(ctx, x, y, distance){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.distance = distance;
        this.numSides = 6;
        this.angle = Math.floor(Math.random() * 360);
    }

    draw(){

        const cx = 1000 + this.distance;
        const cy = 600 + this.distance;
        this.ctx.beginPath();
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate((this.angle) * Math.PI / 180);
        this.ctx.translate(-this.x, -this.y);
        this.ctx.moveTo(this.x + this.distance * Math.cos(0), this.y + this.distance * Math.sin(0));
        this.ctx.strokeStyle = "#388697";
        for(let i = 1; i < this.numSides; i++){
            this.ctx.lineTo(this.x + this.distance * Math.cos(i * 2 * Math.PI / this.numSides), this.y + this.distance * Math.sin(i * 2 * Math.PI / this.numSides));
        }
        this.ctx.stroke();
        
        this.ctx.lineWidth = 30;
        this.ctx.stroke();
        this.ctx.restore();
        this.ctx.closePath();
        
        // const start = [(this.x + this.distance * Math.cos(7 * 2 * Math.PI / this.numSides), (this.y + this.distance * Math.sin(7 * 2 * Math.PI / this.numSides)))];
    }

    update(){
        this.distance -= 3;
        this.draw();
    }

    
}