export class VehicleEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.vehicle.VehicleEvent');
    }
    constructor(...args) {
        return new VehicleEvent.$javaClass(...args);
    }
}
//# sourceMappingURL=VehicleEvent.js.map