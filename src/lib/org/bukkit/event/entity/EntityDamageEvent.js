export default class EntityDamageEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityDamageEvent');
    }
    constructor(...args) {
        return new EntityDamageEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityDamageEvent.$javaClass.getHandlerList(...args);
    }
}
