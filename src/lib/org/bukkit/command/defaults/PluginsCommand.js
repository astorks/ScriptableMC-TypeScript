export default class PluginsCommand {
    static get $javaClass() {
        return Java.type('org.bukkit.command.defaults.PluginsCommand');
    }
    constructor(...args) {
        return new PluginsCommand.$javaClass(...args);
    }
    static broadcastCommandMessage(...args) {
        return PluginsCommand.$javaClass.broadcastCommandMessage(...args);
    }
}
