export default class TimedRegisteredListener {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.TimedRegisteredListener');
    }
    constructor(...args) {
        return new TimedRegisteredListener.$javaClass(...args);
    }
}
