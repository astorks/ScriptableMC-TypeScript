declare var Java: any;
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityCombustEvent from '../../../../org/bukkit/event/entity/EntityCombustEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface EntityCombustByEntityEvent extends EntityCombustEvent {
	getCombuster(): Entity;
	getDuration(): number;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setDuration(duration: number): void;
}

export default class EntityCombustByEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityCombustByEntityEvent');
	}

	constructor(combuster: Entity, combustee: Entity, duration: number);
	constructor(...args: any[]) {
		return new EntityCombustByEntityEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityCombustByEntityEvent.$javaClass.getHandlerList(...args);
	}

}

