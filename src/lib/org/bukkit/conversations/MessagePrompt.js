export default class MessagePrompt {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.MessagePrompt');
    }
    constructor(...args) {
        return new MessagePrompt.$javaClass(...args);
    }
    static get END_OF_CONVERSATION() {
        return MessagePrompt.$javaClass.END_OF_CONVERSATION;
    }
}
