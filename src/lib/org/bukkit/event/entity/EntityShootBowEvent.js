export default class EntityShootBowEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityShootBowEvent');
    }
    constructor(...args) {
        return new EntityShootBowEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityShootBowEvent.$javaClass.getHandlerList(...args);
    }
}
