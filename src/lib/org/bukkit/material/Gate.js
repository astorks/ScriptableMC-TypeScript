export default class Gate {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Gate');
    }
    constructor(...args) {
        return new Gate.$javaClass(...args);
    }
}
