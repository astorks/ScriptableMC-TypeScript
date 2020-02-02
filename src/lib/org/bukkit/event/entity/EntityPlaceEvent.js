export default class EntityPlaceEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityPlaceEvent');
    }
    constructor(...args) {
        return new EntityPlaceEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityPlaceEvent.$javaClass.getHandlerList(...args);
    }
}
