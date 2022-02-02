class animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
        Object.assign(this, { spritesheet, xStart, yStart, height, width, frameCount });

        this.elapsedTime = 0;
        this.totalTime = this.frameCount * this.frameDuration;

    };

    drawFrame(tick, ctx, x, y) {
        this.elapsedTime += tick;
        const frame = this.currentFrame();
        
        ctx.drawImage(this.spritesheet,
            this.xStart + this.width + frame,this.yStart,
            this.width,this.height,
            X,Y,
            this.width,this.height);
            
        };


        
    

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };
};