export class Messenger {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.Messenger');
    }
    static get MAX_MESSAGE_SIZE() {
        return Messenger.$javaClass.MAX_MESSAGE_SIZE;
    }
    static get MAX_CHANNEL_SIZE() {
        return Messenger.$javaClass.MAX_CHANNEL_SIZE;
    }
}
//# sourceMappingURL=Messenger.js.map