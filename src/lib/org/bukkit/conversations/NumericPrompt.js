export default class NumericPrompt {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.NumericPrompt');
    }
    constructor(...args) {
        return new NumericPrompt.$javaClass(...args);
    }
    static get END_OF_CONVERSATION() {
        return NumericPrompt.$javaClass.END_OF_CONVERSATION;
    }
}
