

export default class Octagon{
    constructor(ctx, x, y, distance, rotation){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.distance = distance;
        this.rotation = rotation;
        this.numSides = 8;
        this.gapStart;
        this.angle = 30;
        this.gapEnd;
        console.log(this.rotation);
    }

    draw(){

        const cx = 1000 + this.distance;
        const cy = 600 + this.distance;
        this.ctx.beginPath();
        this.ctx.save();
        this.angle = this.angle + this.rotation;
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
        // console.log(this.getGapPosition());
        // console.log(this.distance);
        const start = [(this.x + this.distance * Math.cos(7 * 2 * Math.PI / this.numSides), (this.y + this.distance * Math.sin(7 * 2 * Math.PI / this.numSides)))];
    }

    update(){
        this.distance -= 3;
        this.rotation += 1;
        this.draw();
    }

    getGapPosition(){
        let x1 = this.x + this.distance * Math.cos(7 * 2 * Math.PI / this.numSides);
        let x2 = this.x + this.distance * Math.cos(8 * 2 * Math.PI / this.numSides);
        let y1 = this.y + this.distance * Math.sin(7 * 2 * Math.PI / this.numSides);
        let y2 = this.y + this.distance * Math.sin(8 * 2 * Math.PI / this.numSides)
        position = {
            
        }
    }
}