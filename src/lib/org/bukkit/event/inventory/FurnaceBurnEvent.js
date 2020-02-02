export default class FurnaceBurnEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.FurnaceBurnEvent');
    }
    constructor(...args) {
        return new FurnaceBurnEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return FurnaceBurnEvent.$javaClass.getHandlerList(...args);
    }
}
