export default class WorldSaveEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.WorldSaveEvent');
    }
    constructor(...args) {
        return new WorldSaveEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return WorldSaveEvent.$javaClass.getHandlerList(...args);
    }
}
