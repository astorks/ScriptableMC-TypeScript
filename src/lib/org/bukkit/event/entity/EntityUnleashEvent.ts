declare var Java: any;
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import EntityUnleashEvent$UnleashReason from '../../../../org/bukkit/event/entity/EntityUnleashEvent$UnleashReason.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface EntityUnleashEvent extends EntityEvent {
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getReason(): EntityUnleashEvent$UnleashReason;
	isAsynchronous(): boolean;
}

export default class EntityUnleashEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityUnleashEvent');
	}

	constructor(entity: Entity, reason: EntityUnleashEvent$UnleashReason);
	constructor(...args: any[]) {
		return new EntityUnleashEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityUnleashEvent.$javaClass.getHandlerList(...args);
	}

}

