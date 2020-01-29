import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Vehicle } from '../../../../org/bukkit/entity/Vehicle.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { VehicleEvent } from '../../../../org/bukkit/event/vehicle/VehicleEvent.js';
export interface VehicleCreateEvent extends VehicleEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    getVehicle(): Vehicle;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class VehicleCreateEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle);
    static getHandlerList(): HandlerList;
}
