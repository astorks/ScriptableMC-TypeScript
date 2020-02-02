export default class CreeperPowerEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.CreeperPowerEvent');
    }
    constructor(...args) {
        return new CreeperPowerEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return CreeperPowerEvent.$javaClass.getHandlerList(...args);
    }
}
