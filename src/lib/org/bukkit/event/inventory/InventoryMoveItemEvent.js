export default class InventoryMoveItemEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.InventoryMoveItemEvent');
    }
    constructor(...args) {
        return new InventoryMoveItemEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return InventoryMoveItemEvent.$javaClass.getHandlerList(...args);
    }
}
