/// <reference path="../lib/phaser.d.ts"/>

class Application {
    game: Phaser.Game;
    private ship: Phaser.Sprite;
    private cursors: Phaser.CursorKeys;
    private service: ServiceLocator;

    update() {
        this.ship.body.setZeroVelocity();
        let shipDistanceFromPointer = this.game.physics.arcade.distanceToPointer(this.ship);

        if (this.game.input.activePointer.isDown && shipDistanceFromPointer > 50) {
            this.game.physics.arcade.moveToPointer(this.ship, 100);
            this.ship.rotation = this.game.physics.arcade.angleToPointer(this.ship) + 1.6;
        }
    }

    render() {
        this.game.debug.spriteInfo(this.ship, 32, 32);
    }
}

window.onload = () => {
    var game = new Phaser.Game(800, 600, Phaser.AUTO);
    game.state.add('boot', new BootState(game));
    game.state.start('boot');
};
