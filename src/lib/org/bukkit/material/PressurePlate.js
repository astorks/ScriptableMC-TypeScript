export default class PressurePlate {
    static get $javaClass() {
        return Java.type('org.bukkit.material.PressurePlate');
    }
    constructor(...args) {
        return new PressurePlate.$javaClass(...args);
    }
}
