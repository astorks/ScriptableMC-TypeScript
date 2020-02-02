export default class ExactMatchConversationCanceller {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ExactMatchConversationCanceller');
    }
    constructor(...args) {
        return new ExactMatchConversationCanceller.$javaClass(...args);
    }
}
