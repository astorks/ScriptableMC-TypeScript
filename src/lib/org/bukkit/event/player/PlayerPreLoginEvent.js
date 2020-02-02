export default class PlayerPreLoginEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerPreLoginEvent');
    }
    constructor(...args) {
        return new PlayerPreLoginEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerPreLoginEvent.$javaClass.getHandlerList(...args);
    }
}
