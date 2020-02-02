export default class Cauldron {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Cauldron');
    }
    constructor(...args) {
        return new Cauldron.$javaClass(...args);
    }
}
