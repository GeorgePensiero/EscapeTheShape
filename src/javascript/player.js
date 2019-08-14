

export default class Player { 
    constructor(canvas, size, radius, speed) {
        this.canvas = canvas;
        this.size = size || 5;
        this.radius = radius || 50;
        this.speed = speed || 4;
        this.direction = 0;
        this.angle = 30;
    }

    draw(offset){
        const ctx = this.canvas.getContext('2d')
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
    }

    
}