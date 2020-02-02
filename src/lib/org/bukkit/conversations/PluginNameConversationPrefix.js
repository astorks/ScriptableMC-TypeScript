export default class PluginNameConversationPrefix {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.PluginNameConversationPrefix');
    }
    constructor(...args) {
        return new PluginNameConversationPrefix.$javaClass(...args);
    }
}
