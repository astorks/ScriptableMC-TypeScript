export default class PistonExtensionMaterial {
    static get $javaClass() {
        return Java.type('org.bukkit.material.PistonExtensionMaterial');
    }
    constructor(...args) {
        return new PistonExtensionMaterial.$javaClass(...args);
    }
}
