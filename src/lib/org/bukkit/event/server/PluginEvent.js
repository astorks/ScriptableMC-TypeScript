export default class PluginEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.PluginEvent');
    }
    constructor(...args) {
        return new PluginEvent.$javaClass(...args);
    }
}
