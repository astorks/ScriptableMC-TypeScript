export default class PortalCreateEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.PortalCreateEvent');
    }
    constructor(...args) {
        return new PortalCreateEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PortalCreateEvent.$javaClass.getHandlerList(...args);
    }
}
