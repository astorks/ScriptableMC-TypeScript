import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js';
import VehicleCollisionEvent from '../../../../org/bukkit/event/vehicle/VehicleCollisionEvent.js';
export default interface VehicleEntityCollisionEvent extends VehicleCollisionEvent, Cancellable {
    getEntity(): Entity;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    isPickupCancelled(): boolean;
    setPickupCancelled(cancel: boolean): void;
    setCollisionCancelled(cancel: boolean): void;
    isCollisionCancelled(): boolean;
    getVehicle(): Vehicle;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class VehicleEntityCollisionEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle, entity: Entity);
    static getHandlerList(): HandlerList;
}
