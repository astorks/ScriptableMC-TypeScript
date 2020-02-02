export default class ChunkPopulateEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.ChunkPopulateEvent');
    }
    constructor(...args) {
        return new ChunkPopulateEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ChunkPopulateEvent.$javaClass.getHandlerList(...args);
    }
}
