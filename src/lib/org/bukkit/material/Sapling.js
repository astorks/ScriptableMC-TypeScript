export default class Sapling {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Sapling');
    }
    constructor(...args) {
        return new Sapling.$javaClass(...args);
    }
}
