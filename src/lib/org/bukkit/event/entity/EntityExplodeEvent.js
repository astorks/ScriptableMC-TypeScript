export default class EntityExplodeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityExplodeEvent');
    }
    constructor(...args) {
        return new EntityExplodeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityExplodeEvent.$javaClass.getHandlerList(...args);
    }
}
