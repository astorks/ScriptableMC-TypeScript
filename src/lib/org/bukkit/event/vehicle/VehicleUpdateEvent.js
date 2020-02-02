export default class VehicleUpdateEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.vehicle.VehicleUpdateEvent');
    }
    constructor(...args) {
        return new VehicleUpdateEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return VehicleUpdateEvent.$javaClass.getHandlerList(...args);
    }
}
