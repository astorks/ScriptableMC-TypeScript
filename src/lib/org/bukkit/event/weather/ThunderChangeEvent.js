export default class ThunderChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.weather.ThunderChangeEvent');
    }
    constructor(...args) {
        return new ThunderChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ThunderChangeEvent.$javaClass.getHandlerList(...args);
    }
}
