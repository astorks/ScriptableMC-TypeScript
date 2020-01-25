declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {VehicleCollisionEvent} from '../../../../org/bukkit/event/vehicle/VehicleCollisionEvent.js'

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
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class VehicleEntityCollisionEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleEntityCollisionEvent');
	}
	constructor(vehicle: Vehicle, entity: Entity);
	constructor(...args: any[]) {
		return new VehicleEntityCollisionEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return VehicleEntityCollisionEvent.$javaClass.getHandlerList(...args);
	}
}

