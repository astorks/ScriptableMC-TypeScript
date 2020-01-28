export class PlayerTakeLecternBookEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerTakeLecternBookEvent');
    }
    constructor(...args) {
        return new PlayerTakeLecternBookEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerTakeLecternBookEvent.$javaClass.getHandlerList(...args);
    }
}
//# sourceMappingURL=PlayerTakeLecternBookEvent.js.map