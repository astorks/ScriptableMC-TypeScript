declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Location from '../../../../org/bukkit/Location.js'
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js'
import VehicleEvent from '../../../../org/bukkit/event/vehicle/VehicleEvent.js'

export default interface VehicleMoveEvent extends VehicleEvent {
	getEventName(): string;
	getFrom(): Location;
	getHandlers(): HandlerList;
	getTo(): Location;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
}

export default class VehicleMoveEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleMoveEvent');
	}

	constructor(vehicle: Vehicle, from: Location, to: Location);
	constructor(...args: any[]) {
		return new VehicleMoveEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return VehicleMoveEvent.$javaClass.getHandlerList(...args);
	}

}

