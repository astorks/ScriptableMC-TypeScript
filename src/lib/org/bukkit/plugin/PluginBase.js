export default class PluginBase {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.PluginBase');
    }
    constructor(...args) {
        return new PluginBase.$javaClass(...args);
    }
}
