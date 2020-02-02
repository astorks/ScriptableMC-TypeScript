export default class PlayerChatTabCompleteEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerChatTabCompleteEvent');
    }
    constructor(...args) {
        return new PlayerChatTabCompleteEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerChatTabCompleteEvent.$javaClass.getHandlerList(...args);
    }
}
