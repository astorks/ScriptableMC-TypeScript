export default class BlockExpEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockExpEvent');
    }
    constructor(...args) {
        return new BlockExpEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockExpEvent.$javaClass.getHandlerList(...args);
    }
}
