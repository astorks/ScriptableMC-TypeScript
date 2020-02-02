export default class LightningStrikeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.weather.LightningStrikeEvent');
    }
    constructor(...args) {
        return new LightningStrikeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return LightningStrikeEvent.$javaClass.getHandlerList(...args);
    }
}
