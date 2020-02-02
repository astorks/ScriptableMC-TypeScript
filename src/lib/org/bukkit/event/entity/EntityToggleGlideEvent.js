export default class EntityToggleGlideEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityToggleGlideEvent');
    }
    constructor(...args) {
        return new EntityToggleGlideEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityToggleGlideEvent.$javaClass.getHandlerList(...args);
    }
}
