export default class RedstoneTorch {
    static get $javaClass() {
        return Java.type('org.bukkit.material.RedstoneTorch');
    }
    constructor(...args) {
        return new RedstoneTorch.$javaClass(...args);
    }
}
