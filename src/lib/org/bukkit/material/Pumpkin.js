export default class Pumpkin {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Pumpkin');
    }
    constructor(...args) {
        return new Pumpkin.$javaClass(...args);
    }
}
