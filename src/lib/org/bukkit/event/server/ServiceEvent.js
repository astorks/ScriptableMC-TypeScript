export default class ServiceEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.ServiceEvent');
    }
    constructor(...args) {
        return new ServiceEvent.$javaClass(...args);
    }
}
