export default class ItemDespawnEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.ItemDespawnEvent');
    }
    constructor(...args) {
        return new ItemDespawnEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ItemDespawnEvent.$javaClass.getHandlerList(...args);
    }
}
