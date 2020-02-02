export default class CommandException {
    static get $javaClass() {
        return Java.type('org.bukkit.command.CommandException');
    }
    constructor(...args) {
        return new CommandException.$javaClass(...args);
    }
}
