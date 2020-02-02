export default class SmartInventory {
    static get $javaClass() {
        return Java.type('fr.minuskube.inv.SmartInventory');
    }
    static builder(...args) {
        return SmartInventory.$javaClass.builder(...args);
    }
}
