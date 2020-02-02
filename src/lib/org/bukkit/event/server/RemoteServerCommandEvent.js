export default class RemoteServerCommandEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.RemoteServerCommandEvent');
    }
    constructor(...args) {
        return new RemoteServerCommandEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return RemoteServerCommandEvent.$javaClass.getHandlerList(...args);
    }
}
