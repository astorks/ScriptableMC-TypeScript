export default class ConversationContext {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ConversationContext');
    }
    constructor(...args) {
        return new ConversationContext.$javaClass(...args);
    }
}
