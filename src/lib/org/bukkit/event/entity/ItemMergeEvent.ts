declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Item} from '../../../../org/bukkit/entity/Item.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface ItemMergeEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): Item;
	isCancelled(): boolean;
	setCancelled(cancelled: boolean): void;
	getTarget(): Item;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ItemMergeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ItemMergeEvent');
	}
	constructor(item: Item, target: Item);
	constructor(...args: any[]) {
		return new ItemMergeEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ItemMergeEvent.$javaClass.getHandlerList(...args);
	}
}

