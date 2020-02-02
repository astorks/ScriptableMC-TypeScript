export default class AsyncPlayerChatEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.AsyncPlayerChatEvent');
    }
    constructor(...args) {
        return new AsyncPlayerChatEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return AsyncPlayerChatEvent.$javaClass.getHandlerList(...args);
    }
}
