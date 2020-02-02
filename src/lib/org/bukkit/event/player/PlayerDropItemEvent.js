export default class PlayerDropItemEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerDropItemEvent');
    }
    constructor(...args) {
        return new PlayerDropItemEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerDropItemEvent.$javaClass.getHandlerList(...args);
    }
}
