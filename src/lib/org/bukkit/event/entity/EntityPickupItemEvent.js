export default class EntityPickupItemEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityPickupItemEvent');
    }
    constructor(...args) {
        return new EntityPickupItemEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityPickupItemEvent.$javaClass.getHandlerList(...args);
    }
}
