export default class InventoryView {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.InventoryView');
    }
    constructor(...args) {
        return new InventoryView.$javaClass(...args);
    }
    static get OUTSIDE() {
        return InventoryView.$javaClass.OUTSIDE;
    }
}
