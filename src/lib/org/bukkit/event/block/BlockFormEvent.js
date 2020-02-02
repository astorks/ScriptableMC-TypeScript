export default class BlockFormEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockFormEvent');
    }
    constructor(...args) {
        return new BlockFormEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockFormEvent.$javaClass.getHandlerList(...args);
    }
}
