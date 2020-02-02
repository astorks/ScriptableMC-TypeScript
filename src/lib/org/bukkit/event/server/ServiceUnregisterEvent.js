export default class ServiceUnregisterEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.ServiceUnregisterEvent');
    }
    constructor(...args) {
        return new ServiceUnregisterEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ServiceUnregisterEvent.$javaClass.getHandlerList(...args);
    }
}
