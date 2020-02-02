export default class EntityPortalExitEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityPortalExitEvent');
    }
    constructor(...args) {
        return new EntityPortalExitEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityPortalExitEvent.$javaClass.getHandlerList(...args);
    }
}
