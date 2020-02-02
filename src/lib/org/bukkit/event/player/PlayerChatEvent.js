export default class PlayerChatEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerChatEvent');
    }
    constructor(...args) {
        return new PlayerChatEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerChatEvent.$javaClass.getHandlerList(...args);
    }
}
