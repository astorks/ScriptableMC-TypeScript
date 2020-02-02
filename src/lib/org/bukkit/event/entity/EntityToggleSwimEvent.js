export default class EntityToggleSwimEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityToggleSwimEvent');
    }
    constructor(...args) {
        return new EntityToggleSwimEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityToggleSwimEvent.$javaClass.getHandlerList(...args);
    }
}
