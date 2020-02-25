declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockData from '../../../../org/bukkit/block/data/BlockData.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityChangeBlockEvent from '../../../../org/bukkit/event/entity/EntityChangeBlockEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'
import Material from '../../../../org/bukkit/Material.js'

export default interface EntityBreakDoorEvent extends EntityChangeBlockEvent {
	getBlock(): Block;
	getBlockData(): BlockData;
	getEntity(): LivingEntity;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getTo(): Material;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class EntityBreakDoorEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityBreakDoorEvent');
	}

	constructor(entity: LivingEntity, targetBlock: Block);
	constructor(...args: any[]) {
		return new EntityBreakDoorEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityBreakDoorEvent.$javaClass.getHandlerList(...args);
	}

}

