declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface EntityEnterBlockEvent extends EntityEvent, Cancellable {
	getBlock(): Block;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class EntityEnterBlockEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityEnterBlockEvent');
	}

	constructor(entity: Entity, block: Block);
	constructor(...args: any[]) {
		return new EntityEnterBlockEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityEnterBlockEvent.$javaClass.getHandlerList(...args);
	}

}

