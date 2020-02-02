export default class Comparator {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Comparator');
    }
    constructor(...args) {
        return new Comparator.$javaClass(...args);
    }
}
