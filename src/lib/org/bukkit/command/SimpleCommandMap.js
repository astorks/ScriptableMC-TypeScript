export default class SimpleCommandMap {
    static get $javaClass() {
        return Java.type('org.bukkit.command.SimpleCommandMap');
    }
    constructor(...args) {
        return new SimpleCommandMap.$javaClass(...args);
    }
}
