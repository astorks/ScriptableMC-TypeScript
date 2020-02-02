export default class SimplePluginManager {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.SimplePluginManager');
    }
    constructor(...args) {
        return new SimplePluginManager.$javaClass(...args);
    }
}
