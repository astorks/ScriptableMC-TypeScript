export default class MemoryConfiguration {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.MemoryConfiguration');
    }
    constructor(...args) {
        return new MemoryConfiguration.$javaClass(...args);
    }
    static createPath(...args) {
        return MemoryConfiguration.$javaClass.createPath(...args);
    }
}
