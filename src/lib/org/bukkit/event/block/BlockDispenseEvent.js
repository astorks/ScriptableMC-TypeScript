export default class BlockDispenseEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockDispenseEvent');
    }
    constructor(...args) {
        return new BlockDispenseEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockDispenseEvent.$javaClass.getHandlerList(...args);
    }
}
