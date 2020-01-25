declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockData} from '../../../../org/bukkit/block/data/BlockData.js'
import {Material} from '../../../../org/bukkit/Material.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityChangeBlockEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getBlock(): Block;
	getBlockData(): BlockData;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getTo(): Material;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityChangeBlockEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityChangeBlockEvent');
	}
	constructor(what: Entity, block: Block, to: BlockData);
	constructor(...args: any[]) {
		return new EntityChangeBlockEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityChangeBlockEvent.$javaClass.getHandlerList(...args);
	}
}

