export default class Vine {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Vine');
    }
    constructor(...args) {
        return new Vine.$javaClass(...args);
    }
}
