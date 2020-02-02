export default class NullConversationPrefix {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.NullConversationPrefix');
    }
    constructor(...args) {
        return new NullConversationPrefix.$javaClass(...args);
    }
}
