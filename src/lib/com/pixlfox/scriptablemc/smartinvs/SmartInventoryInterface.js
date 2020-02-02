export default class SmartInventoryInterface {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.smartinvs.SmartInventoryInterface');
    }
    constructor(...args) {
        return new SmartInventoryInterface.$javaClass(...args);
    }
}
