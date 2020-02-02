export default class HangingBreakEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.hanging.HangingBreakEvent');
    }
    constructor(...args) {
        return new HangingBreakEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return HangingBreakEvent.$javaClass.getHandlerList(...args);
    }
}
