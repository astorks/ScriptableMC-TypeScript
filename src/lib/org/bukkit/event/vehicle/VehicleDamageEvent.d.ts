import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { Vehicle } from '../../../../org/bukkit/entity/Vehicle.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { VehicleEvent } from '../../../../org/bukkit/event/vehicle/VehicleEvent.js';
export interface VehicleDamageEvent extends VehicleEvent, Cancellable {
    setDamage(damage: number): void;
    getDamage(): number;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getAttacker(): Entity;
    getVehicle(): Vehicle;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class VehicleDamageEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle, attacker: Entity, damage: number);
    static getHandlerList(): HandlerList;
}
