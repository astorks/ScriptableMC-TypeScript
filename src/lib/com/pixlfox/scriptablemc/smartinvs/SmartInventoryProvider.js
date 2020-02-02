export default class SmartInventoryProvider {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.smartinvs.SmartInventoryProvider');
    }
    constructor(...args) {
        return new SmartInventoryProvider.$javaClass(...args);
    }
}
