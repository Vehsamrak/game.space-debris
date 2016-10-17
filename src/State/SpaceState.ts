class SpaceState {
    private game: Phaser.Game;
    private ship: Phaser.Sprite;
    private cursors: Phaser.CursorKeys;
    private service: ServiceLocator;

    constructor(game: Game) {
        this.game = game;
        this.service = new ServiceLocator(game);
    }

    preload() {
        // this.game.load.image('ship1', 'img/shipsship1.png');
        this.game.load.atlasJSONHash('ship1', 'img/ships/ship1.png', 'img/ships/ship1.json');
        this.game.load.image('star', 'img/star.png');
    }

    create() {
        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.ship = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'ship1', 'stand');

        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.enable(this.ship);

        this.ship.body.fixedRotation = true;

        this.game.camera.follow(this.ship, Phaser.Camera.FOLLOW_LOCKON);

        this.game.input.onDown.add(function () {
            this.game.scale.startFullScreen(false);
        }, this);

        let mapService: MapService = this.service.get('map');
        mapService.createStar();
    }

    update() {
        this.ship.body.setZeroVelocity();
        let shipDistanceFromPointer = this.game.physics.arcade.distanceToPointer(this.ship);

        if (this.game.input.activePointer.isDown && shipDistanceFromPointer > 50) {
            this.ship.frameName = ShipState.MOVE;
            this.game.physics.arcade.moveToPointer(this.ship, 100);
            this.ship.rotation = this.game.physics.arcade.angleToPointer(this.ship) + 1.6;
        } else {
            this.ship.frameName = ShipState.STAND;
        }
    }

    render() {
        this.game.debug.spriteInfo(this.ship, 32, 32);
    }
}
