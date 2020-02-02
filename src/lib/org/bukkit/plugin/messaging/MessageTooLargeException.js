export default class MessageTooLargeException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.MessageTooLargeException');
    }
    constructor(...args) {
        return new MessageTooLargeException.$javaClass(...args);
    }
}
