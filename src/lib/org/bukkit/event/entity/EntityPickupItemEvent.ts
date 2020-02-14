declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Item from '../../../../org/bukkit/entity/Item.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'

export default interface EntityPickupItemEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntity(): LivingEntity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getItem(): Item;
	getRemaining(): number;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class EntityPickupItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPickupItemEvent');
	}

	constructor(entity: LivingEntity, item: Item, remaining: number);
	constructor(...args: any[]) {
		return new EntityPickupItemEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityPickupItemEvent.$javaClass.getHandlerList(...args);
	}

}

