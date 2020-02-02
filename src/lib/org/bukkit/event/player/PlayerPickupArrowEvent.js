export default class PlayerPickupArrowEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerPickupArrowEvent');
    }
    constructor(...args) {
        return new PlayerPickupArrowEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerPickupArrowEvent.$javaClass.getHandlerList(...args);
    }
}
