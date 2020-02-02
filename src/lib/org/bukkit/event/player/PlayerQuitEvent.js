export default class PlayerQuitEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerQuitEvent');
    }
    constructor(...args) {
        return new PlayerQuitEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerQuitEvent.$javaClass.getHandlerList(...args);
    }
}
