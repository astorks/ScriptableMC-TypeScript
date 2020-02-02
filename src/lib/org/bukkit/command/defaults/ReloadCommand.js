export default class ReloadCommand {
    static get $javaClass() {
        return Java.type('org.bukkit.command.defaults.ReloadCommand');
    }
    constructor(...args) {
        return new ReloadCommand.$javaClass(...args);
    }
    static broadcastCommandMessage(...args) {
        return ReloadCommand.$javaClass.broadcastCommandMessage(...args);
    }
}
