declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {AnimalTamer} from '../../../../org/bukkit/entity/AnimalTamer.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityTameEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getOwner(): AnimalTamer;
	getEntity(): Entity;
	getEntity(): LivingEntity;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityTameEvent {
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

