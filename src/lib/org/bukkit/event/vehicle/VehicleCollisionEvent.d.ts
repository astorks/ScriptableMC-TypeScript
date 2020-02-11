import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js';
import VehicleEvent from '../../../../org/bukkit/event/vehicle/VehicleEvent.js';
export default interface VehicleCollisionEvent extends VehicleEvent {
    getVehicle(): Vehicle;
    getEventName(): string;
    isAsynchronous(): boolean;
    getHandlers(): HandlerList;
}
export default class VehicleCollisionEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle);
}
