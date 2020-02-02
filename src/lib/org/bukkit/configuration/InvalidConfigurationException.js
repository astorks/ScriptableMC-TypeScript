export default class InvalidConfigurationException {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.InvalidConfigurationException');
    }
    constructor(...args) {
        return new InvalidConfigurationException.$javaClass(...args);
    }
}
