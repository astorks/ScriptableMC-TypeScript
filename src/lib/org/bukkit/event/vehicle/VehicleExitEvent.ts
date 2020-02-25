declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js'
import VehicleEvent from '../../../../org/bukkit/event/vehicle/VehicleEvent.js'

export default interface VehicleExitEvent extends VehicleEvent, Cancellable {
	getEventName(): string;
	getExited(): LivingEntity;
	getHandlers(): HandlerList;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class VehicleExitEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleExitEvent');
	}

	constructor(vehicle: Vehicle, exited: LivingEntity);
	constructor(...args: any[]) {
		return new VehicleExitEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return VehicleExitEvent.$javaClass.getHandlerList(...args);
	}

}

