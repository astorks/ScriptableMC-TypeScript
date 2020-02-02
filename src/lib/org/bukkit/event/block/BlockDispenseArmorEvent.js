export default class BlockDispenseArmorEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockDispenseArmorEvent');
    }
    constructor(...args) {
        return new BlockDispenseArmorEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockDispenseArmorEvent.$javaClass.getHandlerList(...args);
    }
}
