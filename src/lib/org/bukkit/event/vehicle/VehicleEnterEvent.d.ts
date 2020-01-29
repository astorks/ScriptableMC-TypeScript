import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { Vehicle } from '../../../../org/bukkit/entity/Vehicle.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { VehicleEvent } from '../../../../org/bukkit/event/vehicle/VehicleEvent.js';
export interface VehicleEnterEvent extends VehicleEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntered(): Entity;
    getVehicle(): Vehicle;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class VehicleEnterEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle, entered: Entity);
    static getHandlerList(): HandlerList;
}
