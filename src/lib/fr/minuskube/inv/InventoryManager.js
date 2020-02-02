export default class InventoryManager {
    static get $javaClass() {
        return Java.type('fr.minuskube.inv.InventoryManager');
    }
    constructor(...args) {
        return new InventoryManager.$javaClass(...args);
    }
}
