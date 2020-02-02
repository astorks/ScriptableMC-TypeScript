export default class PlayerPickupItemEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerPickupItemEvent');
    }
    constructor(...args) {
        return new PlayerPickupItemEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerPickupItemEvent.$javaClass.getHandlerList(...args);
    }
}
