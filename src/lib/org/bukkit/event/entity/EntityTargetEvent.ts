declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityTargetEvent$TargetReason from '../../../../org/bukkit/event/entity/EntityTargetEvent$TargetReason.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface EntityTargetEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getReason(): EntityTargetEvent$TargetReason;
	getTarget(): Entity;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setTarget(target: Entity): void;
}

export default class EntityTargetEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityTargetEvent');
	}

	constructor(entity: Entity, target: Entity, reason: EntityTargetEvent$TargetReason);
	constructor(...args: any[]) {
		return new EntityTargetEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityTargetEvent.$javaClass.getHandlerList(...args);
	}

}

