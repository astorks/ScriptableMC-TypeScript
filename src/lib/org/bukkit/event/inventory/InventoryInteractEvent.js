export default class InventoryInteractEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.InventoryInteractEvent');
    }
    constructor(...args) {
        return new InventoryInteractEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return InventoryInteractEvent.$javaClass.getHandlerList(...args);
    }
}
