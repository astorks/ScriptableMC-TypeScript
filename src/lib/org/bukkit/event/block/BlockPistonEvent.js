export default class BlockPistonEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockPistonEvent');
    }
    constructor(...args) {
        return new BlockPistonEvent.$javaClass(...args);
    }
}
