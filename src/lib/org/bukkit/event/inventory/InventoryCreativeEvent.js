export default class InventoryCreativeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.InventoryCreativeEvent');
    }
    constructor(...args) {
        return new InventoryCreativeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return InventoryCreativeEvent.$javaClass.getHandlerList(...args);
    }
}
