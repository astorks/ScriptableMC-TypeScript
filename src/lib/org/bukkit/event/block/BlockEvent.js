export default class BlockEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockEvent');
    }
    constructor(...args) {
        return new BlockEvent.$javaClass(...args);
    }
}
