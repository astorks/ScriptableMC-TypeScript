declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityCombustEvent from '../../../../org/bukkit/event/entity/EntityCombustEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface EntityCombustByBlockEvent extends EntityCombustEvent {
	getCombuster(): Block;
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

export default class EntityCombustByBlockEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityCombustByBlockEvent');
	}

	constructor(combuster: Block, combustee: Entity, duration: number);
	constructor(...args: any[]) {
		return new EntityCombustByBlockEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityCombustByBlockEvent.$javaClass.getHandlerList(...args);
	}

}

