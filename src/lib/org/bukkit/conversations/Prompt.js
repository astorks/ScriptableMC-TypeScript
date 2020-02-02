export default class Prompt {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.Prompt');
    }
    static get END_OF_CONVERSATION() {
        return Prompt.$javaClass.END_OF_CONVERSATION;
    }
}
