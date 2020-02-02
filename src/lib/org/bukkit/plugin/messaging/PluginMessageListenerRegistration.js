export default class PluginMessageListenerRegistration {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.PluginMessageListenerRegistration');
    }
    constructor(...args) {
        return new PluginMessageListenerRegistration.$javaClass(...args);
    }
}
