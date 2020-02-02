export default class ManuallyAbandonedConversationCanceller {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ManuallyAbandonedConversationCanceller');
    }
    constructor(...args) {
        return new ManuallyAbandonedConversationCanceller.$javaClass(...args);
    }
}
