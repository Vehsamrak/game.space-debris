class BootState {
    private game: Phaser.Game;

    constructor(game: Game) {
        this.game = game;
    }

    create() {
        this.game.world.setBounds(0, 0, 1000, 1000);
        this.game.stage.backgroundColor = '#020F14';
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.RESIZE;

        this.game.state.add('space', new SpaceState(this.game));
        this.game.state.start('space');
    }
}
