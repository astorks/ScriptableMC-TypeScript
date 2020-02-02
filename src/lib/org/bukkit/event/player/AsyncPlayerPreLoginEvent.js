export default class AsyncPlayerPreLoginEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.AsyncPlayerPreLoginEvent');
    }
    constructor(...args) {
        return new AsyncPlayerPreLoginEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return AsyncPlayerPreLoginEvent.$javaClass.getHandlerList(...args);
    }
}
