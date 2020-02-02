export default class PlayerJoinEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerJoinEvent');
    }
    constructor(...args) {
        return new PlayerJoinEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerJoinEvent.$javaClass.getHandlerList(...args);
    }
}
