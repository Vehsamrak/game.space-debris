/// <reference path="../../lib/phaser.d.ts"/>

class Game {
    game: Phaser.Game;
    private ship: Phaser.Sprite;
    private cursors: Phaser.CursorKeys;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
            preload: this.preload,
            create: this.create,
            update: this.update,
            render: this.render,
        });
    }

    preload() {
        this.game.load.image('ship1', 'img/ship1.png');
    }
    create() {
        this.game.stage.backgroundColor = '#020F14';
        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.ship = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'ship1');
        this.ship.anchor.setTo(0.5, 0.5);

        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.enable(this.ship);

        this.ship.body.fixedRotation = true;

        this.game.camera.follow(this.ship, Phaser.Camera.FOLLOW_LOCKON);
    }

    update() {
        this.ship.body.setZeroVelocity();

        if (this.game.input.mousePointer.isDown) {
            this.ship.rotation = this.game.physics.arcade.angleToPointer(this.ship) + 1.6;
            this.game.physics.arcade.moveToPointer(this.ship, 100);
        }
    }

    render() {
        this.game.debug.spriteInfo(this.ship, 32, 32);
    }
}

window.onload = () => {
    new Game();
};
