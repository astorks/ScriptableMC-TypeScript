export default class Tripwire {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Tripwire');
    }
    constructor(...args) {
        return new Tripwire.$javaClass(...args);
    }
}
