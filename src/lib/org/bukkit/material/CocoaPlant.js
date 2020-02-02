export default class CocoaPlant {
    static get $javaClass() {
        return Java.type('org.bukkit.material.CocoaPlant');
    }
    constructor(...args) {
        return new CocoaPlant.$javaClass(...args);
    }
}
