export default class EntityPortalEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityPortalEvent');
    }
    constructor(...args) {
        return new EntityPortalEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityPortalEvent.$javaClass.getHandlerList(...args);
    }
}
