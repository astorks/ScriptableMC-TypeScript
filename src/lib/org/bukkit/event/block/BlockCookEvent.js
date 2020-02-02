export default class BlockCookEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockCookEvent');
    }
    constructor(...args) {
        return new BlockCookEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockCookEvent.$javaClass.getHandlerList(...args);
    }
}
