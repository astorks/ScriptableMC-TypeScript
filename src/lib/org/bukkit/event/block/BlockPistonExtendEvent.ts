declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import BlockPistonEvent from '../../../../org/bukkit/event/block/BlockPistonEvent.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface BlockPistonExtendEvent extends BlockPistonEvent {
	getBlock(): Block;
	getBlocks(): Array<Block>;
	getDirection(): BlockFace;
	getEventName(): string;
	getHandlers(): HandlerList;
	getLength(): number;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	isSticky(): boolean;
	setCancelled(cancelled: boolean): void;
}

export default class BlockPistonExtendEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockPistonExtendEvent');
	}

	constructor(block: Block, blocks: Array<any>, direction: BlockFace);
	constructor(block: Block, length: number, direction: BlockFace);
	constructor(...args: any[]) {
		return new BlockPistonExtendEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockPistonExtendEvent.$javaClass.getHandlerList(...args);
	}

}

