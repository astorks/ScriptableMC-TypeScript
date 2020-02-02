export default class Lever {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Lever');
    }
    constructor(...args) {
        return new Lever.$javaClass(...args);
    }
}
