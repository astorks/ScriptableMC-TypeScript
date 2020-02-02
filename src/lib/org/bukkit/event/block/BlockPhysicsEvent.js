export default class BlockPhysicsEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockPhysicsEvent');
    }
    constructor(...args) {
        return new BlockPhysicsEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockPhysicsEvent.$javaClass.getHandlerList(...args);
    }
}
