export default class BukkitCommand {
    static get $javaClass() {
        return Java.type('org.bukkit.command.defaults.BukkitCommand');
    }
    static broadcastCommandMessage(...args) {
        return BukkitCommand.$javaClass.broadcastCommandMessage(...args);
    }
}
