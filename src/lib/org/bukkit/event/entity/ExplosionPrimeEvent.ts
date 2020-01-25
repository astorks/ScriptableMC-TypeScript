declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Explosive} from '../../../../org/bukkit/entity/Explosive.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface ExplosionPrimeEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setFire(fire: boolean): void;
	getRadius(): number;
	getFire(): boolean;
	setRadius(radius: number): void;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ExplosionPrimeEvent {
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

