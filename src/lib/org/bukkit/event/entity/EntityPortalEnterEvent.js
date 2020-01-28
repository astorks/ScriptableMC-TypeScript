export class EntityPortalEnterEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityPortalEnterEvent');
    }
    constructor(...args) {
        return new EntityPortalEnterEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityPortalEnterEvent.$javaClass.getHandlerList(...args);
    }
}
//# sourceMappingURL=EntityPortalEnterEvent.js.map