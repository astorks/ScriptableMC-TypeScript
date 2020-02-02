export default class PluginMessageListener {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.PluginMessageListener');
    }
}
