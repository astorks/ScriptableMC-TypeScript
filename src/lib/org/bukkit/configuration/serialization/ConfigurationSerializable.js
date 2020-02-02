export default class ConfigurationSerializable {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.serialization.ConfigurationSerializable');
    }
}
