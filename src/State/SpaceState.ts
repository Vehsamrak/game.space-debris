class SpaceState {
    private game: Phaser.Game;
    private ship: Phaser.Sprite;
    private shipState: ShipState;
    private cursors: Phaser.CursorKeys;
    private service: ServiceLocator;

    constructor(game: Game) {
        this.game = game;
        this.service = new ServiceLocator(game);
    }

    preload() {
        this.game.load.atlasJSONHash('ship1', 'img/ships/ship1.png', 'img/ships/ship1.json');
        this.game.load.image('star', 'img/star.png');
        this.game.load.image('button', 'img/button.png');
    }

    create() {
        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.ship = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'ship1', 'stand');
        this.ship.animations.add('move', [0, 1, 2, 3, 4]);

        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.enable(this.ship);

        this.ship.body.fixedRotation = true;

        this.game.camera.follow(this.ship, Phaser.Camera.FOLLOW_LOCKON);

        this.game.input.onDown.add(function () {
            this.game.scale.startFullScreen(false);
        }, this);

        let mapService: MapService = this.service.get('map');
        mapService.createStar();

        let button = this.game.add.button(20, window.screen.height - 150, 'button', this.shakeCamera, this, 2, 1, 0);
        button.fixedToCamera = true;
    }

    update() {
        this.ship.body.setZeroVelocity();
        let shipDistanceFromPointer = this.game.physics.arcade.distanceToPointer(this.ship);

        if (this.game.input.activePointer.isDown && shipDistanceFromPointer > 60) {
            this.game.physics.arcade.moveToPointer(this.ship, 100);
            this.ship.rotation = this.game.physics.arcade.angleToPointer(this.ship) + 1.6;
            this.runMovingShipAnimation();
        } else {
            this.shipState = ShipState.STAND;
            this.ship.frameName = ShipState.STAND;
        }
    }

    render() {
        // this.game.debug.spriteInfo(this.ship, 32, 32);
    }

    private runMovingShipAnimation() {
        if (this.shipState === ShipState.STAND) {
            this.ship.animations.play('move', 15, true);
            this.shipState = ShipState.MOVE;
        }
    }

    private shakeCamera() {
        this.game.camera.shake(0.05, 500);
    }
}
