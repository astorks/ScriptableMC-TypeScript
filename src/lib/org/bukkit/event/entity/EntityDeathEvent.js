export default class EntityDeathEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityDeathEvent');
    }
    constructor(...args) {
        return new EntityDeathEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityDeathEvent.$javaClass.getHandlerList(...args);
    }
}
