export default class EntityBreakDoorEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityBreakDoorEvent');
    }
    constructor(...args) {
        return new EntityBreakDoorEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityBreakDoorEvent.$javaClass.getHandlerList(...args);
    }
}
