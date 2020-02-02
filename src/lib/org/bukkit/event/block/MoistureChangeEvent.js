export default class MoistureChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.MoistureChangeEvent');
    }
    constructor(...args) {
        return new MoistureChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return MoistureChangeEvent.$javaClass.getHandlerList(...args);
    }
}
