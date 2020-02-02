export default class IllegalPluginAccessException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.IllegalPluginAccessException');
    }
    constructor(...args) {
        return new IllegalPluginAccessException.$javaClass(...args);
    }
}
