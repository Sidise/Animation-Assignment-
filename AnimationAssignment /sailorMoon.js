class sailorMoon {
    constructor(game) {
        this.game = game;
        this.animator = new animator(ASSET_MANAGER.getAsset("./sailorMoon.png"), 0, 0, 52, 108, 6, 0.2);

    };

    update(){
    };
    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, 25, 25);


    };
    
  
}