declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityExplodeEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getYield(): number;
	blockList(): any;
	setYield(_yield: number): void;
	getLocation(): Location;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityExplodeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityExplodeEvent');
	}
	constructor(what: Entity, location: Location, blocks: any, _yield: number);
	constructor(...args: any[]) {
		return new EntityExplodeEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityExplodeEvent.$javaClass.getHandlerList(...args);
	}
}

