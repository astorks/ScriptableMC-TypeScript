export default class BlockFromToEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockFromToEvent');
    }
    constructor(...args) {
        return new BlockFromToEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockFromToEvent.$javaClass.getHandlerList(...args);
    }
}
