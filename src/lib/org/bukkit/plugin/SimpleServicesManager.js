export default class SimpleServicesManager {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.SimpleServicesManager');
    }
    constructor(...args) {
        return new SimpleServicesManager.$javaClass(...args);
    }
}
