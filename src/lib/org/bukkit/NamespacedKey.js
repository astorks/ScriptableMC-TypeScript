export default class NamespacedKey {
    static get $javaClass() {
        return Java.type('org.bukkit.NamespacedKey');
    }
    constructor(...args) {
        return new NamespacedKey.$javaClass(...args);
    }
    static get MINECRAFT() {
        return NamespacedKey.$javaClass.MINECRAFT;
    }
    static get BUKKIT() {
        return NamespacedKey.$javaClass.BUKKIT;
    }
    static minecraft(...args) {
        return NamespacedKey.$javaClass.minecraft(...args);
    }
    static randomKey(...args) {
        return NamespacedKey.$javaClass.randomKey(...args);
    }
}
