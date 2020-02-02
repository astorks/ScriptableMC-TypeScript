import Event from '../../../../org/bukkit/event/Event.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js';
export default interface VehicleEvent extends Event {
    getVehicle(): Vehicle;
    getHandlers(): HandlerList;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class VehicleEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle);
}
