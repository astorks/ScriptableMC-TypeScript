export default class EntityCombustByEntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityCombustByEntityEvent');
    }
    constructor(...args) {
        return new EntityCombustByEntityEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityCombustByEntityEvent.$javaClass.getHandlerList(...args);
    }
}
