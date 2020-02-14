declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js'
import VehicleCollisionEvent from '../../../../org/bukkit/event/vehicle/VehicleCollisionEvent.js'

export default interface VehicleBlockCollisionEvent extends VehicleCollisionEvent {
	getBlock(): Block;
	getEventName(): string;
	getHandlers(): HandlerList;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
}

export default class VehicleBlockCollisionEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleBlockCollisionEvent');
	}

	constructor(vehicle: Vehicle, block: Block);
	constructor(...args: any[]) {
		return new VehicleBlockCollisionEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return VehicleBlockCollisionEvent.$javaClass.getHandlerList(...args);
	}

}

