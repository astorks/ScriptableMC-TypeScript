declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import Explosive from '../../../../org/bukkit/entity/Explosive.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface ExplosionPrimeEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getFire(): boolean;
	getHandlers(): HandlerList;
	getRadius(): number;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setFire(fire: boolean): void;
	setRadius(radius: number): void;
}

export default class ExplosionPrimeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ExplosionPrimeEvent');
	}

	constructor(explosive: Explosive);
	constructor(what: Entity, radius: number, fire: boolean);
	constructor(...args: any[]) {
		return new ExplosionPrimeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ExplosionPrimeEvent.$javaClass.getHandlerList(...args);
	}

}

