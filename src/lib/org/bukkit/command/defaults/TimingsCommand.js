export default class TimingsCommand {
    static get $javaClass() {
        return Java.type('org.bukkit.command.defaults.TimingsCommand');
    }
    constructor(...args) {
        return new TimingsCommand.$javaClass(...args);
    }
    static broadcastCommandMessage(...args) {
        return TimingsCommand.$javaClass.broadcastCommandMessage(...args);
    }
}
