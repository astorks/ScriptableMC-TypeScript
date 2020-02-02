export default class MapInitializeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.MapInitializeEvent');
    }
    constructor(...args) {
        return new MapInitializeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return MapInitializeEvent.$javaClass.getHandlerList(...args);
    }
}
