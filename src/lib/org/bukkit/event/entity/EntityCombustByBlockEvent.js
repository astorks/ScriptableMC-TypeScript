export default class EntityCombustByBlockEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityCombustByBlockEvent');
    }
    constructor(...args) {
        return new EntityCombustByBlockEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityCombustByBlockEvent.$javaClass.getHandlerList(...args);
    }
}
