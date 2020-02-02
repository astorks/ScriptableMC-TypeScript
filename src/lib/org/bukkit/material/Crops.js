export default class Crops {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Crops');
    }
    constructor(...args) {
        return new Crops.$javaClass(...args);
    }
}
