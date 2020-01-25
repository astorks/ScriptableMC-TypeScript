declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Item} from '../../../../org/bukkit/entity/Item.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface ItemDespawnEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): Item;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getLocation(): Location;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ItemDespawnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ItemDespawnEvent');
	}
	constructor(despawnee: Item, loc: Location);
	constructor(...args: any[]) {
		return new ItemDespawnEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ItemDespawnEvent.$javaClass.getHandlerList(...args);
	}
}

