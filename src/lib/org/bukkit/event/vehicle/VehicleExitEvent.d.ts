import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { LivingEntity } from '../../../../org/bukkit/entity/LivingEntity.js';
import { Vehicle } from '../../../../org/bukkit/entity/Vehicle.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { VehicleEvent } from '../../../../org/bukkit/event/vehicle/VehicleEvent.js';
export interface VehicleExitEvent extends VehicleEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getExited(): LivingEntity;
    getVehicle(): Vehicle;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class VehicleExitEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle, exited: LivingEntity);
    static getHandlerList(): HandlerList;
}
