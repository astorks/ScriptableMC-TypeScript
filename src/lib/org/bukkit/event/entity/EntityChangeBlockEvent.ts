declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockData from '../../../../org/bukkit/block/data/BlockData.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Material from '../../../../org/bukkit/Material.js'

export default interface EntityChangeBlockEvent extends EntityEvent, Cancellable {
	getBlock(): Block;
	getBlockData(): BlockData;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getTo(): Material;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class EntityChangeBlockEvent {
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

