export default class ServerListPingEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.ServerListPingEvent');
    }
    constructor(...args) {
        return new ServerListPingEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ServerListPingEvent.$javaClass.getHandlerList(...args);
    }
}
