export default class Bed {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Bed');
    }
    constructor(...args) {
        return new Bed.$javaClass(...args);
    }
}
