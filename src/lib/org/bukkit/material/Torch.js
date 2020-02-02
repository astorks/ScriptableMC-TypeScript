export default class Torch {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Torch');
    }
    constructor(...args) {
        return new Torch.$javaClass(...args);
    }
}
