declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {VehicleEvent} from '../../../../org/bukkit/event/vehicle/VehicleEvent.js'

export interface VehicleExitEvent extends VehicleEvent, Cancellable {
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getExited(): LivingEntity;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class VehicleExitEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleExitEvent');
	}
	constructor(vehicle: Vehicle, exited: LivingEntity);
	constructor(...args: any[]) {
		return new VehicleExitEvent.$javaClass(...args);
	}
}

