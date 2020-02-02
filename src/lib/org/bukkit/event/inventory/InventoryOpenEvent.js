export default class InventoryOpenEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.InventoryOpenEvent');
    }
    constructor(...args) {
        return new InventoryOpenEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return InventoryOpenEvent.$javaClass.getHandlerList(...args);
    }
}
