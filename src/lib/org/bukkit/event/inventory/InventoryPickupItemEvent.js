export default class InventoryPickupItemEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.InventoryPickupItemEvent');
    }
    constructor(...args) {
        return new InventoryPickupItemEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return InventoryPickupItemEvent.$javaClass.getHandlerList(...args);
    }
}
