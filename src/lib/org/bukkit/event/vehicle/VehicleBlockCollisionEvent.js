export default class VehicleBlockCollisionEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.vehicle.VehicleBlockCollisionEvent');
    }
    constructor(...args) {
        return new VehicleBlockCollisionEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return VehicleBlockCollisionEvent.$javaClass.getHandlerList(...args);
    }
}
