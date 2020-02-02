import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js';
import VehicleEvent from '../../../../org/bukkit/event/vehicle/VehicleEvent.js';
export default interface VehicleMoveEvent extends VehicleEvent {
    getHandlers(): HandlerList;
    getTo(): Location;
    getFrom(): Location;
    getVehicle(): Vehicle;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class VehicleMoveEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle, from: Location, to: Location);
    static getHandlerList(): HandlerList;
}
