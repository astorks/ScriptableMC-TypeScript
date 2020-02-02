export default class Location {
    static get $javaClass() {
        return Java.type('org.bukkit.Location');
    }
    constructor(...args) {
        return new Location.$javaClass(...args);
    }
    static locToBlock(...args) {
        return Location.$javaClass.locToBlock(...args);
    }
    static normalizePitch(...args) {
        return Location.$javaClass.normalizePitch(...args);
    }
    static normalizeYaw(...args) {
        return Location.$javaClass.normalizeYaw(...args);
    }
    static deserialize(...args) {
        return Location.$javaClass.deserialize(...args);
    }
}
