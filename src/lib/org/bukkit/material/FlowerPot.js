export default class FlowerPot {
    static get $javaClass() {
        return Java.type('org.bukkit.material.FlowerPot');
    }
    constructor(...args) {
        return new FlowerPot.$javaClass(...args);
    }
}
