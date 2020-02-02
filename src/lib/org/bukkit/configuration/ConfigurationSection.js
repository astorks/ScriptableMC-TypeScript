export default class ConfigurationSection {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.ConfigurationSection');
    }
}
