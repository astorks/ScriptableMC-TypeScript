export default class ValidatingPrompt {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ValidatingPrompt');
    }
    constructor(...args) {
        return new ValidatingPrompt.$javaClass(...args);
    }
    static get END_OF_CONVERSATION() {
        return ValidatingPrompt.$javaClass.END_OF_CONVERSATION;
    }
}
