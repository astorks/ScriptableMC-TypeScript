export default class EnderChest {
    static get $javaClass() {
        return Java.type('org.bukkit.material.EnderChest');
    }
    constructor(...args) {
        return new EnderChest.$javaClass(...args);
    }
}
