import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { Vehicle } from '../../../../org/bukkit/entity/Vehicle.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { VehicleCollisionEvent } from '../../../../org/bukkit/event/vehicle/VehicleCollisionEvent.js';
export interface VehicleEntityCollisionEvent extends VehicleCollisionEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): Entity;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    isPickupCancelled(): boolean;
    setPickupCancelled(cancel: boolean): void;
    isCollisionCancelled(): boolean;
    setCollisionCancelled(cancel: boolean): void;
    getVehicle(): Vehicle;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class VehicleEntityCollisionEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle, entity: Entity);
    static getHandlerList(): HandlerList;
}
