declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {BlockIgniteEvent$IgniteCause} from '../../../../org/bukkit/event/block/BlockIgniteEvent$IgniteCause.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockIgniteEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getIgnitingBlock(): Block;
	getIgnitingEntity(): Entity;
	getCause(): BlockIgniteEvent$IgniteCause;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockIgniteEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockIgniteEvent');
	}
	constructor(theBlock: Block, cause: BlockIgniteEvent$IgniteCause, ignitingEntity: Entity, ignitingBlock: Block);
	constructor(theBlock: Block, cause: BlockIgniteEvent$IgniteCause, ignitingEntity: Entity);
	constructor(theBlock: Block, cause: BlockIgniteEvent$IgniteCause, ignitingBlock: Block);
	constructor(...args: any[]) {
		return new BlockIgniteEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockIgniteEvent.$javaClass.getHandlerList(...args);
	}
}

