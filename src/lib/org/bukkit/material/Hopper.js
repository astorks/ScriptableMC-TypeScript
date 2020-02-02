export default class Hopper {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Hopper');
    }
    constructor(...args) {
        return new Hopper.$javaClass(...args);
    }
}
