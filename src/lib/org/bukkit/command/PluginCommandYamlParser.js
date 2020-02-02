export default class PluginCommandYamlParser {
    static get $javaClass() {
        return Java.type('org.bukkit.command.PluginCommandYamlParser');
    }
    constructor(...args) {
        return new PluginCommandYamlParser.$javaClass(...args);
    }
    static parse(...args) {
        return PluginCommandYamlParser.$javaClass.parse(...args);
    }
}
