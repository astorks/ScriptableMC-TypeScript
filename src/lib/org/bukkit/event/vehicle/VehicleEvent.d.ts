import Event from '../../../../org/bukkit/event/Event.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js';
export default interface VehicleEvent extends Event {
    getVehicle(): Vehicle;
    getEventName(): string;
    isAsynchronous(): boolean;
    getHandlers(): HandlerList;
}
export default class VehicleEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle);
}
