export default class WorldInitEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.WorldInitEvent');
    }
    constructor(...args) {
        return new WorldInitEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return WorldInitEvent.$javaClass.getHandlerList(...args);
    }
}
