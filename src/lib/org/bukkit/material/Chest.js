export default class Chest {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Chest');
    }
    constructor(...args) {
        return new Chest.$javaClass(...args);
    }
}
