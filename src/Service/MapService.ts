import Game = Phaser.Game;

class MapService {
    private game: Game;
    private starsNumber: number = 30;
    private brimBounds: number = 500;

    constructor(game: Phaser.Game) {
        this.game = game;
    }

    createStar(): void {
        for (let i = 0; i < this.starsNumber; i++) {
            let x = this.game.rnd.integerInRange(- this.brimBounds, this.game.world.width + this.brimBounds);
            let y = this.game.rnd.integerInRange(- this.brimBounds, this.game.world.height + this.brimBounds);
            this.game.add.sprite(x, y, 'star');
        }
    }
}
