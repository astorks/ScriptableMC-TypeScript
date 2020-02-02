export default class MapCursorCollection {
    static get $javaClass() {
        return Java.type('org.bukkit.map.MapCursorCollection');
    }
    constructor(...args) {
        return new MapCursorCollection.$javaClass(...args);
    }
}
