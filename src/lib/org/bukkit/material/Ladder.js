export default class Ladder {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Ladder');
    }
    constructor(...args) {
        return new Ladder.$javaClass(...args);
    }
}
