export default class TrapDoor {
    static get $javaClass() {
        return Java.type('org.bukkit.material.TrapDoor');
    }
    constructor(...args) {
        return new TrapDoor.$javaClass(...args);
    }
}
