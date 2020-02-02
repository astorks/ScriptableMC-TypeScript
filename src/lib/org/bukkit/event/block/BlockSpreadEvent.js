export default class BlockSpreadEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockSpreadEvent');
    }
    constructor(...args) {
        return new BlockSpreadEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockSpreadEvent.$javaClass.getHandlerList(...args);
    }
}
