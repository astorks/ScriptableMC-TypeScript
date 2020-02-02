export default class BlockMultiPlaceEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockMultiPlaceEvent');
    }
    constructor(...args) {
        return new BlockMultiPlaceEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockMultiPlaceEvent.$javaClass.getHandlerList(...args);
    }
}
