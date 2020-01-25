declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityTargetEvent$TargetReason} from '../../../../org/bukkit/event/entity/EntityTargetEvent$TargetReason.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityTargetEvent} from '../../../../org/bukkit/event/entity/EntityTargetEvent.js'

export interface EntityTargetLivingEntityEvent extends EntityTargetEvent {
	getTarget(): Entity;
	getTarget(): LivingEntity;
	setTarget(target: Entity): void;
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getReason(): EntityTargetEvent$TargetReason;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityTargetLivingEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityTargetLivingEntityEvent');
	}
	constructor(entity: Entity, target: LivingEntity, reason: EntityTargetEvent$TargetReason);
	constructor(...args: any[]) {
		return new EntityTargetLivingEntityEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityTargetLivingEntityEvent.$javaClass.getHandlerList(...args);
	}
}

