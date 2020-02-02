export default class Command {
    static get $javaClass() {
        return Java.type('org.bukkit.command.Command');
    }
    static broadcastCommandMessage(...args) {
        return Command.$javaClass.broadcastCommandMessage(...args);
    }
}
