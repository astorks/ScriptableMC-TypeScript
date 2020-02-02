export default class PlayerUnregisterChannelEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerUnregisterChannelEvent');
    }
    constructor(...args) {
        return new PlayerUnregisterChannelEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerUnregisterChannelEvent.$javaClass.getHandlerList(...args);
    }
}
