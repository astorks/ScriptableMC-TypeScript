export default class ChannelNameTooLongException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.ChannelNameTooLongException');
    }
    constructor(...args) {
        return new ChannelNameTooLongException.$javaClass(...args);
    }
}
