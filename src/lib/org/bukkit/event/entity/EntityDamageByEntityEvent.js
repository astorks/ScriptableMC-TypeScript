export default class EntityDamageByEntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityDamageByEntityEvent');
    }
    constructor(...args) {
        return new EntityDamageByEntityEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityDamageByEntityEvent.$javaClass.getHandlerList(...args);
    }
}
