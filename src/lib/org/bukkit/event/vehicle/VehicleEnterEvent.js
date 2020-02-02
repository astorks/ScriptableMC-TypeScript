export default class VehicleEnterEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.vehicle.VehicleEnterEvent');
    }
    constructor(...args) {
        return new VehicleEnterEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return VehicleEnterEvent.$javaClass.getHandlerList(...args);
    }
}
