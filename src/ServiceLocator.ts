class ServiceLocator {
    private game: Game;
    public map: MapService;
    public application: Application = new Application();

    constructor(game: Phaser.Game) {
        this.game = game;
        this.map = new MapService(game);
    }

    get(serviceName: string) {
        if(serviceName in this) {
            return this[serviceName];
        }
    }
}
