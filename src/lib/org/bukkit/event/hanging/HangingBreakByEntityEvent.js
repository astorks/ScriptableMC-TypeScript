export default class HangingBreakByEntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.hanging.HangingBreakByEntityEvent');
    }
    constructor(...args) {
        return new HangingBreakByEntityEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return HangingBreakByEntityEvent.$javaClass.getHandlerList(...args);
    }
}
