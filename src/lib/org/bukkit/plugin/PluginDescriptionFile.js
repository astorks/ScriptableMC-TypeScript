export default class PluginDescriptionFile {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.PluginDescriptionFile');
    }
    constructor(...args) {
        return new PluginDescriptionFile.$javaClass(...args);
    }
}
