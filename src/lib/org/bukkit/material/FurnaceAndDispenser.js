export default class FurnaceAndDispenser {
    static get $javaClass() {
        return Java.type('org.bukkit.material.FurnaceAndDispenser');
    }
    constructor(...args) {
        return new FurnaceAndDispenser.$javaClass(...args);
    }
}
