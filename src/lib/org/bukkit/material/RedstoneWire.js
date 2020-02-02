export default class RedstoneWire {
    static get $javaClass() {
        return Java.type('org.bukkit.material.RedstoneWire');
    }
    constructor(...args) {
        return new RedstoneWire.$javaClass(...args);
    }
}
