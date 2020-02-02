export default class StringPrompt {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.StringPrompt');
    }
    constructor(...args) {
        return new StringPrompt.$javaClass(...args);
    }
    static get END_OF_CONVERSATION() {
        return StringPrompt.$javaClass.END_OF_CONVERSATION;
    }
}
