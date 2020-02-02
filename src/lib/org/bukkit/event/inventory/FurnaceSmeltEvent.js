export default class FurnaceSmeltEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.FurnaceSmeltEvent');
    }
    constructor(...args) {
        return new FurnaceSmeltEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return FurnaceSmeltEvent.$javaClass.getHandlerList(...args);
    }
}
