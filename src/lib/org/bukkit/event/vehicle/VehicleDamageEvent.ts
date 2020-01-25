declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {VehicleEvent} from '../../../../org/bukkit/event/vehicle/VehicleEvent.js'

export interface VehicleDamageEvent extends VehicleEvent, Cancellable {
	getHandlers(): HandlerList;
	setDamage(damage: number): void;
	getDamage(): number;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getAttacker(): Entity;
	getVehicle(): Vehicle;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class VehicleDamageEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleDamageEvent');
	}
	constructor(vehicle: Vehicle, attacker: Entity, damage: number);
	constructor(...args: any[]) {
		return new VehicleDamageEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return VehicleDamageEvent.$javaClass.getHandlerList(...args);
	}
}

