export default class ExtendedRails {
    static get $javaClass() {
        return Java.type('org.bukkit.material.ExtendedRails');
    }
    constructor(...args) {
        return new ExtendedRails.$javaClass(...args);
    }
}
