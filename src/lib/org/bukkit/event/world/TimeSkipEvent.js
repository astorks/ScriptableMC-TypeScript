export default class TimeSkipEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.TimeSkipEvent');
    }
    constructor(...args) {
        return new TimeSkipEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return TimeSkipEvent.$javaClass.getHandlerList(...args);
    }
}
