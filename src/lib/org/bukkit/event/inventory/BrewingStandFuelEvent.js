export default class BrewingStandFuelEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.BrewingStandFuelEvent');
    }
    constructor(...args) {
        return new BrewingStandFuelEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BrewingStandFuelEvent.$javaClass.getHandlerList(...args);
    }
}
