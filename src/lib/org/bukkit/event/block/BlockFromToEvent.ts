declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface BlockFromToEvent extends BlockEvent, Cancellable {
	getBlock(): Block;
	getEventName(): string;
	getFace(): BlockFace;
	getHandlers(): HandlerList;
	getToBlock(): Block;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class BlockFromToEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockFromToEvent');
	}

	constructor(block: Block, toBlock: Block);
	constructor(block: Block, face: BlockFace);
	constructor(...args: any[]) {
		return new BlockFromToEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockFromToEvent.$javaClass.getHandlerList(...args);
	}

}

