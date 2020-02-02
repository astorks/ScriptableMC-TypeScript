export default class TradeSelectEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.TradeSelectEvent');
    }
    constructor(...args) {
        return new TradeSelectEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return TradeSelectEvent.$javaClass.getHandlerList(...args);
    }
}
