export default class ChunkLoadEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.ChunkLoadEvent');
    }
    constructor(...args) {
        return new ChunkLoadEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ChunkLoadEvent.$javaClass.getHandlerList(...args);
    }
}
