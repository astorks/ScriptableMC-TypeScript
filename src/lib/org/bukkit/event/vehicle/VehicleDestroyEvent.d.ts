import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js';
import VehicleEvent from '../../../../org/bukkit/event/vehicle/VehicleEvent.js';
export default interface VehicleDestroyEvent extends VehicleEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getAttacker(): Entity;
    getVehicle(): Vehicle;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class VehicleDestroyEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle, attacker: Entity);
    static getHandlerList(): HandlerList;
}
