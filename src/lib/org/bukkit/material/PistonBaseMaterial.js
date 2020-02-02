export default class PistonBaseMaterial {
    static get $javaClass() {
        return Java.type('org.bukkit.material.PistonBaseMaterial');
    }
    constructor(...args) {
        return new PistonBaseMaterial.$javaClass(...args);
    }
}
