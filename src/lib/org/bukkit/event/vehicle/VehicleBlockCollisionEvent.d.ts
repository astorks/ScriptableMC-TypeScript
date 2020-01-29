import { Block } from '../../../../org/bukkit/block/Block.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Vehicle } from '../../../../org/bukkit/entity/Vehicle.js';
import { VehicleCollisionEvent } from '../../../../org/bukkit/event/vehicle/VehicleCollisionEvent.js';
export interface VehicleBlockCollisionEvent extends VehicleCollisionEvent {
    getBlock(): Block;
    getHandlers(): HandlerList;
    getVehicle(): Vehicle;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class VehicleBlockCollisionEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle, block: Block);
    static getHandlerList(): HandlerList;
}
