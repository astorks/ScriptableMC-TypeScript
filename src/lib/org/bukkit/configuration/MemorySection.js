export default class MemorySection {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.MemorySection');
    }
    static createPath(...args) {
        return MemorySection.$javaClass.createPath(...args);
    }
}
