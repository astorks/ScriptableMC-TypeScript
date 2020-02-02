export default class InactivityConversationCanceller {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.InactivityConversationCanceller');
    }
    constructor(...args) {
        return new InactivityConversationCanceller.$javaClass(...args);
    }
}
