export default class FurnaceExtractEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.FurnaceExtractEvent');
    }
    constructor(...args) {
        return new FurnaceExtractEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return FurnaceExtractEvent.$javaClass.getHandlerList(...args);
    }
}
