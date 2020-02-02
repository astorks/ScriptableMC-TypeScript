export default class HangingPlaceEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.hanging.HangingPlaceEvent');
    }
    constructor(...args) {
        return new HangingPlaceEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return HangingPlaceEvent.$javaClass.getHandlerList(...args);
    }
}
