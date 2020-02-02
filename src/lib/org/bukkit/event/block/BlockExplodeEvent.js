export default class BlockExplodeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockExplodeEvent');
    }
    constructor(...args) {
        return new BlockExplodeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockExplodeEvent.$javaClass.getHandlerList(...args);
    }
}
