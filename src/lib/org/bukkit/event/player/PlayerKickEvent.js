export default class PlayerKickEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerKickEvent');
    }
    constructor(...args) {
        return new PlayerKickEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerKickEvent.$javaClass.getHandlerList(...args);
    }
}
