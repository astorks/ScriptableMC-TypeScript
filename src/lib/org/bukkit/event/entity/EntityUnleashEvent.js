export default class EntityUnleashEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityUnleashEvent');
    }
    constructor(...args) {
        return new EntityUnleashEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityUnleashEvent.$javaClass.getHandlerList(...args);
    }
}
