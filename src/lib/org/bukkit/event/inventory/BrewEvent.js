export default class BrewEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.BrewEvent');
    }
    constructor(...args) {
        return new BrewEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BrewEvent.$javaClass.getHandlerList(...args);
    }
}
