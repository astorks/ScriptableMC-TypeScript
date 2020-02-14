declare var Java: any;
import AnimalTamer from '../../../../org/bukkit/entity/AnimalTamer.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'

export default interface EntityTameEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntity(): LivingEntity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getOwner(): AnimalTamer;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class EntityTameEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityTameEvent');
	}

	constructor(entity: LivingEntity, owner: AnimalTamer);
	constructor(...args: any[]) {
		return new EntityTameEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityTameEvent.$javaClass.getHandlerList(...args);
	}

}

