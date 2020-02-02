export default class Banner {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Banner');
    }
    constructor(...args) {
        return new Banner.$javaClass(...args);
    }
}
