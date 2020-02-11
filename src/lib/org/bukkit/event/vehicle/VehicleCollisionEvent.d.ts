import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js';
import VehicleEvent from '../../../../org/bukkit/event/vehicle/VehicleEvent.js';
export default interface VehicleCollisionEvent extends VehicleEvent {
    getVehicle(): Vehicle;
    getHandlers(): HandlerList;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class VehicleCollisionEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle);
}
