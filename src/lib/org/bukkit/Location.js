export default class Location {
    static get $javaClass() {
        return Java.type('org.bukkit.Location');
    }
    constructor(...args) {
        return new Location.$javaClass(...args);
    }
    static deserialize(...args) {
        return Location.$javaClass.deserialize(...args);
    }
    static locToBlock(...args) {
        return Location.$javaClass.locToBlock(...args);
    }
    static normalizeYaw(...args) {
        return Location.$javaClass.normalizeYaw(...args);
    }
    static normalizePitch(...args) {
        return Location.$javaClass.normalizePitch(...args);
    }
}
