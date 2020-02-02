export default class VehicleDamageEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.vehicle.VehicleDamageEvent');
    }
    constructor(...args) {
        return new VehicleDamageEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return VehicleDamageEvent.$javaClass.getHandlerList(...args);
    }
}
