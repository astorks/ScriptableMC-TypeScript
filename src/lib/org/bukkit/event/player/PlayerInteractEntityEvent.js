export default class PlayerInteractEntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerInteractEntityEvent');
    }
    constructor(...args) {
        return new PlayerInteractEntityEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerInteractEntityEvent.$javaClass.getHandlerList(...args);
    }
}
