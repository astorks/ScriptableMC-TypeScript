export default class InvalidDescriptionException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.InvalidDescriptionException');
    }
    constructor(...args) {
        return new InvalidDescriptionException.$javaClass(...args);
    }
}
