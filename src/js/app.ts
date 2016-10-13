/// <reference path="../../lib/phaser.d.ts"/>

class SimpleGame {
    game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {preload: this.preload, create: this.create});
    }

    preload() {
    }

    create() {
        this.game.stage.backgroundColor = "#020F14";
    }
}

window.onload = () => {
    new SimpleGame();
};
