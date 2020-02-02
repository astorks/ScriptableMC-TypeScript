export default class VehicleEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.vehicle.VehicleEvent');
    }
    constructor(...args) {
        return new VehicleEvent.$javaClass(...args);
    }
}
