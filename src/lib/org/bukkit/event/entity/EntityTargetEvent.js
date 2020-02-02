export default class EntityTargetEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityTargetEvent');
    }
    constructor(...args) {
        return new EntityTargetEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityTargetEvent.$javaClass.getHandlerList(...args);
    }
}
