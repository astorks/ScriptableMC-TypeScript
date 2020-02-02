export default class BlockDropItemEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockDropItemEvent');
    }
    constructor(...args) {
        return new BlockDropItemEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockDropItemEvent.$javaClass.getHandlerList(...args);
    }
}
