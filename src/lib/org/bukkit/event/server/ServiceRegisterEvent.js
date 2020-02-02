export default class ServiceRegisterEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.ServiceRegisterEvent');
    }
    constructor(...args) {
        return new ServiceRegisterEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ServiceRegisterEvent.$javaClass.getHandlerList(...args);
    }
}
