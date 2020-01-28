import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { Vehicle } from '../../../../org/bukkit/entity/Vehicle.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { VehicleEvent } from '../../../../org/bukkit/event/vehicle/VehicleEvent.js';
export interface VehicleDestroyEvent extends VehicleEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getAttacker(): Entity;
    getVehicle(): Vehicle;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class VehicleDestroyEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle, attacker: Entity);
    static getHandlerList(): HandlerList;
}
