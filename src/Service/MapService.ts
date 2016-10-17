import Game = Phaser.Game;

class MapService {
    private game: Game;
    private starsNumber: number;
    private brimBounds: number = 500;

    constructor(game: Phaser.Game) {
        this.game = game;
        this.starsNumber = (game.world.height + game.world.width) / 40;
    }

    createStar(): void {
        this.game.rnd.sow(['space']);

        for (let i = 0; i < this.starsNumber; i++) {
            let x = this.game.rnd.integerInRange(- this.brimBounds, this.game.world.width + this.brimBounds);
            let y = this.game.rnd.integerInRange(- this.brimBounds, this.game.world.height + this.brimBounds);

            let star = this.game.add.sprite(x, y, 'star');

            let starSize = this.game.rnd.realInRange(0.1, 0.5);
            star.scale.setTo(starSize, starSize);
            star.moveDown();
        }
    }
}
