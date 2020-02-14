declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import BlockPistonEvent from '../../../../org/bukkit/event/block/BlockPistonEvent.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Location from '../../../../org/bukkit/Location.js'

export default interface BlockPistonRetractEvent extends BlockPistonEvent {
	getBlock(): Block;
	getBlocks(): Array<Block>;
	getDirection(): BlockFace;
	getEventName(): string;
	getHandlers(): HandlerList;
	getRetractLocation(): Location;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	isSticky(): boolean;
	setCancelled(cancelled: boolean): void;
}

export default class BlockPistonRetractEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockPistonRetractEvent');
	}

	constructor(block: Block, blocks: Array<any>, direction: BlockFace);
	constructor(...args: any[]) {
		return new BlockPistonRetractEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockPistonRetractEvent.$javaClass.getHandlerList(...args);
	}

}

