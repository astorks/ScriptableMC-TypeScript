declare var Java: any;
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityTargetEvent from '../../../../org/bukkit/event/entity/EntityTargetEvent.js'
import EntityTargetEvent$TargetReason from '../../../../org/bukkit/event/entity/EntityTargetEvent$TargetReason.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'

export default interface EntityTargetLivingEntityEvent extends EntityTargetEvent {
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getReason(): EntityTargetEvent$TargetReason;
	getTarget(): Entity;
	getTarget(): LivingEntity;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setTarget(target: Entity): void;
}

export default class EntityTargetLivingEntityEvent {
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

