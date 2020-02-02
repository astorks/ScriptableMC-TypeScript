export default class Dispenser {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Dispenser');
    }
    constructor(...args) {
        return new Dispenser.$javaClass(...args);
    }
}
