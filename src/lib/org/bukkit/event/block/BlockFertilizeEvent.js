export default class BlockFertilizeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockFertilizeEvent');
    }
    constructor(...args) {
        return new BlockFertilizeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockFertilizeEvent.$javaClass.getHandlerList(...args);
    }
}
