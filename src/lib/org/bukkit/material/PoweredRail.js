export default class PoweredRail {
    static get $javaClass() {
        return Java.type('org.bukkit.material.PoweredRail');
    }
    constructor(...args) {
        return new PoweredRail.$javaClass(...args);
    }
}
