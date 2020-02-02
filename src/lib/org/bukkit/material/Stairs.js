export default class Stairs {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Stairs');
    }
    constructor(...args) {
        return new Stairs.$javaClass(...args);
    }
}
