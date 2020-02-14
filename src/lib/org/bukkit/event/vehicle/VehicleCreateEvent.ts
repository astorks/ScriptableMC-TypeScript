declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js'
import VehicleEvent from '../../../../org/bukkit/event/vehicle/VehicleEvent.js'

export default interface VehicleCreateEvent extends VehicleEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancelled: boolean): void;
}

export default class VehicleCreateEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleCreateEvent');
	}

	constructor(vehicle: Vehicle);
	constructor(...args: any[]) {
		return new VehicleCreateEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return VehicleCreateEvent.$javaClass.getHandlerList(...args);
	}

}

