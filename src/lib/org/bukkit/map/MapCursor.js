export default class MapCursor {
    static get $javaClass() {
        return Java.type('org.bukkit.map.MapCursor');
    }
    constructor(...args) {
        return new MapCursor.$javaClass(...args);
    }
}
