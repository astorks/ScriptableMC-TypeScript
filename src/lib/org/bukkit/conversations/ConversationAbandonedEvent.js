export default class ConversationAbandonedEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ConversationAbandonedEvent');
    }
    constructor(...args) {
        return new ConversationAbandonedEvent.$javaClass(...args);
    }
}
