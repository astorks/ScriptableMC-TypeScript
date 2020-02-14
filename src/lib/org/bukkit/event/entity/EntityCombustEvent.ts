declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface EntityCombustEvent extends EntityEvent, Cancellable {
	getDuration(): number;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	setDuration(duration: number): void;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class EntityCombustEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityCombustEvent');
	}
	constructor(combustee: Entity, duration: number);
	constructor(...args: any[]) {
		return new EntityCombustEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityCombustEvent.$javaClass.getHandlerList(...args);
	}
}

