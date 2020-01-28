export class ConversationAbandonedEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ConversationAbandonedEvent');
    }
    constructor(...args) {
        return new ConversationAbandonedEvent.$javaClass(...args);
    }
}
//# sourceMappingURL=ConversationAbandonedEvent.js.map