export default class Sandstone {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Sandstone');
    }
    constructor(...args) {
        return new Sandstone.$javaClass(...args);
    }
}
