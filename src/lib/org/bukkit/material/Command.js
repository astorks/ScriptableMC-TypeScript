export default class Command {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Command');
    }
    constructor(...args) {
        return new Command.$javaClass(...args);
    }
}
