export default class PlayerItemMendEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerItemMendEvent');
    }
    constructor(...args) {
        return new PlayerItemMendEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerItemMendEvent.$javaClass.getHandlerList(...args);
    }
}
