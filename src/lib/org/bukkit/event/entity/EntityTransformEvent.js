export default class EntityTransformEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityTransformEvent');
    }
    constructor(...args) {
        return new EntityTransformEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityTransformEvent.$javaClass.getHandlerList(...args);
    }
}
