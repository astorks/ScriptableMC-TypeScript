export default class BlockRedstoneEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockRedstoneEvent');
    }
    constructor(...args) {
        return new BlockRedstoneEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockRedstoneEvent.$javaClass.getHandlerList(...args);
    }
}
