export default class ReservedChannelException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.ReservedChannelException');
    }
    constructor(...args) {
        return new ReservedChannelException.$javaClass(...args);
    }
}
