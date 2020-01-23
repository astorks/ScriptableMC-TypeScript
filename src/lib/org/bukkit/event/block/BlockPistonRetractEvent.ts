declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockPistonEvent} from '../../../../org/bukkit/event/block/BlockPistonEvent.js'

export interface BlockPistonRetractEvent extends BlockPistonEvent {
	getHandlers(): HandlerList;
	getBlocks(): any;
	getRetractLocation(): Location;
	getDirection(): BlockFace;
	setCancelled(cancelled: boolean): void;
	isCancelled(): boolean;
	isSticky(): boolean;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockPistonRetractEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockPistonRetractEvent');
	}
	constructor(block: Block, blocks: any, direction: BlockFace);
	constructor(...args: any[]) {
		return new BlockPistonRetractEvent.$javaClass(...args);
	}
}

