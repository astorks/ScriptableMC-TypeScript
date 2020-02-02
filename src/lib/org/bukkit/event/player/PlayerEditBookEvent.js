export default class PlayerEditBookEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerEditBookEvent');
    }
    constructor(...args) {
        return new PlayerEditBookEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerEditBookEvent.$javaClass.getHandlerList(...args);
    }
}
