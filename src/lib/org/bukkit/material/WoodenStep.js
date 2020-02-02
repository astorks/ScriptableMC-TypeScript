export default class WoodenStep {
    static get $javaClass() {
        return Java.type('org.bukkit.material.WoodenStep');
    }
    constructor(...args) {
        return new WoodenStep.$javaClass(...args);
    }
}
