export default class VersionCommand {
    static get $javaClass() {
        return Java.type('org.bukkit.command.defaults.VersionCommand');
    }
    constructor(...args) {
        return new VersionCommand.$javaClass(...args);
    }
    static broadcastCommandMessage(...args) {
        return VersionCommand.$javaClass.broadcastCommandMessage(...args);
    }
}
