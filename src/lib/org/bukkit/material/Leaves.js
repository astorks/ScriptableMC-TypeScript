export default class Leaves {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Leaves');
    }
    constructor(...args) {
        return new Leaves.$javaClass(...args);
    }
}
