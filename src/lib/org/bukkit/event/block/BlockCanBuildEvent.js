export default class BlockCanBuildEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockCanBuildEvent');
    }
    constructor(...args) {
        return new BlockCanBuildEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockCanBuildEvent.$javaClass.getHandlerList(...args);
    }
}
