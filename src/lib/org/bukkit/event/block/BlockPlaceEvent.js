export default class BlockPlaceEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockPlaceEvent');
    }
    constructor(...args) {
        return new BlockPlaceEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockPlaceEvent.$javaClass.getHandlerList(...args);
    }
}
