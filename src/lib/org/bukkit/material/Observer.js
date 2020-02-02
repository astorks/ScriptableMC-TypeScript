export default class Observer {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Observer');
    }
    constructor(...args) {
        return new Observer.$javaClass(...args);
    }
}
