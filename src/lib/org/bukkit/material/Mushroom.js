export default class Mushroom {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Mushroom');
    }
    constructor(...args) {
        return new Mushroom.$javaClass(...args);
    }
}
