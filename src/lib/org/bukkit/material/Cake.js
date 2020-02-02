export default class Cake {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Cake');
    }
    constructor(...args) {
        return new Cake.$javaClass(...args);
    }
}
