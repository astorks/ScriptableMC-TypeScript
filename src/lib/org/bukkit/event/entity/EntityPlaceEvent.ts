declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'

export default interface EntityPlaceEvent extends EntityEvent, Cancellable {
	getBlock(): Block;
	getBlockFace(): BlockFace;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class EntityPlaceEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPlaceEvent');
	}

	constructor(entity: Entity, player: Player, block: Block, blockFace: BlockFace);
	constructor(...args: any[]) {
		return new EntityPlaceEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityPlaceEvent.$javaClass.getHandlerList(...args);
	}

}

