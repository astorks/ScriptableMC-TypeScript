declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js'
import VehicleEvent from '../../../../org/bukkit/event/vehicle/VehicleEvent.js'

export default interface VehicleCollisionEvent extends VehicleEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
}

export default class VehicleCollisionEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleCollisionEvent');
	}

	constructor(vehicle: Vehicle);
	constructor(...args: any[]) {
		return new VehicleCollisionEvent.$javaClass(...args);
	}

}

