export default class InventoryDragEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.InventoryDragEvent');
    }
    constructor(...args) {
        return new InventoryDragEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return InventoryDragEvent.$javaClass.getHandlerList(...args);
    }
}
