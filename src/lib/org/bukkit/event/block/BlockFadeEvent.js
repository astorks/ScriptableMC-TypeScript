export default class BlockFadeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockFadeEvent');
    }
    constructor(...args) {
        return new BlockFadeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockFadeEvent.$javaClass.getHandlerList(...args);
    }
}
