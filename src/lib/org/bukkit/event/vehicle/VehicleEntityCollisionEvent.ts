declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js'
import VehicleCollisionEvent from '../../../../org/bukkit/event/vehicle/VehicleCollisionEvent.js'

export default interface VehicleEntityCollisionEvent extends VehicleCollisionEvent, Cancellable {
	getEntity(): Entity;
	getEventName(): string;
	getHandlers(): HandlerList;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	isCollisionCancelled(): boolean;
	isPickupCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setCollisionCancelled(cancel: boolean): void;
	setPickupCancelled(cancel: boolean): void;
}

export default class VehicleEntityCollisionEvent {
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

