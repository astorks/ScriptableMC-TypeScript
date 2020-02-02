export default class Conversation$ConversationState {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.Conversation$ConversationState');
    }
    static get UNSTARTED() {
        return this.$javaClass.UNSTARTED;
    }
    static get STARTED() {
        return this.$javaClass.STARTED;
    }
    static get ABANDONED() {
        return this.$javaClass.ABANDONED;
    }
}
