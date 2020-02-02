export default class Wool {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Wool');
    }
    constructor(...args) {
        return new Wool.$javaClass(...args);
    }
}
