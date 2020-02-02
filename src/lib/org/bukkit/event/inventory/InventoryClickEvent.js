export default class InventoryClickEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.InventoryClickEvent');
    }
    constructor(...args) {
        return new InventoryClickEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return InventoryClickEvent.$javaClass.getHandlerList(...args);
    }
}
