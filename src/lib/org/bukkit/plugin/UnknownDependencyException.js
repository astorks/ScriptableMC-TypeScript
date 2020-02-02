export default class UnknownDependencyException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.UnknownDependencyException');
    }
    constructor(...args) {
        return new UnknownDependencyException.$javaClass(...args);
    }
}
