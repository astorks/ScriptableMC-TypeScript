export default class StandardMessenger {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.StandardMessenger');
    }
    constructor(...args) {
        return new StandardMessenger.$javaClass(...args);
    }
    static get MAX_MESSAGE_SIZE() {
        return StandardMessenger.$javaClass.MAX_MESSAGE_SIZE;
    }
    static get MAX_CHANNEL_SIZE() {
        return StandardMessenger.$javaClass.MAX_CHANNEL_SIZE;
    }
    static validateChannel(...args) {
        return StandardMessenger.$javaClass.validateChannel(...args);
    }
    static validateAndCorrectChannel(...args) {
        return StandardMessenger.$javaClass.validateAndCorrectChannel(...args);
    }
    static validatePluginMessage(...args) {
        return StandardMessenger.$javaClass.validatePluginMessage(...args);
    }
}
