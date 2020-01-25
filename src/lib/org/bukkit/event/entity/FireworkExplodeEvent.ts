declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Firework} from '../../../../org/bukkit/entity/Firework.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface FireworkExplodeEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): Firework;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class FireworkExplodeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.FireworkExplodeEvent');
	}
	constructor(what: Firework);
	constructor(...args: any[]) {
		return new FireworkExplodeEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return FireworkExplodeEvent.$javaClass.getHandlerList(...args);
	}
}

