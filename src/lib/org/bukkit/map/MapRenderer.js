export default class MapRenderer {
    static get $javaClass() {
        return Java.type('org.bukkit.map.MapRenderer');
    }
    constructor(...args) {
        return new MapRenderer.$javaClass(...args);
    }
}
