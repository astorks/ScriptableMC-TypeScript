declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'

export default interface EntityResurrectEvent extends EntityEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	getEntity(): LivingEntity;
	getEntity(): Entity;
	setCancelled(cancelled: boolean): void;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class EntityResurrectEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityResurrectEvent');
	}
	constructor(what: LivingEntity);
	constructor(...args: any[]) {
		return new EntityResurrectEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityResurrectEvent.$javaClass.getHandlerList(...args);
	}
}

