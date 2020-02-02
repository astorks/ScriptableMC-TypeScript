export default class PlayerRegisterChannelEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerRegisterChannelEvent');
    }
    constructor(...args) {
        return new PlayerRegisterChannelEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerRegisterChannelEvent.$javaClass.getHandlerList(...args);
    }
}
