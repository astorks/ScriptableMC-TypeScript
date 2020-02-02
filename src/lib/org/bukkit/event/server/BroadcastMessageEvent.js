export default class BroadcastMessageEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.BroadcastMessageEvent');
    }
    constructor(...args) {
        return new BroadcastMessageEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BroadcastMessageEvent.$javaClass.getHandlerList(...args);
    }
}
