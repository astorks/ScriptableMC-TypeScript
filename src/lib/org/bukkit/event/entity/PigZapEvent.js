export default class PigZapEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.PigZapEvent');
    }
    constructor(...args) {
        return new PigZapEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PigZapEvent.$javaClass.getHandlerList(...args);
    }
}
