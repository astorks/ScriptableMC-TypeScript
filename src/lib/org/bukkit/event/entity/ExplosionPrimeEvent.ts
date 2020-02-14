declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import Explosive from '../../../../org/bukkit/entity/Explosive.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface ExplosionPrimeEvent extends EntityEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getRadius(): number;
	setRadius(radius: number): void;
	getFire(): boolean;
	setFire(fire: boolean): void;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class ExplosionPrimeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ExplosionPrimeEvent');
	}
	constructor(what: Entity, radius: number, fire: boolean);
	constructor(explosive: Explosive);
	constructor(...args: any[]) {
		return new ExplosionPrimeEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ExplosionPrimeEvent.$javaClass.getHandlerList(...args);
	}
}

