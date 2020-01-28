import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { Vehicle } from '../../../../org/bukkit/entity/Vehicle.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { VehicleEvent } from '../../../../org/bukkit/event/vehicle/VehicleEvent.js';
export interface VehicleDamageEvent extends VehicleEvent, Cancellable {
    getHandlers(): HandlerList;
    setDamage(damage: number): void;
    getDamage(): number;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getAttacker(): Entity;
    getVehicle(): Vehicle;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class VehicleDamageEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle, attacker: Entity, damage: number);
    static getHandlerList(): HandlerList;
}
