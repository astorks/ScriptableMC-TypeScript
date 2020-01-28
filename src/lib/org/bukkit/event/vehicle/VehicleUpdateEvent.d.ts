import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Vehicle } from '../../../../org/bukkit/entity/Vehicle.js';
import { VehicleEvent } from '../../../../org/bukkit/event/vehicle/VehicleEvent.js';
export interface VehicleUpdateEvent extends VehicleEvent {
    getHandlers(): HandlerList;
    getVehicle(): Vehicle;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class VehicleUpdateEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle);
    static getHandlerList(): HandlerList;
}
