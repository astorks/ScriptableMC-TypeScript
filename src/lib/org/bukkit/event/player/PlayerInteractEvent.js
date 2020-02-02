export default class PlayerInteractEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerInteractEvent');
    }
    constructor(...args) {
        return new PlayerInteractEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerInteractEvent.$javaClass.getHandlerList(...args);
    }
}
