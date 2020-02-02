export default class EntityInteractEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityInteractEvent');
    }
    constructor(...args) {
        return new EntityInteractEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityInteractEvent.$javaClass.getHandlerList(...args);
    }
}
