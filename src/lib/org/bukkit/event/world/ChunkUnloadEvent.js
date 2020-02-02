export default class ChunkUnloadEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.ChunkUnloadEvent');
    }
    constructor(...args) {
        return new ChunkUnloadEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ChunkUnloadEvent.$javaClass.getHandlerList(...args);
    }
}
