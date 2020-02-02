export default class EntityTeleportEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityTeleportEvent');
    }
    constructor(...args) {
        return new EntityTeleportEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityTeleportEvent.$javaClass.getHandlerList(...args);
    }
}
