export default class PlayerChannelEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerChannelEvent');
    }
    constructor(...args) {
        return new PlayerChannelEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerChannelEvent.$javaClass.getHandlerList(...args);
    }
}
