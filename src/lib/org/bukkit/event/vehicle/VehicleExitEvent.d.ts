import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js';
import VehicleEvent from '../../../../org/bukkit/event/vehicle/VehicleEvent.js';
export default interface VehicleExitEvent extends VehicleEvent, Cancellable {
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getExited(): LivingEntity;
    getVehicle(): Vehicle;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class VehicleExitEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle, exited: LivingEntity);
    static getHandlerList(): HandlerList;
}
