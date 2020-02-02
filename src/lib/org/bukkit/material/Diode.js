export default class Diode {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Diode');
    }
    constructor(...args) {
        return new Diode.$javaClass(...args);
    }
}
