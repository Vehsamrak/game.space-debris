/**
 * @author Vehsamrak
 */

class AbstractSpaceShip implements SpaceShip {
    private sprite: Phaser.Sprite;

    constructor(sprite: Phaser.Sprite) {
        this.sprite = sprite;
    }

    getSprite(): Phaser.Sprite {
        return this.sprite;
    }

    getShipLength(): number {
        return 0;
    }

    getImageName(): string {
        return '';
    }
}
