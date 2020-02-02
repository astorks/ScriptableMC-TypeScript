export default class DetectorRail {
    static get $javaClass() {
        return Java.type('org.bukkit.material.DetectorRail');
    }
    constructor(...args) {
        return new DetectorRail.$javaClass(...args);
    }
}
