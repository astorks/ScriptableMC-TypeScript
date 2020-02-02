export default class VehicleEntityCollisionEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.vehicle.VehicleEntityCollisionEvent');
    }
    constructor(...args) {
        return new VehicleEntityCollisionEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return VehicleEntityCollisionEvent.$javaClass.getHandlerList(...args);
    }
}
