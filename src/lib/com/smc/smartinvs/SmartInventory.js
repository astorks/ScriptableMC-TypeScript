export default class SmartInventory {
    static get $javaClass() {
        return Java.type('com.smc.smartinvs.SmartInventory');
    }
    static get INSTANCE() {
        return SmartInventory.$javaClass.INSTANCE;
    }
    static builder(...args) {
        return SmartInventory.$javaClass.builder(...args);
    }
    static provider(...args) {
        return SmartInventory.$javaClass.provider(...args);
    }
    static clickableItem(...args) {
        return SmartInventory.$javaClass.clickableItem(...args);
    }
}
