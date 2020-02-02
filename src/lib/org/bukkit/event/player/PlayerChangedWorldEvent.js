export default class PlayerChangedWorldEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerChangedWorldEvent');
    }
    constructor(...args) {
        return new PlayerChangedWorldEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerChangedWorldEvent.$javaClass.getHandlerList(...args);
    }
}
