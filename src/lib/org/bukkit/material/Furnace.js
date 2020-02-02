export default class Furnace {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Furnace');
    }
    constructor(...args) {
        return new Furnace.$javaClass(...args);
    }
}
