export default class MapFont {
    static get $javaClass() {
        return Java.type('org.bukkit.map.MapFont');
    }
    constructor(...args) {
        return new MapFont.$javaClass(...args);
    }
}
