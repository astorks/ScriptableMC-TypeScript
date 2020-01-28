import { Vehicle } from '../../../../org/bukkit/entity/Vehicle.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { VehicleEvent } from '../../../../org/bukkit/event/vehicle/VehicleEvent.js';
export interface VehicleCollisionEvent extends VehicleEvent {
    getVehicle(): Vehicle;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class VehicleCollisionEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle);
}
