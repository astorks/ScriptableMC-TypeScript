export default class FluidLevelChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.FluidLevelChangeEvent');
    }
    constructor(...args) {
        return new FluidLevelChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return FluidLevelChangeEvent.$javaClass.getHandlerList(...args);
    }
}
