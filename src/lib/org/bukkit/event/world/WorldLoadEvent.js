export class WorldLoadEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.WorldLoadEvent');
    }
    constructor(...args) {
        return new WorldLoadEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return WorldLoadEvent.$javaClass.getHandlerList(...args);
    }
}
//# sourceMappingURL=WorldLoadEvent.js.map