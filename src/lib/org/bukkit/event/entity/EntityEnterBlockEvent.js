export default class EntityEnterBlockEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityEnterBlockEvent');
    }
    constructor(...args) {
        return new EntityEnterBlockEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityEnterBlockEvent.$javaClass.getHandlerList(...args);
    }
}
