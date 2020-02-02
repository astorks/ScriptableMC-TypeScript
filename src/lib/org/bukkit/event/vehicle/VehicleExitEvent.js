export default class VehicleExitEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.vehicle.VehicleExitEvent');
    }
    constructor(...args) {
        return new VehicleExitEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return VehicleExitEvent.$javaClass.getHandlerList(...args);
    }
}
