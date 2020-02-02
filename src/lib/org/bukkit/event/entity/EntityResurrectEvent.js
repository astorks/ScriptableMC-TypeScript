export default class EntityResurrectEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityResurrectEvent');
    }
    constructor(...args) {
        return new EntityResurrectEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityResurrectEvent.$javaClass.getHandlerList(...args);
    }
}
