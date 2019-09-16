



export default class Circle {
    constructor(x, y, radius, color, ctx){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.radians = Math.random() * Math.PI * 2;
        this.velocity = 0.05;
        this.distanceFromCenter = this.randomIntFromRange(0, 30);
        this.ctx = ctx;
        this.particles = [];
    }

   

    update(){
        const previousPoint = {x: this.x, y: this.y};
        // Move points over time
        this.radians += this.velocity;
        this.x = this.x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = this.y + Math.sin(this.radians) * this.distanceFromCenter;
        this.draw(previousPoint);
    }

    draw(previousPoint){
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = this.radius;
        this.ctx.moveTo(previousPoint.x, previousPoint.y);
        this.ctx.lineTo(this.x, this.y);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    init(){
        for(let i = 0; i < 50; i++){
            const radius = (Math.random() * 2) + 1;
            this.particles.push(new Circle(500, 300, radius, this.randomColor(colors), ctx))
        }
    }

    animate(){
        this.particles.forEach(particle => {
            particle.update();
        });
    }

    randomIntFromRange(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}