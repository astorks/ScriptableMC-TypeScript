export default class ServerLoadEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.ServerLoadEvent');
    }
    constructor(...args) {
        return new ServerLoadEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ServerLoadEvent.$javaClass.getHandlerList(...args);
    }
}
