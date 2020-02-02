export default class BatToggleSleepEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.BatToggleSleepEvent');
    }
    constructor(...args) {
        return new BatToggleSleepEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BatToggleSleepEvent.$javaClass.getHandlerList(...args);
    }
}
