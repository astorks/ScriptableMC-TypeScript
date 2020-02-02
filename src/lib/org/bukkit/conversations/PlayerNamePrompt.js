export default class PlayerNamePrompt {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.PlayerNamePrompt');
    }
    constructor(...args) {
        return new PlayerNamePrompt.$javaClass(...args);
    }
    static get END_OF_CONVERSATION() {
        return PlayerNamePrompt.$javaClass.END_OF_CONVERSATION;
    }
}
