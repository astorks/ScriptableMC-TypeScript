export default class ConversationFactory {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ConversationFactory');
    }
    constructor(...args) {
        return new ConversationFactory.$javaClass(...args);
    }
}
