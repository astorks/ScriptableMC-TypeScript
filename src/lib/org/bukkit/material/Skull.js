export default class Skull {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Skull');
    }
    constructor(...args) {
        return new Skull.$javaClass(...args);
    }
}
