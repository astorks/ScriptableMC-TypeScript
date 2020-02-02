export default class PlayerItemHeldEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerItemHeldEvent');
    }
    constructor(...args) {
        return new PlayerItemHeldEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerItemHeldEvent.$javaClass.getHandlerList(...args);
    }
}
