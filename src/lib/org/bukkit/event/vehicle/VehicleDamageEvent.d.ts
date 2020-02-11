import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js';
import VehicleEvent from '../../../../org/bukkit/event/vehicle/VehicleEvent.js';
export default interface VehicleDamageEvent extends VehicleEvent, Cancellable {
    getDamage(): number;
    setDamage(damage: number): void;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getAttacker(): Entity;
    getVehicle(): Vehicle;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class VehicleDamageEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle, attacker: Entity, damage: number);
    static getHandlerList(): HandlerList;
}
