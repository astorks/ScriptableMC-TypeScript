export default class InventoryListener {
    static get $javaClass() {
        return Java.type('fr.minuskube.inv.InventoryListener');
    }
    constructor(...args) {
        return new InventoryListener.$javaClass(...args);
    }
}
