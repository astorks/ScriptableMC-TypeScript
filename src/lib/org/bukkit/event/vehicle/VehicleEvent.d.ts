import { Vehicle } from '../../../../org/bukkit/entity/Vehicle.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Event } from '../../../../org/bukkit/event/Event.js';
export interface VehicleEvent extends Event {
    getVehicle(): Vehicle;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class VehicleEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle);
}
