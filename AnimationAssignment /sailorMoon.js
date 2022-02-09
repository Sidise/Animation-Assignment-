class sailorMoon {
    constructor(game) {
        this.game = game;
        this.animator = new animator(ASSET_MANAGER.getAsset("./sailorMoon.png"), 0, 0, 200, 169, 6, 0.2);
        this.spritesheet = (ASSET_MANAGER.getAsset("./sailorMoon.png"));
        this.xStart = 0;
        this.yStart = 0;
        this.width = 200;
        this.height = 169;
    };

    update() {
        this.animator.drawFrame(this.game.clockTick, this.game.ctx, 200, 200);
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 200, 200);
    };
}