export default class EntityChangeBlockEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityChangeBlockEvent');
    }
    constructor(...args) {
        return new EntityChangeBlockEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityChangeBlockEvent.$javaClass.getHandlerList(...args);
    }
}
