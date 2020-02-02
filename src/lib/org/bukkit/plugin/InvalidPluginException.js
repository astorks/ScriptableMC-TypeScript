export default class InvalidPluginException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.InvalidPluginException');
    }
    constructor(...args) {
        return new InvalidPluginException.$javaClass(...args);
    }
}
