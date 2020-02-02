export default class HelpCommand {
    static get $javaClass() {
        return Java.type('org.bukkit.command.defaults.HelpCommand');
    }
    constructor(...args) {
        return new HelpCommand.$javaClass(...args);
    }
    static broadcastCommandMessage(...args) {
        return HelpCommand.$javaClass.broadcastCommandMessage(...args);
    }
}
