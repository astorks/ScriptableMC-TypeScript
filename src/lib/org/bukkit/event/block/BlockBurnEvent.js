export class BlockBurnEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockBurnEvent');
    }
    constructor(...args) {
        return new BlockBurnEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockBurnEvent.$javaClass.getHandlerList(...args);
    }
}
//# sourceMappingURL=BlockBurnEvent.js.map