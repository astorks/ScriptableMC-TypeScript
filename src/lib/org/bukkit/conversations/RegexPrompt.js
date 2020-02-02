export default class RegexPrompt {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.RegexPrompt');
    }
    constructor(...args) {
        return new RegexPrompt.$javaClass(...args);
    }
    static get END_OF_CONVERSATION() {
        return RegexPrompt.$javaClass.END_OF_CONVERSATION;
    }
}
