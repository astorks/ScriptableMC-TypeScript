import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js';
import VehicleEvent from '../../../../org/bukkit/event/vehicle/VehicleEvent.js';
export default interface VehicleUpdateEvent extends VehicleEvent {
    getHandlers(): HandlerList;
    getVehicle(): Vehicle;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class VehicleUpdateEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle);
    static getHandlerList(): HandlerList;
}
