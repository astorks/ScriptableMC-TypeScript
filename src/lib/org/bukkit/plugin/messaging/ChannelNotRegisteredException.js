export default class ChannelNotRegisteredException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.ChannelNotRegisteredException');
    }
    constructor(...args) {
        return new ChannelNotRegisteredException.$javaClass(...args);
    }
}
